# /bin/bash
logs_path="/data2/nginx_log/"
log_name="access.log"
pid_path="/data1/nginx_log/nginx.pid"
mv ${logs_path}${log_name} ${logs_path}${log_name}.$(date --date="LAST DAY" +"%Y%m%d")
kill -USR1 `cat ${pid_path}`
rm ${logs_path}${log_name}.$(date -d "-1 day" +"%Y%m%d")
