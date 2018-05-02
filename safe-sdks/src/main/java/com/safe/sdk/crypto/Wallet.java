package com.safe.sdk.crypto;

import java.util.List;

import com.safe.sdk.bean.RequiredKeys;
import com.safe.sdk.bean.Transaction;

/**
 * 具备简单的钱包功能
 * @author koala
 *
 */
public interface Wallet {
		
	/**
	 * 导入私钥
	 * @param privateKey
	 */
	public String importKey(String privateKey);
	
	/**
	 * 获取公钥列表
	 * @return
	 */
	public List<String> getPublicKeys();
	
	/**
	 * 获取keypair列表
	 * @return
	 */
	public List<KeyPair> getKeyPairs();
		

	public Transaction signTransaction(Transaction trx, RequiredKeys requiredKeys, String chainId);
}
