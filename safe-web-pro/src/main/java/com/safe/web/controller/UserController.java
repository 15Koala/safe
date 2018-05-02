package com.safe.web.controller;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.safe.sdk.comm.SHA256;
import com.safe.sdk.crypto.AESUtil;
import com.safe.sdk.crypto.AccountName;
import com.safe.sdk.crypto.KeyPair;
import com.safe.sdk.crypto.SimpleWallet;
import com.safe.sdk.crypto.Wallet;
import com.safe.web.blockchain.BlockChainClient;

import net.sf.json.JSONObject;

public class UserController extends Controller {

	//创建账户
	public void create () {
		String password = getPara("password");
		String userName = getPara("userName");
		KeyPair ownerKp = KeyPair.generate();
		KeyPair activeKp = KeyPair.generate();
		String account = null;
		while(true) {
			account = AccountName.getRandomAccountName();
			try {
				BlockChainClient.getAcountClient().createAccount(account, ownerKp.getPublicKey(), activeKp.getPublicKey());
				break;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		Record record = new Record();
		record.set("username", userName);
		record.set("account", account);
		JSONObject keyPairs = new JSONObject();
		keyPairs.put("owner", ownerKp);
		keyPairs.put("active", activeKp);
		record.set("keypairs", AESUtil.encrypt(keyPairs.toString(), password));
		record.set("pwdhash", SHA256.getSHA256Str(password));
		if(Db.save("users", record)) {
			//写Session
			setSessionAttr("userName",userName);
			setSessionAttr("account",account);
			Wallet wallet = new SimpleWallet();
			wallet.importKey(ownerKp.getPrivateKey());
			wallet.importKey(activeKp.getPrivateKey());
			setSessionAttr("wallet",wallet);

			JSONObject jo = new JSONObject();
			jo.put("userName", userName);
			jo.put("account", account);
			jo.put("owner", ownerKp);
			jo.put("active", ownerKp);
			jo.put("status", "success");
			renderJson(jo);
		} else {
			JSONObject jo = new JSONObject();
			jo.put("status", "db failed");
			renderJson(jo);
		}
	}
	
	public void login () {
		String password = getPara("password");
		String userName = getPara("userName");
		Record record = Db.findFirst("select * from users where username='" + userName + "' and pwdhash='" + SHA256.getSHA256Str(password) + "'");
		if(record != null) {
			//写Session
			setSessionAttr("userName",userName);
			setSessionAttr("account",record.get("account"));
			JSONObject jsonKeyPair =JSONObject.fromObject(AESUtil.decrypt(record.getStr("keypairs"), password));
			Wallet wallet = new SimpleWallet();
			wallet.importKey(jsonKeyPair.getJSONObject("owner").getString("privateKey"));
			wallet.importKey(jsonKeyPair.getJSONObject("active").getString("privateKey"));
			setSessionAttr("wallet",wallet);
			
			JSONObject jo = new JSONObject();
			jo.put("status", "success");
			renderJson(jo);
		} else {
			JSONObject jo = new JSONObject();
			jo.put("status", "login failed");
			renderJson(jo);
		}
	}
	
	public void logout () {
		removeSessionAttr("userName");
		removeSessionAttr("account");
		removeSessionAttr("wallet");
		JSONObject jo = new JSONObject();
		jo.put("status", "success");
		renderJson(jo);
	}
	
}
