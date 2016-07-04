/*
Title: Set Keyboard Layout Through Command Line
Description: I'm the kind of guy that don't enjoy the sort of answer "click here" or "click there" to solve any kind of problems related to Linux. Linux is build to be set by configuration files and command line programs (which changes the configuration files), not clicks. It's not Windows for God sake. The click click solutions just sucks because it's hard automate.
Date: 2012/03/19
*/

I'm the kind of guy that don't enjoy the sort of answer "click here" or "click there" to solve any kind of problems related to Linux. Linux is build to be set by configuration files and command line programs (which changes the configuration files), not clicks. It's not Windows for God sake. The click click solutions just sucks because it's hard automate.

**To set keyboard layouts, a good solution is setxkbmap**. This is a command line tool that works on every (or at least every I tested) window manager system. Base of line you pass the layout you want and the command make the job done. The command "**setxkbmap br**", will set the layout for Brazilian ABNT2. You can switch br to us or whatever layout you want to set. Consult the manpage of setxkbmap for more information.

You can also put the command on your .bashrc script, so that it will be executed every time you open a shell.

I hope this tip is as useful to you as it was to me. Please, leave comments.

Update: `loadkeys br` seems to be more powerful, doesn't require X, so you can run it to change the keyboard while you are on tty1, for instance. It worked well with linux mint, on tty1, but didn't work properly on ubuntu 11.10 on fluxbox.
