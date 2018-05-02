package com.safe.sdk.bean;

import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.safe.sdk.jni.EosJni;

public class Transaction extends Bean {
	
	public Long getRef_block_num() {
		return ref_block_num;
	}
	public void setRef_block_num(Long ref_block_num) {
		this.ref_block_num = ref_block_num;
	}
	public Long getRef_block_prefix() {
		return ref_block_prefix;
	}
	public void setRef_block_prefix(Long ref_block_prefix) {
		this.ref_block_prefix = ref_block_prefix;
	}
	public String getExpiration() {
		return expiration;
	}
	public void setExpiration(String expiration) {
		this.expiration = expiration;
	}

	public List<String> getSignatures() {
		return signatures;
	}
	public void setSignatures(List<String> signatures) {
		this.signatures = signatures;
	}
	public Long getRegion() {
		return region;
	}
	public void setRegion(Long region) {
		this.region = region;
	}
	
	public Long getMax_net_usage_words() {
		return max_net_usage_words;
	}
	public void setMax_net_usage_words(Long max_net_usage_words) {
		this.max_net_usage_words = max_net_usage_words;
	}
	public Long getMax_kcpu_usage() {
		return max_kcpu_usage;
	}
	public void setMax_kcpu_usage(Long max_kcpu_usage) {
		this.max_kcpu_usage = max_kcpu_usage;
	}
	public Long getDelay_sec() {
		return delay_sec;
	}
	public void setDelay_sec(Long delay_sec) {
		this.delay_sec = delay_sec;
	}
	public List<String> getContext_free_actions() {
		return context_free_actions;
	}
	public void setContext_free_actions(List<String> context_free_actions) {
		this.context_free_actions = context_free_actions;
	}
	public List<Action> getActions() {
		return actions;
	}
	public void setActions(List<Action> actions) {
		this.actions = actions;
	}
	public List<String> getContext_free_data() {
		return context_free_data;
	}
	public void setContext_free_data(List<String> context_free_data) {
		this.context_free_data = context_free_data;
	}
	private String expiration;
	private Long region = 0L;
	private Long ref_block_num;
	private Long ref_block_prefix;
	private Long max_net_usage_words = 0L;
	private Long max_kcpu_usage = 0L;
	private Long delay_sec = 0L;
	private List<String> context_free_actions;
	private List<String> context_free_data;
	private List<Action> actions;
	private List<String> signatures;
	
	/**
	 * 对交易打包
	 * @param trxStr
	 * @param isCompress
	 * @return
	 */
	public PackagedTransaction packedTransaction(boolean isCompress) {
		ObjectMapper mapper = new ObjectMapper();
		String trxStr;
		PackagedTransaction result = null;
		try {
			trxStr = mapper.writeValueAsString(this);
			String resultStr = EosJni.packedTransaction(trxStr, isCompress ? 1 : 0);
			result = mapper.readValue(resultStr, PackagedTransaction.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
}
