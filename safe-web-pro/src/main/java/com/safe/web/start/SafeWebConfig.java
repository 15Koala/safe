package com.safe.web.start;

import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.core.JFinal;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.c3p0.C3p0Plugin;
import com.safe.web.blockchain.BlockChainClient;
import com.safe.web.controller.*;


public class SafeWebConfig extends JFinalConfig {
	
	private static boolean local = false;

	public void configConstant(Constants me) {
		String conf_file_name;
		if(local) {
			conf_file_name = "safe.local.properties";
		} else {
			conf_file_name = "safe.properties";
		}
		loadPropertyFile(conf_file_name);
		
		me.setDevMode(getPropertyToBoolean("devMode", Boolean.parseBoolean(getProperty("devMode"))));
	}
	
	public void configRoute(Routes me) {
		
		me.add("/user", UserController.class);
		me.add("/info", InfoController.class);
		
	}
	
	public void configPlugin(Plugins me) {
		
		// 配置C3p0数据库连接池插件
		C3p0Plugin c3p0Plugin = new C3p0Plugin(
				getProperty("jdbcUrl"), 
				getProperty("user"), 
				getProperty("password").trim());
		me.add(c3p0Plugin);
		
		// 配置ActiveRecord插件
		ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p0Plugin);
		me.add(arp);
		
		//配置区块链接口
		BlockChainClient.init(
				getProperty("block.account"), 
				getProperty("block.private.key"), 
				getProperty("block.endpoint.ip"), 
				Integer.parseInt(getProperty("block.endpoint.port")));
	}
	
	public void configInterceptor(Interceptors me) {
		
	}
	
	public void configHandler(Handlers me) {
		
	}
	
	public static void main(String[] args) {
		local = true;
		JFinal.start("src/main/webapp", 8080, "/", 5);
	}
}
