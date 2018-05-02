#!/bin/bash
#hosts
HOST_LIST=( "r9" "r10" "r11" "r12" )

#ssh port
SSH="ssh -p 58404"
SCP="scp -P 58404"
SH_PATH=$(cd "$(dirname "$0")"; pwd)

for IP in ${HOST_LIST[*]}
do
        $SCP -r $SH_PATH/../redis-proxy-netty.jar $IP:"$SH_PATH"/../
	echo "ssh $IP ..."
        $SSH $IP "$SH_PATH/stop.sh"
        $SSH $IP "$SH_PATH/start.sh"
	sleep 5
done
