package com.safe.sdk.crypto;

import com.safe.sdk.bean.Bean;
import com.safe.sdk.jni.EosJni;

/**
 * 秘钥-公钥对
 * @author koala
 *
 */
public class KeyPair extends Bean {

	public String getPrivateKey() {
		return privateKey;
	}

	public void setPrivateKey(String privateKey) {
		this.privateKey = privateKey;
	}

	public String getPublicKey() {
		return publicKey;
	}

	public void setPublicKey(String publicKey) {
		this.publicKey = publicKey;
	}

	private String privateKey;
	private String publicKey;
	
	public KeyPair(String privateKey) {
		this.privateKey = privateKey;
		this.publicKey = getPublicKey(privateKey);
	}
	
	/**
	 * 构造函数，此函数需要确定privateKey和publicKey是否匹配
	 * @param privateKey
	 * @param publicKey
	 */
	public KeyPair(String privateKey, String publicKey) {
		this.privateKey = privateKey;
		this.publicKey = publicKey;
	}
	
	/**
	 * 生成公钥私钥对
	 * @return
	 */
	public static KeyPair generate() {
		String keyPairStr = EosJni.createKey();
		String [] t = keyPairStr.split("\n",-1);
		return new KeyPair(t[0], t[1]);
	}
	
	/**
	 * 计算私钥的公钥
	 * @param privateKey
	 * @return
	 */
	public static String getPublicKey(String privateKey) {
		return EosJni.getPublicKey(privateKey);
	}
	
}
