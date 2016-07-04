/*
Title: MySQL/MariaDB Clear cache command
Descprition: Command to clear query cache on MySQL and MariaDB
Date: 2015/08/25
Tags: mariadb
*/

The command is:

    RESET QUERY CACHE;

This is very useful when you are trying to compare the performance of a query
and want to make sure the cache is not tampering the results.
