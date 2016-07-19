/*
Title: gnome-terminal --hide-menubar (hide menubar) not working
Description: When I upgraded to Ubuntu 11.10 the menu bar started showing up again, even setting the "Show menu bar" on the "View" tab to false. Moreover, even calling the gnome-terminal with the --hide-menubar param, it started with the annoying menubar. I found the solution on a blog post.
Date: 2012/01/19
*/

# gnome-terminal --hide-menubar (hide menubar) not working

When I upgraded to Ubuntu 11.10 the menu bar started showing up again, even setting the "Show menu bar" on the "View" tab to false. Moreover, even calling the gnome-terminal with the --hide-menubar param, it started with the annoying menubar. I found the solution on a [blog post](http://askubuntu.com/questions/66371/gnome-terminal-keeps-the-menubar-even-when-the-profile-is-configured-to-hide-it):

    sudo apt-get remove appmenu-gtk3 appmenu-gtk appmenu-qt
    gnome-terminal --hide-menubar
