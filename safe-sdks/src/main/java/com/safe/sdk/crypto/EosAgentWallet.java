package com.safe.sdk.crypto;

import java.util.ArrayList;
import java.util.List;
import com.safe.sdk.bean.*;
import com.safe.sdk.comm.Httpj;
import com.safe.sdk.constant.EosPath;

/**
 * Eos钱包客户端
 * 通过HTTP请求调用KEOSD程序
 * @author koala
 *
 */
public class EosAgentWallet implements Wallet {

	private Httpj client = new Httpj();
	private String name;
	private String password;
	
	public EosAgentWallet(Httpj _wallet_client, String name, String password) {
		this.client = _wallet_client;
		this.name = name;
		this.password = password;
	}
	
	public EosAgentWallet(String name, String password) {
		this.name = name;
		this.password = password;
	}
	
	/**
	 * 如果密码正确确保可以打开钱包
	 * @param name
	 * @param password
	 * @return
	 */
	public String openAndUnlock() {
		ArrayList<String> post = new ArrayList<String>();
		post.add(name);
		post.add(password);
		String r = null;
		try {
			r = (String) client.call(EosPath.wallet_open, "\"" + name + "\"", String.class);
			r = (String) client.call(EosPath.wallet_unlock, post, String.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return r;
	}
	
	public String lock() {
		return (String) client.call(EosPath.wallet_lock, "\"" + name + "\"", String.class);
	}
	
	public String lockAll() {
		return (String) client.call(EosPath.wallet_lock_all, String.class);
	}
	
	@SuppressWarnings("unchecked")
	public List<String> getPublicKeys() {
		return (List<String>) client.call(EosPath.wallet_public_keys, List.class);
	}
	
	public Transaction signTransaction(Transaction t, RequiredKeys requiredKeys, String paddle) {
		ArrayList<Object> signTrxJson = new ArrayList<Object>();
		signTrxJson.add(t);
		signTrxJson.add(requiredKeys.getRequired_keys());
		signTrxJson.add(paddle);
		return (Transaction) client.call(EosPath.wallet_sign_trx, signTrxJson ,Transaction.class);
	}
	
	@SuppressWarnings("unchecked")
	public List<String> walletList() {
		return (List<String>) client.call(EosPath.wallet_list, List.class);
	}
	
	public String walletCreate( String name ) {
		return ((String) client.call(EosPath.wallet_create, "\"" + name + "\"", String.class)).replaceAll("\"", "");
	}
	
	public String importKey(String privateKey) {
		ArrayList<String> post = new ArrayList<String>();
		post.add(name);
		post.add(privateKey);
		return ((String) client.call(EosPath.wallet_create, post, String.class));
	}

	public List<KeyPair> getKeyPairs() {
		List<KeyPair> result = new ArrayList<KeyPair>();
		@SuppressWarnings("unchecked")
		List<List<String>> a =  ((List<List<String>>) client.call(EosPath.wallet_list_keys, List.class));
		for(List<String> aa: a) {
			result.add(new KeyPair(aa.get(0), aa.get(1)));
		}
		return result;
	}
}

