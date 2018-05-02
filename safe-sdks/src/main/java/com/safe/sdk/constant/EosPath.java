package com.safe.sdk.constant;

public class EosPath {

	public static String server = "116.196.90.220";
	public static int port = 80;

	private static String chain_func_base = "/v1/chain";
	public static String get_info_func = chain_func_base + "/get_info";
	public static String push_txn_func = chain_func_base + "/push_transaction";
	public static String push_txns_func = chain_func_base + "/push_transactions";
	public static String json_to_bin_func = chain_func_base + "/abi_json_to_bin";
	public static String get_block_func = chain_func_base + "/get_block";
	public static String get_account_func = chain_func_base + "/get_account";
	public static String get_table_func = chain_func_base + "/get_table_rows";
	public static String get_code_func = chain_func_base + "/get_code";
	public static String get_currency_balance_func = chain_func_base + "/get_currency_balance";
	public static String get_currency_stats_func = chain_func_base + "/get_currency_stats";
	public static String get_required_keys = chain_func_base + "/get_required_keys";
	
	private static String account_history_func_base = "/v1/account_history";
	public static String get_transaction_func = account_history_func_base + "/get_transaction";
	public static String get_transactions_func = account_history_func_base + "/get_transactions";
	public static String get_key_accounts_func = account_history_func_base + "/get_key_accounts";
	public static String get_controlled_accounts_func = account_history_func_base + "/get_controlled_accounts";
	
	private static String net_func_base = "/v1/net";
	public static String net_connect = net_func_base + "/connect";
	public static String net_disconnect = net_func_base + "/disconnect";
	public static String net_status = net_func_base + "/status";
	public static String net_connections = net_func_base + "/connections";
	
	private static String wallet_func_base = "/v1/wallet";
	public static String wallet_create = wallet_func_base + "/create";
	public static String wallet_open = wallet_func_base + "/open";
	public static String wallet_list = wallet_func_base + "/list_wallets";
	public static String wallet_list_keys = wallet_func_base + "/list_keys";
	public static String wallet_public_keys = wallet_func_base + "/get_public_keys";
	public static String wallet_lock = wallet_func_base + "/lock";
	public static String wallet_lock_all = wallet_func_base + "/lock_all";
	public static String wallet_unlock = wallet_func_base + "/unlock";
	public static String wallet_import_key = wallet_func_base + "/import_key";
	public static String wallet_sign_trx = wallet_func_base + "/sign_transaction";
	
	public static String ACTION_BUY = "buy";
	public static String ACTION_SELL = "sell";
	public static String ACTION_SHELVE = "shelve";
	public static String ACTION_ORDER = "order";
	public static String CODE_AFC = "afc";
	public static String CODE_TOKEN_AFC = "AFC";
	public static String CODE_DATAEXCHANGE = "dataexchange";
	public static String ACTION_TRANSFER = "transfer";
	public static String ACTION_ISSUE = "issue";

	
}
