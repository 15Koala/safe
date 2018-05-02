#!/bin/bash
rm /data1/netty_log/redis-proxy-stat.log.$(date -d "-1 day" +"%Y%m%d")
#IP=`LC_ALL=C ifconfig  | grep 'inet addr:'| grep -v '127.0.0.1' | cut -d: -f2 | awk '{ print $1}' | grep -v '^10\.'`
IP=$HOSTNAME
YESTODAY=`date -d "-1 days" +%Y%m%d`
TA_FILE_SIZE=`ls -list /data1/netty_log/redis-proxy-tastat.log.\$YESTODAY | cut -d ' ' -f7`
BLK_FILE_SIZE=`ls -list /data1/netty_log/redis-proxy-blkstat.log.\$YESTODAY | cut -d ' ' -f7`
# report filesize
echo $TA_FILE_SIZE $BLK_FILE_SIZE
curl "http://58.215.168.183:9001/idxapp/interface/report/checkDataSize?rcdIDC=reachmax&rcdModule=ta&rcdSize=$TA_FILE_SIZE&rcdRecordDate=$YESTODAY&rcdServer=$IP&rcdFlag=local"
curl "http://58.215.168.183:9001/idxapp/interface/report/checkDataSize?rcdIDC=reachmax&rcdModule=blk&rcdSize=$BLK_FILE_SIZE&rcdRecordDate=$YESTODAY&rcdServer=$IP&rcdFlag=local"

gzip -c /data1/netty_log/redis-proxy-tastat.log.$YESTODAY > /data2/ta_log/redis-proxy-tastat.log.$YESTODAY.gz
gzip -c /data1/netty_log/redis-proxy-blkstat.log.$YESTODAY > /data2/blk_log/redis-proxy-blkstat.log.$YESTODAY.gz
rm /data1/netty_log/redis-proxy-tastat.log.$(date -d "-3 day" +"%Y%m%d")
rm /data1/netty_log/redis-proxy-blkstat.log.$(date -d "-3 day" +"%Y%m%d")
