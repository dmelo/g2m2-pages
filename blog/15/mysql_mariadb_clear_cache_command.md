/*
Title: MySQL/MariaDB Clear cache command
Description: Command to clear query cache on MySQL and MariaDB
Date: 2015/08/25
Tags: mariadb
*/

# MySQL/MariaDB Clear cache command

The command is:

    RESET QUERY CACHE;

This is very useful when you are trying to compare the performance of a query
and want to make sure the cache is not tampering the results.
