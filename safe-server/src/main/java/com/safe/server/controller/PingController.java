package com.safe.server.controller;

import java.util.Map;

import com.admaster.comm.easynetty.core.Controller;

public class PingController extends Controller {

	@Override
	public void process(Map<String, String> paras, String body) {
		renderText("welcome to audienx-inner-proxy!");
	}

}
