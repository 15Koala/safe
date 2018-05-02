package com.safe.sdk.bean;

public class ChainInfo extends Bean {

	private String server_version;
	public String getServer_version() {
		return server_version;
	}
	public void setServer_version(String server_version) {
		this.server_version = server_version;
	}
	public Long getHead_block_num() {
		return head_block_num;
	}
	public void setHead_block_num(Long head_block_num) {
		this.head_block_num = head_block_num;
	}
	public Long getLast_irreversible_block_num() {
		return last_irreversible_block_num;
	}
	public void setLast_irreversible_block_num(Long last_irreversible_block_num) {
		this.last_irreversible_block_num = last_irreversible_block_num;
	}
	public String getHead_block_id() {
		return head_block_id;
	}
	public void setHead_block_id(String head_block_id) {
		this.head_block_id = head_block_id;
	}
	public String getHead_block_time() {
		return head_block_time;
	}
	public void setHead_block_time(String head_block_time) {
		this.head_block_time = head_block_time;
	}
	public String getHead_block_producer() {
		return head_block_producer;
	}
	public void setHead_block_producer(String head_block_producer) {
		this.head_block_producer = head_block_producer;
	}
	public String getRecent_slots() {
		return recent_slots;
	}
	public void setRecent_slots(String recent_slots) {
		this.recent_slots = recent_slots;
	}
	public String getParticipation_rate() {
		return participation_rate;
	}
	public void setParticipation_rate(String participation_rate) {
		this.participation_rate = participation_rate;
	}
	private Long head_block_num;
	private Long last_irreversible_block_num;
	private String head_block_id;
	private String head_block_time;
	private String head_block_producer;
	private String recent_slots;
	private String participation_rate;
	
}
