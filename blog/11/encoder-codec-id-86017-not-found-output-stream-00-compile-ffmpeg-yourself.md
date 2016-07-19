/*
Title: Encoder (codec id 86017) not found for output stream #0.0 -- Compile ffmpeg yourself
Description: I'm using Ubuntu 11.04 and experiencing some problems with ffmpeg. I found this blog post that suggests to compile x264 and ffmpeg yourself. But use x264 from Ubuntu and compile just ffmpeg is enough. So, here are the steps. Start by removing ffmpeg and making sure x264 is properly installed.
Date: 2011/10/25
*/

# Encoder (codec id 86017) not found for output stream #0.0 -- Compile ffmpeg yourself

I'm using Ubuntu 11.04 and experiencing some problems with ffmpeg. I found this blog post [http://pasindudps.blogspot.com/2010/12/compiling-ffmpeg-in-ubuntu-1010.html](http://pasindudps.blogspot.com/2010/12/compiling-ffmpeg-in-ubuntu-1010.html) but it seems to be deprecated on Ubuntu 11.04.



The post suggests to compile x264 and ffmpeg yourself. But use x264 from Ubuntu and compile just ffmpeg is enough. So, here are the steps. Start by removing ffmpeg and making sure x264 is properly installed.

    apt-get remove ffmpeg
    apt-get update
    apt-get install libx264-116 libx264-dev x264 libfaac-dev libfaac0 yasm libmp3lame-dev libopencore-amrwb-dev libtheora-dev libogg-dev libvorbis-dev libvpx-dev libxvidcore-dev
    apt-get autoremove

Then, login as root, download, compile and install ffmpeg:
su -
svn checkout svn://svn.ffmpeg.org/ffmpeg/trunk ffmpeg
cd ffmpeg
./configure --enable-gpl --enable-version3 --enable-nonfree --enable-postproc --enable-libfaac --enable-libmp3lame --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libtheora --enable-libvorbis --enable-libvpx --enable-libx264 --enable-libxvid --enable-x11grab
make
make install

It's done, you can now use ffmpeg normally (in may case, ripping mp3 from a video :D )
