/*
Title: Making dhcp / network-manager stop editing /etc/resolv.conf
Description: One thing that was driving me crazy is that repugnant feature that dhclient has to fetch your name servers.Thanks to the gorgeous linux philosophy it is simple to disable this annoying thing. All you have to do is to make it unwriteable. First, edit the file the way you want it to be and then run (you must be logged as root) chattr +i /etc/resolv.conf
Date: 2011/12/21
*/

# Making dhcp / network-manager stop editing /etc/resolv.conf

One thing, that was driving me crazy, is that repugnant feature that dhclient has to fetch your name servers.

Thanks to the gorgeous linux philosophy it is simple to disable this annoying thing. All you have to do is to make it unwriteable. First, edit the file the way you want it to be and then run (you must be logged as root):

    chattr +i /etc/resolv.conf

To put it to the test try to change it's content:

    echo kkk >> /etc/resolv.conf

If you get a `permission denied` answer, it's because it worked.
