package com.safe.sdk.bean;

import java.util.List;

/**
 * @author koala
 *
 */
public class BinArgs extends Bean{

	private String binargs;
	public String getBinargs() {
		return binargs;
	}
	public void setBinargs(String binargs) {
		this.binargs = binargs;
	}
	public List<String> getRequired_scope() {
		return required_scope;
	}
	public void setRequired_scope(List<String> required_scope) {
		this.required_scope = required_scope;
	}
	public List<String> getRequired_auth() {
		return required_auth;
	}
	public void setRequired_auth(List<String> required_auth) {
		this.required_auth = required_auth;
	}
	private List<String> required_scope;
	private List<String> required_auth;
	
}
