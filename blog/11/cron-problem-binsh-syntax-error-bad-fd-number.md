/*
Title: Cron Problem - /bin/sh: Syntax error: Bad fd number
Description: Today I find out an interesting fact. Cron doesn't like "&gt;&" at all. Here is an example of a problematic cron line...
Date: 2011/06/17
*/

Today I find out an interesting fact. Cron doesn't like ">&" at all. Here is an example of a problematic cron line:

    * * * * * echo aaa >& /tmp/test.out

To solve that you can either stop redirecting the error output:

    * * * * * echo aaa > /tmp/test.out

Or you can redirect the error through some other way:

    * * * * * echo aaa 2>&1 > /tmp/test.out

The last two cron line samples will work perfectly. The difference between then is that last cron line redirects both output and error to the file /tmp/test.out, while the previous line redirects only the output to the file.
