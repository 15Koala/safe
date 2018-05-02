package com.safe.sdk.jni;

public class EosJni {

	public static native void hello();
	
	public static native String createKey();
	
	public static native String getPublicKey(String privKey);
	
	public static native String packedTransaction(String jtrx, int isCompress);
	
	public static native String signTransation(String jtrx, String jprivKeys, String jid);
	
	public static native String createNewAccount(String jcreator, String jaccount_name, String jowner_key, String jactive_key);

    static {
        System.loadLibrary("eosjni");
    }

    public static void main(String args[]) {
    	
        System.out.println(EosJni.createKey());
        System.out.println(EosJni.getPublicKey("5JTivh8hhEDXaxqmswZawtQX9nxPkAvNSZxEQF3Stw7PxT63yH3"));
        System.out.println(EosJni.packedTransaction("{\"expiration\":\"2018-04-13T11:56:47\",\"region\":0,\"ref_block_num\":13750,\"ref_block_prefix\":3124293044,\"max_net_usage_words\":0,\"max_kcpu_usage\":0,\"delay_sec\":0,\"context_free_actions\":[],\"context_free_data\":[],\"actions\":[{\"account\":\"afc\",\"name\":\"transfer\",\"authorization\":[{\"actor\":\"afc\",\"permission\":\"active\"}],\"data\":\"000000000000d0320000000000ea3055400d03000000000004414643000000000568656c6c6f\"}],\"signatures\":[\"EOSK8trpBp5XbELYFEZ7dwFF1N49dxordm3b9BpqVGhWWdXUSHtw6wNrkE8rnskwHvAi62eGRyd1sfmzqhhBAmNjMQKGUTJuC\"]}",0));
        System.out.println(EosJni.signTransation("{\"expiration\":\"2018-04-09T07:06:20\",\"region\":0,\"ref_block_num\":8624,\"ref_block_prefix\":2867500024,\"max_net_usage_words\":0,\"max_kcpu_usage\":0,\"delay_sec\":0,\"context_free_actions\":[],\"actions\":[{\"account\":\"eosio\",\"name\":\"newaccount\",\"authorization\":[{\"actor\":\"eosio\",\"permission\":\"active\"}],\"data\":\"0000000000ea30550000001e4d75af46010000000100022274158d69a6ecfe3214b9fd4c9867524ec05244348cf4b2dc49150b0458e278010000010000000100025103c49898683e73470f03b08ffae776d1e4a9f02500fe377c871dcbb8dbe34d0100000100000000010000000000ea305500000000a8ed32320100\"}],\"signatures\":[],\"context_free_data\":[]}","[\"5JraHbBDoei5cJk4wo2RDFbS2MDTgSG4UvmgcRtJBFTc3xhBW3d\"]","0000000000000000000000000000000000000000000000000000000000000000"));
        System.out.println(EosJni.createNewAccount("eosio", args[0], "EOS8X3gn9nSwdTXAH4puA3wAcWy5ijRso7dp5PB7hqka8E6XN1RJV", "EOS5YAdEe7Zux2DK3VKhZmhCpUydnBLZJPVXW1wV5Us36n8dobeGm"));
    }
}