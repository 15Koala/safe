package com.safe.sdk.comm;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.safe.sdk.constant.EosPath;

/**
 * 
 * @author koala
 */
public class Httpj {
	
	public String getServer() {
		return server;
	}

	public void setServer(String server) {
		this.server = server;
	}

	public Integer getPort() {
		return port;
	}

	public void setPort(Integer port) {
		this.port = port;
	}

	private String server;
	private Integer port;
	
	public Httpj() {
		this.server = EosPath.server;
		this.port = EosPath.port;
	}
	
	public Httpj(String server, Integer port) {
		this.server = server;
		this.port = port;
	}

	public Object call(final String path, Class<?> clazz) {
		return call(server, port, path, null, clazz);
	}
	
	public Object call(final String path, final Object postdata, Class<?> clazz) {
		return call(server, port, path, postdata, clazz);
	}
	
	public Object call(final String server, final int port, final String path, Class<?> clazz) {
		return call(server, port, path, null, clazz);
	}
	
	public Object call(final String server, final int port, final String path, final Object postdata, Class<?> clazz) {
		ObjectMapper mapper = new ObjectMapper();
		Object responseData = null;
		StringBuilder url = new StringBuilder()
				.append("http://")
				.append(server)
				.append(":")
				.append(port)
				.append(path);
		try {
			if(postdata == null) {
				String result = post(url.toString(), "");
				responseData = clazz == String.class ? result : mapper.readValue(result, clazz);
			} else {
				String json = mapper.writeValueAsString(postdata);
				String result = post(url.toString(), json);
				responseData = clazz == String.class ? result : mapper.readValue(result, clazz);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return responseData;
	}
	
	public static String post(String url) {
		return post(url, "");
	}
	
	public static String post(String url, String json) {	
		//System.out.println(url);
		//System.out.println(json);

		String result;
        try {
            URL u = new URL(url);// 创建连接  
            HttpURLConnection connection = (HttpURLConnection) u.openConnection();  
            connection.setDoInput(true);  
            connection.setDoOutput(true);  
            connection.setUseCaches(false);  
            connection.setInstanceFollowRedirects(true);  
            connection.setRequestMethod("POST"); // 设置请求方式  
            connection.setRequestProperty("Accept", "application/json"); // 设置接收数据的格式  
            connection.setRequestProperty("Content-Type", "application/json"); // 设置发送数据的格式  
            connection.setRequestProperty("CONTENT_LENGTH", String.valueOf(json.length()));
            connection.connect();  
            OutputStreamWriter out = new OutputStreamWriter(  
                    connection.getOutputStream(), "UTF-8"); // utf-8编码  
            out.append(json);
            out.flush();
            out.close();
            // 读取响应  
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String lines;
            StringBuffer sbf = new StringBuffer();
            while ((lines = reader.readLine()) != null) {
                    lines = new String(lines.getBytes(), "utf-8");
                    sbf.append(lines);
            }
            reader.close();
            connection.disconnect();
            result = sbf.toString();
        } catch (Exception e) {
        	result = e.toString();
        } 
		//System.out.println(result);
		//System.out.println("------");

        return result;
    }
}
