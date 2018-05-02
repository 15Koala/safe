package com.safe.sdk.crypto;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.spec.ECGenParameterSpec;

import com.safe.sdk.comm.SHA256;

public class TestEC {

	public static byte [] parseStr(String s) {
		//48 -100 -45 70 52 98 80 120 38 17 114 112 103 8 -16 25 108 -2 73 22 -24 23 26 -123 -39 -91 -52 14 -86 75 -31 -61
		String [] ss = s.split(" ");
		byte [] b = new byte[ss.length];
		for(int i=0;i<ss.length;i++) {
			b[i] = (byte) Integer.parseInt(ss[i]);
		}
		return b;
	}
	
	public static void main(String[] args) throws Exception {
		KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");
		ECGenParameterSpec ecGenParameterSpec = new ECGenParameterSpec("secp256k1");
		keyPairGenerator.initialize(ecGenParameterSpec, new SecureRandom());
		KeyPair keyPair = keyPairGenerator.generateKeyPair();
		// 获取公钥
		PublicKey publicKey = keyPair.getPublic();
		// 获取私钥
		PrivateKey privateKet = keyPair.getPrivate();
		byte [] secret = new byte[32];
		//System.out.println(privateKet.getEncoded().length);
		System.arraycopy(privateKet.getEncoded(), 0, secret, 0, secret.length);

		int size_of_data_to_hash = secret.length + 1;
		int size_of_hash_bytes = 4; 
		byte [] digest = SHA256.getSHA256(secret);
		digest = SHA256.getSHA256(digest);
		byte [] data = new byte[size_of_data_to_hash + size_of_hash_bytes];
		data[0] = (byte) 0x80;
		System.out.println(SHA256.bytePrint(data));
		System.arraycopy(secret, 0, data, 1, secret.length);
		System.out.println(SHA256.bytePrint(data));

		System.arraycopy(digest, 0, data, 1 + secret.length , size_of_hash_bytes);
		
		System.out.println(SHA256.bytePrint(data));
		String priStr = Base58.encode(data);
		System.out.println(priStr);
		
		byte [] bb = parseStr("48 -100 -45 70 52 98 80 120 38 17 114 112 103 8 -16 25 108 -2 73 22 -24 23 26 -123 -39 -91 -52 14 -86 75 -31 -61");
		byte [] d1 = SHA256.getSHA256(bb);
		d1 = SHA256.getSHA256(d1);
		System.out.println(SHA256.bytePrint(d1));
		
		//from wif
		byte[] wif_bytes = Base58.decode("5KhUyNZ2XMtZc1cMqVcUvC6jxAj1k96vKvwX92UjSKCVSxZ4rXw");
		System.out.println(SHA256.bytePrint(wif_bytes) + "," + wif_bytes.length);
		byte[] key_bytes = new byte[wif_bytes.length - 5];
		System.arraycopy(wif_bytes, 1, key_bytes, 0 , wif_bytes.length - 5);
		System.out.println(SHA256.bytePrint(key_bytes));
		
		

	}

}
