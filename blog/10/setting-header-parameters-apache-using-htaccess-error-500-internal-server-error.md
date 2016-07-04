/*
Title: Setting header parameters on apache using htaccess - error 500 Internal server error
Description: The first post of the year is about an error that I got while trying to set header parameters from htaccess. The intention is to make leverage browser caching on some objects of dicno.net. The syntax to set cache (or any other header parameter) is quite simple.
Date: 2010/01/03
*/

The first post of the year is about an error that I got while trying to set header parameters from htaccess. The intention is to make leverage browser caching on some objects of [dicno.net](http://dicno.net).

The syntax to set cache (or any other header parameter) is quite simple.

    <FilesMatch "\.(js|ico|gif|jpg|png|css|html)$">
    Header set Cache-Control "max-age=604800, public"
    </FilesMatch>

This lines on the .htaccess should set a cache of one week for all elements that ends with .js, .ico, .gif and so on...

However, I was getting the error number 500 Internal server error. I took a look into /var/log/apache2/error.log, to see more details about that error. It was saying:

    [Sun Jan 03 14:08:47 2010] [alert] [client 127.0.0.1] /var/www/dicno/public_html/.htaccess: Invalid command 'Header', perhaps misspelled or defined by a module not included in the server configuration

The error log suggests that some module is missing and that's exactly what was happening. The module headers is not enabled by default on Apache. So, we have to enable it manually.

To enable this module, log in as root, and create a symbolic link from mods-available/headers.load to mods-enabled. After that, reload apache and it's done. To do so, I've used this commands.

    su -
    cd /etc/apache2/mods-enabled/
    ln -s ../mods-available/headers.load headers.load
    sh /etc/init.d/apache2 force-reload

After that procedure the issue is solved. I hope it is as useful for you as it was to me. Please, leave comments. Bye :D
