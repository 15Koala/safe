package com.safe.sdk.client;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.safe.sdk.bean.*;
import com.safe.sdk.comm.Httpj;
import com.safe.sdk.constant.EosPath;
/**
 * 与链交互的客户端
 * @author koala
 *
 */
public class ChainClient {

	private Httpj client;
	
	public Httpj getHttpClient() {
		return client;
	}
	public ChainClient(Httpj _chain_client) {
		this.client = _chain_client;
	}
	
	public ChainClient() {
		this.client = new Httpj();
	}
	
	public ChainClient(String server, Integer port) {
		this.client = new Httpj(server, port);
	}
	/**
	 * 获取当前区块信息
	 */
	public ChainInfo getInfo() {
		ChainInfo bi = (ChainInfo) client.call(EosPath.get_info_func, ChainInfo.class);
		return bi;
	}
	
	public BinArgs abiJsonToBin(final String _code, final String _action, final Object _args) {
		Map<String, Object> jo = new HashMap<String, Object>();
		jo.put("code", _code);
		jo.put("action", _action);
		jo.put("args", _args);
		BinArgs r = (BinArgs) client.call(EosPath.json_to_bin_func, jo, BinArgs.class); 
		return r;
	}
	
	public RequiredKeys getRequiredKeys(Transaction transaction, List<String> available_keys) {
		Map<String, Object> jo = new HashMap<String, Object>();
		jo.put("transaction", transaction);
		jo.put("available_keys", available_keys);
		return (RequiredKeys) client.call(EosPath.get_required_keys, jo, RequiredKeys.class); 
	}
	
	public String pushTransaction(PackagedTransaction packedTrx) {
		return (String) client.call(EosPath.push_txn_func, packedTrx, String.class); 
	}
	
	public String pushTransactions(List<Transaction> signedTransactions) {
		return (String) client.call(EosPath.push_txns_func, signedTransactions, String.class); 
	}
	
	public String getBlock(Long block_num_or_id) {
		Map<String, Long> jo = new HashMap<String, Long>();
		jo.put("block_num_or_id", block_num_or_id);
		return (String) client.call(EosPath.get_block_func, jo, String.class); 
	}
	
	public String getAccount(Long account_name) {
		Map<String, Long> jo = new HashMap<String, Long>();
		jo.put("account_name", account_name);
		return (String) client.call(EosPath.get_block_func, jo, String.class); 
	}
	
	public String getCode(Long account_name) {
		Map<String, Long> jo = new HashMap<String, Long>();
		jo.put("account_name", account_name);
		return (String) client.call(EosPath.get_code_func, jo, String.class); 
	}
	
	public String getTable(Boolean json, String scope, String code, String table, String tableKey, String lowerBound, String upperBound, Integer limit) {
		Map<String, String> jo = new HashMap<String, String>();
		jo.put("json", String.valueOf(json));
		jo.put("scope", scope);
		jo.put("code", code);
		jo.put("table", table);
		jo.put("table_key", tableKey);
		jo.put("lower_bound", lowerBound);
		jo.put("upper_bound", tableKey);
		jo.put("limit", String.valueOf(limit));
		return (String) client.call(EosPath.get_table_func, jo, String.class); 
	}
	
	public String getTransaction(String trxId) {
		Map<String, String> jo = new HashMap<String, String>();
		jo.put("transaction_id", trxId);
		return (String) client.call(EosPath.get_transaction_func, jo, String.class); 
	}
	
	/**
	 * 
	 * @param account
	 * @param skip_seq 起始序号
	 * @param num_seq 读取批量
	 * @return
	 */
	public String getTransactions(String account, Long skip_seq, Long num_seq) {
		Map<String, String> jo = new HashMap<String, String>();
		jo.put("account_name", account);
		jo.put("num_seq", String.valueOf(num_seq));
		jo.put("skip_seq", String.valueOf(skip_seq));
		return (String) client.call(EosPath.get_transactions_func, jo, String.class); 
	}
	
	public String getTransactions(String account) {
		Map<String, String> jo = new HashMap<String, String>();
		jo.put("account_name", account);
		return (String) client.call(EosPath.get_transactions_func, jo, String.class); 
	}
	
	//Retrieve accounts associated with a public key
	public String getKeyAccounts(String public_key) {
		Map<String, String> jo = new HashMap<String, String>();
		jo.put("public_key", public_key);
		return (String) client.call(EosPath.get_key_accounts_func, jo, String.class); 
	}
	
	//Retrieve accounts which are servants of a given account
	public String getControlledAccounts(String account) {
		Map<String, String> jo = new HashMap<String, String>();
		jo.put("account_name", account);
		return (String) client.call(EosPath.get_controlled_accounts_func, jo, String.class); 
	}
}
