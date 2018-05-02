package com.safe.sdk.comm;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
/**
 * 
 * @author qiuwenyi
 *
 */
public class TimeUtil {
	
	public static Long getDivTsMs(String day1, String day2, String patten) {
		Date d1 = null;
		Date d2 = null;
		try {
			d1 = new SimpleDateFormat(patten).parse(day1);
			d2 = new SimpleDateFormat(patten).parse(day2);
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return d1.getTime() - d2.getTime();
	}
	public static Long getDivDay(String day1, String day2, String patten) {
		Date d1 = null;
		Date d2 = null;
		try {
			d1 = new SimpleDateFormat(patten).parse(day1);
			d2 = new SimpleDateFormat(patten).parse(day2);
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return ( d1.getTime() - d2.getTime() ) / 86400000;
	}
	
	public static String getPulsDay(String date , int d, String patten) {
		Date d1 = null;
		try {
			d1 = new SimpleDateFormat(patten).parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		Long d2 = d1.getTime()  +  d * 86400000;
		return new SimpleDateFormat(patten).format(d2);
	}
	
		public static String getCurDatetime() {
			return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
		}
		
		public static String getCurDatetime(String format) {
			return new SimpleDateFormat(format).format(new Date());
		}
		
		public static long getCurrentTs() {
			return new Date().getTime();
		}
		
		public static String getDateStr(long ts) {
			return new SimpleDateFormat("yyyyMMdd").format(ts);
		}
		
		public static String getDateStr(long ts, String format) {
			return new SimpleDateFormat(format).format(ts);
		}
		
		public static String getBeforeDays(String timeRange) {
			Calendar c = Calendar.getInstance();
			c.setTime(new Date());
	        c.add(Calendar.DATE, - Integer.parseInt(timeRange));
	        return getDateStr(c.getTime().getTime());
		}
		
		public static Integer getCurWeekDay() {
			Calendar c = Calendar.getInstance();
			c.setTime(new Date());
			int week_index = c.get(Calendar.DAY_OF_WEEK) - 1;  
	        if(week_index<0){  
	            week_index = 0;  
	        } 
	        return week_index;
		}
		
		public static Long getTsByStr(String date, String format) {
			Date d = null;
			try {
				d = new SimpleDateFormat(format).parse(date);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			if(d!=null) return d.getTime();
			else return null;
		}

}
