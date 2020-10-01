# nagios-plugins
Nagios/Icinga plugins to perform various checks.

---

### check_conn
Check and report active TCP connections on the states ESTABLISHED and TIME_WAIT categorized under different services like HTTP, MAIL, MySQL etc along with PERF_DATA values.

Binary dependencies: netstat, grep, awk, wc
#### Sample Outputs:
```
Total TCP connections: 490 (ESTABLISHED=356, TIME_WAIT=134, HTTP=481, MAIL=1, MYSQL=0)
```
---

### check_ioutil
Calculate the I/O usage percentage for each block devices and partitions along with PERF_DATA values. Metrices are read from the Kernel variable /proc/diskstats

Binary dependencies: cat, awk, date
#### Sample Outputs:
```
OK: Disk I/O usage is normal! - dm-0: 48%, sda2: 0%, sda3: 0%,
```
---

### check_iokbps
Calculate the I/O usage in Kilobytes/second for each block devices and partitions along with PERF_DATA values. Metrices are read from the Kernel variable /proc/diskstats

Binary dependencies: cat, awk, date
#### Sample Outputs:
```
OK: Disk Read/Write usage is normal! - vda1: Read=645KB/s, Write=71KB/s, vda15: Read=0KB/s, Write=0KB/s,
```
---

### check_megaraid
Report MegaRAID array status (failed, degraded, critical, media errors, and rebulid progress) along with RAID Level, device slot number and serial number.

Binary dependencies: MegaCLI, echo, grep, sort, uniq, sed, sudo (optional)

#### Sample Outputs:
```
OK: RAID5 on vd0 is Optimal, RAID0 on vd1 is Optimal, - All 4 disks are healthy. S/N: PHYF9345021Q960CGN,PHYF934501RB960CGN,BTYF014304Y9960CGN,PHYF934501Z7960CGN
```
```
WARNING: RAID5 on vd0 is Optimal, - Slot# 0, Device# 5, Sn# K5HALMPD has reported 2129 media errors, Slot# 1, Device# 4, Sn# K5HALH6D has reported 80 media errors,
```

---

### check_mysql_conn
Check MySQL is online by actually running a test query. It also report MySQL version, Uptime, active SQL thread count and Queries per second along with PERF_DATA values.

Binary dependencies: mysql, mysqladmin, echo, awk
#### Sample Outputs:
```
OK: MySQL 5.7.31-log is UP for 7 days! Threads: 3, Q/s: 1968
```
---

### check_pkg
Report RPM/DPKG database intergiry and last package update/install time.

Binary dependencies: rpm / dpkg, date, awk, head
#### Sample Outputs:
```
OK: DPKG Database verification succeeded. Last updated 29 days ago
```
```
WARNING: RPM packages are not updated for last 60 days
```
---

### check_rbl
Check each IP reputation against pre-definded major RBLs, and report along with PERF_DATA values.

Binary dependencies: ip, dig, awk, grep, sort, uniq, printf
#### Sample Outputs:
```
CRITICAL: All 2 IP(s) have poor reputation in 1 RBL(s) cbl.abuseat.org
```
---

### check_rxtx
Report in/out network transfer rate in KB/s for each network interface along with PERF_DATA values. Metrices are read from the Kernel variable /proc/net/dev

Binary dependencies: awk, cat, echo, date
#### Sample Outputs:
```
eth2: RX=0 KB/s TX=0 KB/s, eth1: RX=0 KB/s TX=0 KB/s, eth0: RX=19 KB/s TX=281 KB/s,
```
---

### check_smart

Report SMART health status for physical disks including those attached to a RAID array along with device serial number. The script attempt to auto-detect device IDs and raid type. If it failes, you may need to manually specify via aurguments.

Binary dependencies: smartctl, echo, awk, sort, uniq, sudo (optional)
#### Sample Outputs:
```
OK: All 4 Hard drive(s) looks healthy! Serial #: PHYF9345021Q960CGN PHYF934501RB960CGN BTYF014304Y9960CGN PHYF934501Z7960CGN
```
```
WARNING: 2 of 3 drive has 2219 Media Errors most recent at 932 hours ago! Serial #: K5HALH6D K5HALMPD
```
---

### check_backup

Check the existence of given filetypes in the specified backup directory within a range of days. The scan depth can also be specified.

Binary dependencies: find, grep
#### Sample Outputs:
```
OK: 4 .sql.gz backups generated under /backup/mysql in last 1 days
```
---

### check_phplive

Check the chat operator status for PHPLive! chat service.

Binary dependencies: curl, grep, sed
#### Sample Outputs:
```
OK: Chat operator is online on Support,Sales
```
---

### check_tawk.js

Check the chat operator status for Tawk chat service.

Binary dependencies: phantomjs
#### Sample Outputs:
```
OK: Chat operator is online
```
