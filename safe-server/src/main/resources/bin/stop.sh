#!/bin/bash
SH_PATH=$(cd "$(dirname "$0")"; pwd)

SERVER_HOME=$SH_PATH/..
CONF_PATH=$SERVER_HOME/conf/config.properties
LOG4J_PATH=$SERVER_HOME/conf/log4j.properties

PID=`cat $SERVER_HOME/logs/pid.txt`
kill $PID
echo "server stopping, pid: $PID"
sleep 3 
kill -9 $PID
