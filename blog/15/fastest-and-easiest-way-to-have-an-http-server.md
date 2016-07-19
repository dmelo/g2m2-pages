/*
Title: Fastest and easiest way to have an http server running
Description: If you just want to have a http server running, what is the easiest way?
Date: 2015/11/16
Tags: web-development
*/

# Fastest and easiest way to have an http server running

If you just want to have a http server running, what is the easiest way? So far,
the answer for me is this command:

    python -m SimpleHTTPServer 8080

It will serve the content on the current path. If you know a better answer,
please let me know.

*Update [2015-11-17]*: Another way is to user PHP built in server, as suggested by [Subin Siby](https://disqus.com/by/subins2000/):

    php -S 0.0.0.0:8080
