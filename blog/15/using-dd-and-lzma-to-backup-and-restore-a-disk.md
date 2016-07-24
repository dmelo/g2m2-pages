/*
Title: Using dd and lzma to backup and restore a disk
Description: This post show the commands to backup and restore a disk, using dd and lzma
Date: 2015/10/14
Tags: linux,dd,backup
*/

# Using dd and lzma to backup and restore a disk

Suppose the target disk is at `/dev/sda` and the image is (or will be) at 
`/mnt/disk.img.lzma`

Writing the compressed image
----------------------------

The block size and the number of blocks can be find with the 
command `fdisk -l /dev/sda`. Pay attention to the fact that it is 0-indexed. 
Here is an example:

    [root@localhost ~]# fdisk -l /dev/sda
    Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 4096 bytes
    I/O size (minimum/optimal): 4096 bytes / 4096 bytes
    Disklabel type: dos
    Disk identifier: 0xd65dc0b8

    Device     Boot Start       End   Sectors Size Id Type
    /dev/sda1        2048 121522175 121520128  58G 8e Linux LVM

To take an image of the sda, the command would be:

    dd if=/dev/sda bs=512 count=121522176 | lzma -z -T 4 -9e > /mnt/disk.img.lzma
    
121522176 is the last sector plus one. About the lzma command, `-9e` is the
compression level which, in this case, is maximum compression. `-T 4` says
that it can use up to 4 threads and the `-z` simply specify that lzma must
compress (not decompress) the data.

Restoring the compressed image on a disk
----------------------------------------

Now, for the inverse process, pay attention to the size of the disk. It must
be bigger than or equal to the size of the image taken. Otherwise, it can corrupt
the filesystem.

Here is the command to restore the disk:

    lzma -cd /mnt/disk.img.lzma | dd of=/dev/sda bs=4k

The `bs` doesn't need to match the value used on the previous section, 4k is a
value that delivers a good speed on disks that I have used so far. Refer to
[this speed test](http://www.mail-archive.com/eug-lug@efn.org/msg12073.html)
for further information.
