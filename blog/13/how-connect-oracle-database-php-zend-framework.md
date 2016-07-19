/*
Title: How to Connect to Oracle Database With PHP Zend Framework
Description: Start by installing Oracle Instant Client basic and devel/sdk provided by oracle...
Date: 2013/03/14
Tags: linux,fedora,php
*/

# How to Connect to Oracle Database With PHP Zend Framework

Start by installing Oracle Instant Client basic and devel/sdk provided by oracle
from this link [http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html](http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html)

On Fedora you will have to apply the following commands:

    yum install oracle-instantclient11.2-basic-11.2.0.3.0-1.x86_64.rpm
    yum install oracle-instantclient11.2-devel-11.2.0.3.0-1.x86_64.rpm

Now you can install *php_oci8* from pecl with `pecl install oci8`. Then enable
oci8 on php by adding `extension=oci8.so` on your php.ini.



Now it's time to configure your zend application with the correct config params.
In my case, I'm using the following:

    resources.db.adapter = 'oracle'
    resources.db.params.host = '127.0.0.1'
    resources.db.params.username = 'dbuser'
    resources.db.params.password = 'dbpass'
    resources.db.params.dbname = '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 127.0.0.1)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = orcl) ) )'
    resources.db.params.persistent = true

Done! Now you can use your db adapter for Oracle as you would with MySQL.
