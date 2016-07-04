/*
Title: Cron.d with symlink to another file
Descprition: Cron.d not always work well with symlinks, here is how to make it work.
Date: 2015/11/05
Tags: linux
*/

If you place a symlink inside `/etc/cron.d/`, odds are that it isn't gonna work.
I had this problem for the first time today, then I've decided to write about it.
The daemon will only follow the symlink *if the file is also owned by root*.

Moreover, make sure the file is not executable and writable only by the owner.
Also, make sure you reload cron daemon after the changes.

Here is a piece of cron's man page:

    CAVEATS
        All crontab files have to be regular files or symlinks to regular files,
        they must not be executable or writable for anyone else but the owner. 
        This requirement can be  overridden  by  using  the  -p option  on  the
        crond command line.  If inotify support is in use, changes in the 
        symlinked crontabs are not automatically noticed by the cron daemon.
        The cron daemon must receive a SIGHUP signal to reload the crontabs.
        This is a limitation of the inotify API.

