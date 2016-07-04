/*
Title: cp: cannot create symbolic link: Operation not permitted
Description: cp: cannot create symbolic link: Operation not permitted
Date: 2010/08/01
*/

Today, I was trying to copy a bunch of files to my pendrive and it came out with a lot of messages like this:

    cp: cannot create symbolic link `/media/855D-88AB/Trolltech/QtEmbedded-4.6.3-arm/mkspecs/default': Operation not permitted

I tried a lot of flags combinations on the command "cp" when I finally saw a reasonable explanation for what was happening. VFAT (most pendrives uses this one), Fat-16 and (probably) Fat-32 too does not support symbolic links.

In my case, I had no size constraints and I decided to copy the entire file instead of the link. It can be done by using the flag -L: cp -rL source dest.

That's it. End of novel. As always, please, leave comments.


