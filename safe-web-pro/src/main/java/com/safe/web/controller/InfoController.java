package com.safe.web.controller;

import com.jfinal.core.Controller;
import com.safe.sdk.bean.ChainInfo;
import com.safe.web.blockchain.BlockChainClient;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * 获取最新区块信息 http://116.196.90.220/safe-web-pro/info/getBlockInfoLast?lastId=xxxx
 * 获取最新交易信息 http://116.196.90.220/safe-web-pro/info/getTransactionsLast?lastTrxId=xxxx
 * 获取全局信息 http://116.196.90.220/safe-web-pro/info/getInfo
 * 分页查询区块信息 http://116.196.90.220/safe-web-pro/info/getBlockInfos?index=0&size=20
 * 分页查询交易信息 http://116.196.90.220/safe-web-pro/info/getTransactions?index=0&size=20
 * @author koala
 *
 */
public class InfoController extends Controller {

	public void getInfo() {
		ChainInfo r = BlockChainClient.getChainClient().getInfo();
		renderJson(r);
	}
	
	/**
	 * 分页查询
	 */
	public void getBlockInfos() {
		Long index = getPara("index") == null ? 0 : Long.parseLong(getPara("index"));
		Long size = getPara("size") == null ? 10 : Long.parseLong(getPara("size"));
		JSONArray ja = new JSONArray();
		Long Last_irreversible_block_num = BlockChainClient.getChainClient().getInfo().getLast_irreversible_block_num();
		for(Long i = Last_irreversible_block_num - index; i > Last_irreversible_block_num - index - size; i--) {
			String bi = BlockChainClient.getChainClient().getBlock(i);
			ja.add(bi);
		}
		renderText(ja.toString());
	}
	
	/**
	 * 查询详情
	 */
	public void getBlockInfo() {
		Long block_num_or_id = getPara("blockId") == null ? BlockChainClient.getChainClient().getInfo().getLast_irreversible_block_num() : Long.parseLong(getPara("blockId"));
		renderJson(BlockChainClient.getChainClient().getBlock(block_num_or_id));
	}
	
	/**
	 * 分页查询
	 */
	public void getTransactions() {
		Long index = getPara("index") == null ? 0 : Long.parseLong(getPara("index"));
		Long size = getPara("size") == null ? 10 : Long.parseLong(getPara("size"));
		renderJson(JSONObject.fromObject(BlockChainClient.getChainClient().getTransactions("afc", index, size)).getJSONArray("transactions"));
	}
	
	/**
	 * 查询详情
	 */
	public void getTransaction() {
		String trxId = getPara("trxId");
		renderJson(BlockChainClient.getChainClient().getTransaction(trxId));
	}
	
	//获取最新区块信息，最多10个
	public void getBlockInfoLast() {
		Long Last_irreversible_block_num = BlockChainClient.getChainClient().getInfo().getLast_irreversible_block_num();
		Long lastId = getPara("lastId") == null ? Last_irreversible_block_num - 10 : Long.parseLong(getPara("lastId"));
		JSONArray ja = new JSONArray();
		Long start = Last_irreversible_block_num - lastId > 10 ? Last_irreversible_block_num - 9 : lastId + 1;
		for(Long i = start; i <= Last_irreversible_block_num; i++) {
			ja.add(BlockChainClient.getChainClient().getBlock(i));
		}
		renderText(ja.toString());
	}
	
	//获取最新交易信息，最多10个
	public void getTransactionsLast() {
		String lastTrxId = getPara("lastTrxId");
		JSONObject result = JSONObject.fromObject(BlockChainClient.getChainClient().getTransactions("afc", 0L, 10L));
		JSONArray ja = result.getJSONArray("transactions");
		JSONArray r = new JSONArray();
		for(int i = 0; i < ja.size(); i ++ ) {
			if(ja.getJSONObject(i).getString("transaction_id").equals(lastTrxId)) break;
			r.add(ja.getJSONObject(i));
		}
		renderJson(r);
	}
}
