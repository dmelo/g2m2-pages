/*
Title: Warning file_get_contents() php_network_getaddresses getaddrinfo failed No address associated with hostname
Description: What happend when I've got this error
Date: 2016/05/05
Tags: web-development,php,apache
*/

# Warning file\_get\_contents() php\_network\_getaddresses getaddrinfo failed No address associated with hostname

Today I was working on Amuzi and when I did a HTTP request on my local deploy
there was an error. The odd thing is that the error happend in a place that use
to be very solid. Digging down, I found that PHP was having trouble with
`file_get_contents()` openning an URL. It was generating the following warning:

```
Warning: file_get_contents(): php_network_getaddresses: getaddrinfo failed: No address associated with hostname
```

I've checked my DNS and everything was OK. Tried running the script on command
line, and it worked. There I knew it could only be something nasty related to
Apache.

Then I found a comment from 2003 on a [PHP bug report](https://bugs.php.net/bug.php?id=11058).
The comment from fcartegnie explained that Apache get the DNS entries from
`/etc/hosts` when it is starting. So, if you have started your apache before
your network is set up, Apache could end up with no working DNS to request.

I restarted my Apache (now that my network is working) and everything went back
to normal.
