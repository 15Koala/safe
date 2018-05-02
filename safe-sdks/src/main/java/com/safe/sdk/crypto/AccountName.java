package com.safe.sdk.crypto;

import java.util.Random;

import com.safe.sdk.comm.TimeUtil;

/**
 * base32 account name
 * @author koala
 *
 */
public class AccountName {

	
	private static final char [] ALPHABET1 = "abcdefghijkmnopqrstuvwxyz.12345A".toCharArray();
	private static final char [] ALPHABET2 = "abcdefghijkmnop.A".toCharArray();

	public static String getRandomAccountName() {
		StringBuilder sb = new StringBuilder();
		Random random = new Random(TimeUtil.getCurrentTs()/1000);
		for(int i=0;i<12;i++) {
			final char A  = ALPHABET1[random.nextInt(ALPHABET1.length)];
			if(A == 'A') continue;
			sb.append(A);
		}
		final char end  = ALPHABET2[random.nextInt(ALPHABET2.length)];
		if (end != 'A') {
			sb.append(end);
		}
		return sb.toString();
	}
	
}
