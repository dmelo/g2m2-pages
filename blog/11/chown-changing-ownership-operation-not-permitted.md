/*
Title: chown: changing ownership of `???': Operation not permitted
Description: It seems basic usage of linux but I found out just today. If you want a user to be allowed to change group ownership of his files you must first use the command usermod (as root).usermod -a -G group1 user1...
Date: 2011/08/01
*/

It seems basic usage of linux but I found out just today. If you want a user to be allowed to change group ownership of his files you must first use the command `usermod` (as root).

    usermod -a -G group1 user1

After apply the command above (as root, or a use with enough privileges), the user `user1` will be able to perform the following command `chown user1.group1 file1 file2 file3` in order to change the files `file1 file2 and file3` to another group.

`usermod` usually is inside `/usr/sbin`, if you don't have this path inside your PATH environment variable, you must use run the command `/usr/sbin/usermod`.</p>
