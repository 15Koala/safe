package com.safe.sdk.comm;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class SHA256 {

	public static byte fromHex( char c ) {
		if( c >= '0' && c <= '9' )
		  return (byte)(c - '0');
		if( c >= 'a' && c <= 'f' )
			return (byte)(c - 'a' + 10);
		if( c >= 'A' && c <= 'F' )
			return (byte)(c - 'A' + 10);
		return 0;
	}

	public static int getUnsignedByte(byte data){ //将data字节型数据转换为0~255 (0xFF 即BYTE)。 
		return data&0x0FF ; 
	} 

	public static byte [] fromHex( final String hex_str ) {
		byte [] out_data = new byte[hex_str.length()/2];
		int j = 0;
        for(int i = 0; i < hex_str.length(); ) {
			out_data[j] = (byte)(fromHex( hex_str.charAt(i) ) << 4);  
			++i;
			if( i < hex_str.length() )  {
				out_data[j] |= fromHex( hex_str.charAt(i) );
				++i;
			}
			++j;
        }
        return out_data;
    }
	//ref_block_prefix
	public static Long getUnsignedInt(byte[] b, int index) {
		int length = 4;
		int start = length * index;
		Long r = 0L;
		for(int i = 0; i < length; i++) {
			r += (b[i + start] & 0x0FF) * (long)Math.pow(2, 8*i);
		}
	    return r;
	}
	
	public static Long getUnsignedLong(byte[] b, int index) {
		int length = 8;
		int start = length * index;
		long r = 0;
		for(int i = 0; i < length; i++) {
			r += (b[i + start] & 0x0FF) * (long)Math.pow(2, 8*i);
		}
	    return r;
	}
	
	//head_block_num
	public static Long endianReverseU32( Long x ) {
	   return (((x >> 0x18) & 0xFF)        )
	        | (((x >> 0x10) & 0xFF) << 0x08)
	        | (((x >> 0x08) & 0xFF) << 0x10)
	        | (((x        ) & 0xFF) << 0x18)
	        ;
	}
	//ref_block_num
	public static Long endianReverseU32Low4( Long x ) {
		   return ((((x >> 0x18) & 0xFF)        )
		        | (((x >> 0x10) & 0xFF) << 0x08)
		        | (((x >> 0x08) & 0xFF) << 0x10)
		        | (((x        ) & 0xFF) << 0x18)
		        ) & 0x0FFFF;
		}
	
	 public static String getSHA256Str(String str){
	        MessageDigest messageDigest;
	        String encodeStr = "";
	        try {
	            messageDigest = MessageDigest.getInstance("SHA-256");
	            messageDigest.update(str.getBytes("UTF-8"));
	            encodeStr = byte2Hex(messageDigest.digest());
	        } catch (NoSuchAlgorithmException e) {
	            e.printStackTrace();
	        } catch (UnsupportedEncodingException e) {
	            e.printStackTrace();
	        }
	        return encodeStr;
	 }
	 
	 public static byte [] getSHA256(byte [] data){
	        MessageDigest messageDigest;
	        try {
	            messageDigest = MessageDigest.getInstance("SHA-256");
	            messageDigest.update(data);
	            return messageDigest.digest();
	        } catch (NoSuchAlgorithmException e) {
	            e.printStackTrace();
	        }
	        return null;
	 }

	    /**
	     * 将byte转为16进制
	     * @param bytes
	     * @return
	     */
	    private static String byte2Hex(byte[] bytes){
	        StringBuffer stringBuffer = new StringBuffer();
	        String temp = null;
	        for (int i=0;i<bytes.length;i++){
	            temp = Integer.toHexString(bytes[i] & 0xFF);
	            if (temp.length()==1){
	                //1得到一位的进行补0操作
	                stringBuffer.append("0");
	            }
	            stringBuffer.append(temp);
	        }
	        return stringBuffer.toString();
	    }
	    
		public static String bytePrint(byte [] a){
			StringBuilder s = new StringBuilder();
			for(byte b:a) {
				s.append(b).append(" ");
			}
			return s.toString();
		}
}
