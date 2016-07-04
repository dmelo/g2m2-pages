/*
Title: Recording microphone from command line
Description: First of all, you must install lame. apt-get install lame on debian based distributions must do the job. Just after that, this must do the work.arecord -f cd -t raw | lame -x -r - out.mp3. As the line suggests the microphone will be recorded on the out.mp3 file. Use alsamixer, type F4 to control the volume of your microphone. Have fun! and leave comments ;)
Date: 2010/08/17
*/

First of all, you must install lame. `apt-get install lame` on debian based distributions must do the job. Just after that, this must do the work.

    arecord -f cd -t raw | lame -x -r - out.mp3

As the line suggests the microphone will be recorded on the out.mp3 file. Use `alsamixer`, type F4 to control the volume of your microphone.

Have fun! and leave comments ;)
