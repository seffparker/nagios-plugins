# nagios-plugins
Nagios/Icinga plugins to perform various checks.

---
---

### check_conn
Check and report active TCP connections on the states ESTABLISHED and TIME_WAIT categorized under different services like HTTP, MAIL, MySQL etc along with PERF_DATA values.

Binary dependencies: netstat, grep, awk, wc

---

### check_ioutil
Calculate the I/O usage percentage for each block devices and partitions along with PERF_DATA values. Metrices are read from the Kernel variable /proc/diskstats

Binary dependencies: cat, awk, date

---

### check_megaraid
Report MegaRAID array status (failed, degraded, critical, media errors, and rebulid progress) along with RAID Level, device slot number and serial number.

Binary dependencies: MegaCLI, echo, grep, sort, uniq, sed, sudo (optional)

---

### check_mysql_conn
Check MySQL is online by actually running a test query. It also report MySQL version, Uptime, active SQL thread count and Queries per second along with PERF_DATA values.

Binary dependencies: mysql, mysqladmin, echo, awk

---

### check_pkg
Report RPM/DPKG database intergiry and last package update/install time.

Binary dependencies: rpm / dpkg, date, awk, head

---

### check_rbl
Check each IP reputation against pre-definded major RBLs, and report along with PERF_DATA values.

Binary dependencies: ip, dig, awk, grep, sort, uniq, printf

---

### check_rxtx
Report in/out network transfer rate in KB/s for each network interface along with PERF_DATA values. Metrices are read from the Kernel variable /proc/net/dev

Binary dependencies: awk, cat, echo, date

---

### check_smart

Report SMART health status for physical disks including those attached to a RAID array along with device serial number. The script attempt to auto-detect device IDs and raid type. If it failes, you may need to manually specify via aurguments.

Binary dependencies: smartctl, echo, awk, sort, uniq, sudo (optional)
