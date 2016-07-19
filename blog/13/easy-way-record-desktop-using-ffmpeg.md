/*
Title: Easy way to record desktop using ffmpeg
Description: Just use the following command to record the desktop with audio to a mkv
Date: 2013/06/08
Tags: linux,ffmpeg
*/

# Easy way to record desktop using ffmpeg

Just use the following command to record the desktop with audio to a mkv (or whatever format you want) file


```
ffmpeg -f alsa -ac 2 -i pulse -f x11grab -s 1280x1024 -r 30 -i :0.0 ~/out.mkv
```



