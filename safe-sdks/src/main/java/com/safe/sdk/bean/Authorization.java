package com.safe.sdk.bean;

public class Authorization {
	private String actor;
	public String getActor() {
		return actor;
	}
	public void setActor(String actor) {
		this.actor = actor;
	}
	public String getPermission() {
		return permission;
	}
	public void setPermission(String permission) {
		this.permission = permission;
	}
	private String permission;
	
	public Authorization(String actor, String permission) {
		this.actor = actor;
		this.permission = permission;
	}
	
	public Authorization() {

	}
}
