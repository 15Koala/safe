package com.safe.sdk.client;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.safe.sdk.bean.Action;
import com.safe.sdk.bean.Authorization;
import com.safe.sdk.bean.BinArgs;
import com.safe.sdk.bean.ChainInfo;
import com.safe.sdk.bean.RequiredKeys;
import com.safe.sdk.bean.Transaction;
import com.safe.sdk.bean.Transfer;
import com.safe.sdk.comm.SHA256;
import com.safe.sdk.comm.TimeUtil;
import com.safe.sdk.constant.EosPath;
import com.safe.sdk.crypto.Wallet;
import com.safe.sdk.jni.EosJni;

/**
 * 基础业务功能接口，针对某个单独的account的client，主要为应用提供统一的工具包
 * @author koala
 *
 */
public class AcountClient {
	
	protected String accountName;
	protected Wallet wallet;
	protected ChainClient chainClient;
	
	public AcountClient(String accountName, Wallet wallet) {
		this.accountName = accountName;
		this.wallet = wallet;
		this.chainClient = new ChainClient();
	}
	
	public AcountClient(String accountName, Wallet wallet, ChainClient chainClient) {
		this.accountName = accountName;
		this.chainClient = chainClient;
		this.wallet = wallet;
	}
	
	/**
	 * 获取ChainClient的服务地址
	 * @return
	 */
	public String getAgentEndPoint() {
		return "http://" + chainClient.getHttpClient().getServer() + ":" + chainClient.getHttpClient().getPort();
	}
	
	/**
	 * 转账
	 * @param to
	 * @param quantity
	 * @param memo
	 * @return
	 */
	public String transferAFC(String to,  Integer quantity, String memo) {
		DecimalFormat dec = new DecimalFormat("0.0000");
		String quantityStr = dec.format(quantity);
		String code = EosPath.CODE_AFC;
		String action = EosPath.ACTION_TRANSFER;
		String from = accountName;
		
		Transfer transfer = new Transfer();
		transfer.setFrom(from);
		transfer.setTo(to);
		transfer.setMemo(memo);
		transfer.setQuantity(quantityStr + " " + EosPath.CODE_TOKEN_AFC);
		
		ArrayList<Authorization> ahthes = new ArrayList<Authorization>();
		ahthes.add(new Authorization(from,"active"));	
		
		return pushMessage(code, action, transfer, ahthes);
	}
	
	public String issueAFC(String to, Integer quantity, String memo) {
		DecimalFormat dec = new DecimalFormat("0.0000");
		String quantityStr = dec.format(quantity);
		String code = EosPath.CODE_AFC;
		String action = EosPath.ACTION_ISSUE;
		String from = accountName;
		
		HashMap<String, String> issue = new HashMap<String, String>();
		issue.put("to", to);
		issue.put("quantity", quantityStr + " " + EosPath.CODE_TOKEN_AFC);
		issue.put("memo", memo);
		
		ArrayList<Authorization> ahthes = new ArrayList<Authorization>();
		ahthes.add(new Authorization(from,"active"));
		
		return pushMessage(code, action, issue, ahthes);
	}
	
	/**
	 * 触发只能合约
	 * @param code
	 * @param action
	 * @param _msg
	 * @param ahthes
	 * @return
	 */
	public String pushMessage(String code, String action, Object _msg, ArrayList<Authorization> ahthes) {
		BinArgs binArgs = chainClient.abiJsonToBin(code, action, _msg);
		
		List<String> available_keys = wallet.getPublicKeys();
		ChainInfo info = chainClient.getInfo();
		
		Transaction transaction = new Transaction();
		byte [] b = SHA256.fromHex(info.getHead_block_id());
		transaction.setRef_block_num(SHA256.endianReverseU32Low4(SHA256.getUnsignedInt(b,0)));
		transaction.setRef_block_prefix(SHA256.getUnsignedInt(b,2));
		transaction.setExpiration(TimeUtil.getDateStr(TimeUtil.getTsByStr(info.getHead_block_time(), "yyyy-MM-dd'T'HH:mm:ss") + 30000, "yyyy-MM-dd'T'HH:mm:ss"));
		transaction.setContext_free_actions(new ArrayList<String>());
		transaction.setSignatures(new ArrayList<String>());
		transaction.setContext_free_data(new ArrayList<String>());
		
		Action act = new Action(code, action, ahthes , binArgs.getBinargs());
		ArrayList<Action> actions = new ArrayList<Action>();
		actions.add(act);
		transaction.setActions(actions);
		
		RequiredKeys requiredKeys = chainClient.getRequiredKeys(transaction, available_keys);
		//sign
		Transaction signedTransaction = wallet.signTransaction(transaction, requiredKeys, "0000000000000000000000000000000000000000000000000000000000000000");
		//push trx
		String r = chainClient.pushTransaction(signedTransaction.packedTransaction(false));
		return r;
	}
	
	public String getAccountInfo(String accountName) {
		return chainClient.getTable(true, accountName, EosPath.CODE_AFC, "accounts", "", "", "", 10);
	}
	
	public String createAccount(String account, String ownerKey, String activeKey) {
		ChainInfo info = chainClient.getInfo();
		List<String> available_keys = wallet.getPublicKeys();
		Transaction transaction = new Transaction();
		byte [] b = SHA256.fromHex(info.getHead_block_id());
		transaction.setRef_block_num(SHA256.endianReverseU32Low4(SHA256.getUnsignedInt(b,0)));
		transaction.setRef_block_prefix(SHA256.getUnsignedInt(b,2));
		transaction.setExpiration(TimeUtil.getDateStr(TimeUtil.getTsByStr(info.getHead_block_time(), "yyyy-MM-dd'T'HH:mm:ss") + 30000, "yyyy-MM-dd'T'HH:mm:ss"));
		transaction.setContext_free_actions(new ArrayList<String>());
		transaction.setSignatures(new ArrayList<String>());
		transaction.setContext_free_data(new ArrayList<String>());
		ObjectMapper mapper = new ObjectMapper();
		try {
			Action act = mapper.readValue(EosJni.createNewAccount(this.accountName, account, ownerKey, activeKey), Action.class);
			ArrayList<Action> actions = new ArrayList<Action>();
			actions.add(act);
			transaction.setActions(actions);
		} catch (Exception e) {
			e.printStackTrace();
		}
		RequiredKeys requiredKeys = chainClient.getRequiredKeys(transaction, available_keys);
		//sign
		Transaction signedTransaction = wallet.signTransaction(transaction, requiredKeys, "0000000000000000000000000000000000000000000000000000000000000000");
		//push trx
		String r = chainClient.pushTransaction(signedTransaction.packedTransaction(false));
		return r;
	}
	
}
