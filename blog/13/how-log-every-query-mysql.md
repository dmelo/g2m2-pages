/*
Title: How to log every query on MySQL
Description: To know every sql being executed on your server, you have to 1) set debug on, 2) specify the output and 3) know how to look a it...
Date: 2013/05/25
Tags: linux,mariadb
*/

# How to log every query on MySQL

To know every sql being executed on your server, you have to:

1. set debug on;
2. specify the output;
3. know how to look a it.

Here are the commands that address this three issues. You must run then as superuser on your mysql:


    SET GLOBAL general_log = 'ON';
    SET GLOBAL log_output = 'TABLE';
    select * from mysql.general_log;
