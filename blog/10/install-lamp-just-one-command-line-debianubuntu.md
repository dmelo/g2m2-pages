/*
Title: Install LAMP with just one command line on Debian/Ubuntu
Description: I'm so tired of install Apache with MySQL and PHP. I always have to make lots of "apt-get"s tto get all the packages installed just because I don't remember all of them at the first "apt-get". Here is the line to install all you (probably) need: apt-get install phpmyadmin
Date: 2010/07/21
*/

![](http://diogomelo.net/drupal/sites/default/files/lamp.png)



I'm so tired of install Apache with MySQL and PHP. I always have to make lots of "apt-get"s tto get all the packages installed just because I don't remember all of them at the first "apt-get".

Here is the line to install all you (probably) need:

    apt-get install phpmyadmin

Turns out that Apache, PHP and MySQL are pre-requisites for phpmyadmin. So, install phpmyadmin is a good way to install all the LAMP :D. This tip came from one of the replies.

The old way that I was showing was:

    apt-get install mysql-client mysql-common mysql-server mysql-server php5-mysql php-apc php-db php-pear php5 php5-cli php5-common php5-curl php5-gd php5-imagick php5-mcrypt php5-memcache php5-memcache php5-mysql php5-sqlite php5-suhosin apache2 apache2-doc apache2-mpm-prefork apache2-suexec apache2-utils apache2.2-common libapache2-mod-php5

Now we have to do some fine tunning. I know... it brokes the "Just One Command" that I was promising, but it's for a good cause :)

Go to /etc/apache2/mods-enabled/ and do this `ln -s ../mods-available/rewrite.load ./ ; sh /etc/init.d/apache2 restart`. When you work with Zend, you need to redirect every request, but the ones for static files, to index.php. The rewrite module allow you to do that.

... more comming
