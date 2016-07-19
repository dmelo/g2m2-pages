/*
Title: Using xrandr
Description: It has been a long time since the last post. This one is about xrandr. First of all, I don't intend to cover all possibles usages of xrandr. I will only tell the way I solve a problem I had, using it. Here is the deal, xrandr is used to dynamically change the things that usually you set into xorg.conf. I have a laptop and when I'm home I just use the LCD in it. Sometimes, I like to bring my laptop to the place I work. I have a monitor there and I like to use it  with my laptop, to do the dual head stuff.
Date: 2009/11/11
*/

# Using xrandr

It has been a long time since the last post. This one is about xrandr. First of all, I don't intend to cover all possibles usages of xrandr. I will only tell the way I solve a problem I had, using it.

Here is the deal, xrandr is used to dynamically change the things that usually you set into xorg.conf. I have a laptop and when I'm home I just use the LCD in it. Sometimes, I like to bring my laptop to the place I work. I have a monitor there and I like to use it  with my laptop, to do the dual head stuff.

If you just hit the command xrandr you'll the an output like this:

    Screen 0: minimum 320 x 200, current 1440 x 900, maximum 3000 x 2000
    VGA disconnected (normal left inverted right x axis y axis)
    LVDS connected 1440x900+0+0 (normal left inverted right x axis y axis) 303mm x 190mm
    1440x900 60.0*+
    1280x800 60.0 
    1280x768 60.0 
    1024x768 60.0 
    800x600 60.3 
    640x480 59.9 
    TMDS-1 disconnected (normal left inverted right x axis y axis)
    TV disconnected (normal left inverted right x axis y axis)

The command, without arguments, just print the current status of your screen(s). After plug the extra monitor you'll get the information about your VGA too, including the available resolutions.

You can specify the screen resolution by using:

    xrandr --output LDVS --mode 1440x900

LDVS is the name of the LCD of my laptop. This command set the resolution 1440x900 for it.

You can also specify that you want you VGA placed left (or right, bottom, or top) of the LDVS, by using the command:

    xrandr --output VGA --left-of LVDS

So, the full script is:

    #!/bin/bash
    xrandr --output LDVS --mode 1440x900
    xrandr --output VGA --mode 1280x1024
    xrandr --output VGA --left-of LVDS

This three commands will set the resolution of  each LCD and adjust the relative position of each other.

You also might have a huge LCD monitor, in such way that you just don't want to use your laptop display. In this case you can turn off a monitor by using the following command:

    xrandr --output LDVS --off

I hope it to be useful. Try it yourself, and leave comments :D
