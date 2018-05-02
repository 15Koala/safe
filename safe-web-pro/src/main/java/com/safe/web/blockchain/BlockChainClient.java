package com.safe.web.blockchain;

import com.safe.sdk.client.AcountClient;
import com.safe.sdk.client.ChainClient;
import com.safe.sdk.crypto.SimpleWallet;
import com.safe.sdk.crypto.Wallet;

/**
 * 调用区块链的接口
 * @author koala
 *
 */
public class BlockChainClient {

	private static Wallet wallet = new SimpleWallet();
	private static ChainClient chainClient;
	private static AcountClient ac;
	
	public static void init(String account, String privateKey, String endPointServer, Integer endPointPort) {
		wallet.importKey(privateKey);
		chainClient = new ChainClient( endPointServer, endPointPort );
		ac = new AcountClient(account, wallet, chainClient);
	}
	
	public static Wallet getWallet() {
		return wallet;
	}
	
	public static ChainClient getChainClient() {
		return chainClient;
	}
	
	public static AcountClient getAcountClient() {
		return ac;
	}
	
}
