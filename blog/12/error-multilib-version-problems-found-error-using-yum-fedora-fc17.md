/*
Title: Error:  Multilib version problems found -- Error using yum on Fedora fc17
Description: <p>I was trying to install wine on my Fedora fc17 and getting this error message</p>
Date: 2012/10/27
*/

# Multilib version problems found -- Error using yum on Fedora fc17

I was trying to install wine on my Fedora fc17 and getting this error message:

    Error:  Multilib version problems found. This often means that the root
           cause is something else and multilib version checking is just
           pointing it that there is a problem. Eg.:

             1. You have an upgrade for libtool-ltdl which is missing some
                dependency that another package requires. Yum is trying to
                solve this by installing an older version of libtool-ltdl of the
                different architecture. If you exclude the bad architecture
                yum will tell you what the root cause is (which package
                requires what).
           
             2. You have multiple architectures of libtool-ltdl installed, but
                yum can only see an upgrade for one of those arcitectures.
                If you don't want/need both architectures anymore then you
                can remove the one with the missing update and everything
                will work.
           
             3. You have duplicate versions of libtool-ltdl installed already.
                You can use "yum check" to get yum show these errors.
           
           ...you can also use --setopt=protected_multilib=false to remove
           this checking, however this is almost never the correct thing to
           do as something else is very likely to go wrong (often causing
           much more problems).
           
           Protected multilib versions: libtool-ltdl-2.4.2-3.1.fc17.i686 != libtool-ltdl-2.4.2-3.fc17.x86_64



**To fix this error I ran:** `package-cleanup --cleandupes` and voila, problem
solved. The package-cleanup command cleans the locally installed rpm.
