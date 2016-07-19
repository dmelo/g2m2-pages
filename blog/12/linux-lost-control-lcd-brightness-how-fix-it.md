/*
Title: Linux - Lost control on LCD Brightness - How to fix it
Description: Today When I pressed the keys to switch up/down the brightness of my LCD it didn't respond. Googling around, I've found a post that helped solving the problem.
Date: 2013/06/01
*/

# Linux - Lost control on LCD Brightness - How to fix it

Today When I pressed the keys to switch up/down the brightness of my LCD it didn't respond. Googling around, I've found this post [https://bbs.archlinux.org/viewtopic.php?id=139610](https://bbs.archlinux.org/viewtopic.php?id=139610).

The command `cat /sys/module/video/parameters/brightness_switch_enabled` returned `N`. So I echoed the opposite `echo Y  > /sys/module/video/parameters/brightness_switch_enabled`. IT WORKED :D Now my brightness keys are working right again. I just put this command on my /etc/rc.local so that it persists on reboot.

Update (05-22-2013):

I just got a Dell XPS 13 that had the same problem but a different file to fix it.

`echo 0 | sudo tee /sys/class/backlight/intel_backlight/brightness`

This one also might work. Choose a number between 1 and 100 and run the command.

`echo -n 6 > /sys/class/backlight/acpi_video0/brightness`
