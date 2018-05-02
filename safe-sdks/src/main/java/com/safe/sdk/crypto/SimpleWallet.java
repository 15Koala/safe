package com.safe.sdk.crypto;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.safe.sdk.bean.RequiredKeys;
import com.safe.sdk.bean.Transaction;
import com.safe.sdk.jni.EosJni;

/**
 * 具备简单的钱包功能
 * @author koala
 *
 */
public class SimpleWallet implements Wallet {
	
	private TreeMap<String, String> keyPairMap;//< public=>private
	
	/**
	 * 导入私钥
	 * @param privateKey
	 */
	public String importKey(String privateKey) {
		KeyPair kp = new KeyPair(privateKey);
		String publicKey = kp.getPublicKey();
		if(keyPairMap == null) 
			keyPairMap = new TreeMap<String, String>();
		keyPairMap.put(publicKey, privateKey);
		return "OK";
	}
	
	/**
	 * 获取公钥列表
	 * @return
	 */
	public List<String> getPublicKeys() {
		List<String> keys = new ArrayList<String>();
		for(String key: keyPairMap.keySet()) {
			keys.add(key);
		}
		return keys;
	}
	
	/**
	 * 获取keypair列表
	 * @return
	 */
	public List<KeyPair> getKeyPairs() {
		List<KeyPair> keys = new ArrayList<KeyPair>();
		for(String key: keyPairMap.keySet()) {
			keys.add(new KeyPair(keyPairMap.get(key),key));
		}
		return keys;
	}

	public Transaction signTransaction(Transaction trx, RequiredKeys requiredKeys,String chainId) {
		ObjectMapper mapper = new ObjectMapper();
		List<String> pubReq = requiredKeys.getRequired_keys();
		List<String> keys = new ArrayList<String>();
		for(String reqPubKey: pubReq) {
			keys.add(keyPairMap.get(reqPubKey));
		}
		Object responseData = null;
		try {
			String privKeysJson = mapper.writeValueAsString(keys);
			String trxStr = mapper.writeValueAsString(trx);
			String resultJson = EosJni.signTransation(trxStr, privKeysJson, chainId);
			responseData = mapper.readValue(resultJson, Transaction.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return (Transaction) responseData;
	}
}
