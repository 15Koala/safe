#!/bin/bash
#hosts
HOST_LIST=( "nrt1" "nrt2" "nrt3" "nrt4" "nrt5" "nrt6" "nrt7" "nrt8" "nrt9" "nrt10" "nrt11" "nrt12" )

#ssh port
SSH="ssh -p 58404"
SCP="scp -P 58404"
SH_PATH=$(cd "$(dirname "$0")"; pwd)

for IP in ${HOST_LIST[*]}
do
	$SCP -r $SH_PATH/../lib/redis* $IP:"$SH_PATH/../lib/"
done
