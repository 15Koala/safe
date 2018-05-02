package com.safe.server;

import com.admaster.comm.easynetty.config.*;
import com.admaster.comm.easynetty.core.EasyNettyConfig;
import com.safe.server.controller.*;

public class SAFEProxyServer extends EasyNettyConfig {

	private static boolean isServer = false;
	private static String confPath = "config.properties";
	private static String log4jPath = "log4j.properties";

	/**
	 * 路由表定义
	 */
	@Override
	public void configRoute(Routes me) {
		me.add("/ping", PingController.class);
	}

	/**
	 * 初始化配置文件
	 */
	@Override
	public void configProp(Config me) {
		me.loadFromConfFile(confPath, isServer);
		me.initLog4j(log4jPath, isServer);
	}
	
	/**
	 * 配置第三方插件
	 */
	@Override
	public void configPlugin(Config conf) {
		// 监控
		//Metric.init(conf.get("monitor.appid"));
		//MySqlPlugin.start( "admin",  conf.get("jdbc.url"), conf.get("jdbc.user"), conf.get("jdbc.password"), conf.get("db.initialSize"), conf.get("db.minIdle"), conf.get("db.maxActive"));
		//MySqlPlugin.start( "discovery",  conf.get("jdbc.disc.url"), conf.get("jdbc.user"), conf.get("jdbc.password"), conf.get("db.initialSize"), conf.get("db.minIdle"), conf.get("db.maxActive"));
		//MySqlPlugin.start( "ids_app",  conf.get("jdbc.ids_app.url"), conf.get("jdbc.user"), conf.get("jdbc.password"), conf.get("db.initialSize"), conf.get("db.minIdle"), conf.get("db.maxActive"));
		
	}
	
	/**
	 * 程序入口
	 * @param args
	 */
	public static void main(String [] args) {
		if(args.length > 0) {
			confPath = args[0];
			log4jPath = args[1];
			isServer = true;
		}
		new SAFEProxyServer().startup();
	}
}
