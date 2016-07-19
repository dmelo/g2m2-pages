/*
Title: PHP, Session and a Bottleneck
Description: I learned something new, recently. Sessions in PHP are blocking. At [http//amuzi.me](Amuzi), I try to keep the user from having to go to another URI, this way the music won't stop. So I end up using a lot of Ajax. Some of this are concurrent. For instance, when a user click to add a music, one request is fired to fulfill that request and another one to search for similar music. The problem is that, on server side, the two requests won't run simultaneously if they use sessions.
Date: 2013/05/28
Tags: linux,amuzi,web-development,php
*/

I learned something new, recently. Sessions in PHP are blocking. At
[Amuzi](http://amuzi.me), I try to keep the user from have to go to another
URI, this way the music won't stop. So I end up using a lot of Ajax. Some of
this are concurrent. For instance, when a user click to add a music, one
request is fired to fulfill that request and another one to search for similar
music. The problem is that, on server side, the two requests won't run
simultaneously if they use sessions.

But PHP is relatively smart. Sessions usually are cookie based. So the requests
are blocking just intra-user, not inter users. Request from user A can run
simultaneously with request from user B. But two requests from the same user
won't.

There is no magic. To overcome this issue, you have to keep the session open
just for as long as you have to. You can control this by using the PHP functions
[session_start](http://www.php.net/manual/en/function.session-start.php) and
[session_write_close](http://www.php.net/manual/en/function.session-write-close.php).

Careful, php.ini can be configured to start session automatically on each
request. So you might have to call `session_write_close` on start up, or disable
this behaviour.

Please, leave comments.
