/*
Title: Webcam Problem at Dell Inspiron
Description: It has been a really long time since my last post. I can hear dust. I have a Dell Inspiron 1525, running Ubuntu and Debian. On both distros I have the same problem. After a while with the machine up the webcam stops working. I check for the /dev/video0 and the file does not exists. So, something is wrong. The webcam on those laptops are from OmniVision. Which means that even if your machine is not a Dell Inspiron this solution might suit you. If you give the command lsusb, one of the responses should be something like
Date: 2010/06/13
*/

It has been a really long time since my last post. I can hear dust.

I have a Dell Inspiron 1525, running Ubuntu and Debian. On both distros I have the same problem. After a while with the machine up the webcam stops working. I check for the `/dev/video0` and the file does not exists. So, something is wrong.

The webcam on those laptops are from OmniVision. Which means that even if your machine is not a Dell Inspiron this solution might suit you. If you give the command lsusb, one of the responses should be something like:

    Bus 001 Device 002: ID 05a9:2640 OmniVision Technologies, Inc. OV2640 Webcam

If somebody knows a driver update that fix that problem please tell me. For now. The quick fix is to reload the kernel module for this webcam. It can be done with the following commands:

    $ su -
    $ rmmod uvcvideo
    $ modprobe uvcvideo

And that's it. You should be able to use your webcam now.

It's not the most elegant solution you have ever seen but much better than have to reboot the computer. Again, if some of you knows a better I would be really happy to know it. Please, post it here :D
