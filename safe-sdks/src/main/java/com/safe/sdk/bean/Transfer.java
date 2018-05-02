package com.safe.sdk.bean;

/**
 * 转账消息格式
 * @author koala
 *
 */
public class Transfer extends Bean{

	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}
	private String from;
	private String to;
	private String quantity;
	private String memo;
	
}
