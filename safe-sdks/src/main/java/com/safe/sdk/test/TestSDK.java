package com.safe.sdk.test;
import com.safe.sdk.client.AcountClient;
import com.safe.sdk.client.ChainClient;
import com.safe.sdk.crypto.AccountName;
import com.safe.sdk.crypto.SimpleWallet;
import com.safe.sdk.crypto.Wallet;

public class TestSDK {

	public static void main(String[] args) {
		
		//System.out.println(Httpj.post("http://116.196.90.220:80/v1/chain/abi_json_to_bin", "{\"args\":{\"from\":\"afc\",\"to\":\"eosio\",\"quantity\":\"20.0000 AFC\",\"memo\":\"test\"},\"code\":\"afc\",\"action\":\"transfer\"}"));
		
		
		
		System.out.println(AccountName.getRandomAccountName());
		
		
		
		//ChainClient chainClient = new ChainClient( "localhost", 80 );		
		ChainClient chainClient = new ChainClient( "116.196.90.220", 80 );		
		System.out.println(chainClient.getBlock(2787137L));
		
		Wallet wallet = new SimpleWallet();
		wallet.importKey("5JC6jNZyT5RMeea5ZhQzhXCtSTynXF3icRojv1WGKjiUcdQ5dQW");
		wallet.importKey("5JraHbBDoei5cJk4wo2RDFbS2MDTgSG4UvmgcRtJBFTc3xhBW3d");
		wallet.importKey("5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3");
		AcountClient ac = new AcountClient("afc", wallet, chainClient);
		ac.transferAFC("eosio", 20, "test");
		System.out.println(ac.getAccountInfo("afc"));
		System.out.println(ac.getAccountInfo("eosio"));
		System.out.println(ac.issueAFC("eosio", 100, "hello"));
		System.out.println(ac.createAccount(args[0], "EOS8X3gn9nSwdTXAH4puA3wAcWy5ijRso7dp5PB7hqka8E6XN1RJV", "EOS5YAdEe7Zux2DK3VKhZmhCpUydnBLZJPVXW1wV5Us36n8dobeGm"));
		System.out.println(chainClient.getTransactions("afc"));
		
		
	}

}
