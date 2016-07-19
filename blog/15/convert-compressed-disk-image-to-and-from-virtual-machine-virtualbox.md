/*
Title: Convert compressed disk image to (and from) virtual machine (Virtualbox)
Description: Given a disk image, this post describes how to create a virtual
machine out of it.
Date: 2015/11/05
Tags: linux,dd,vm
*/

# Convert compressed disk image to (and from) virtual machine (Virtualbox)

On a [previous post](/blog/15/using-dd-and-lzma-to-backup-and-restore-a-disk)
I have documented a way to backup and restore a disk, using `dd` and
`lzma`.

Now, it is time to create a virtual machine out of the compressed backup image
without the need to uncompress the image to an intermediate file.

## Convert from compressed image to VirtualBox VM

The only constraint is that you must know, in advance, the size (in bytes) of
the uncompressed image. Here is the command:

    lzma -cd disk.img.lzma | VBoxManage convertfromraw stdin disk.vdi 62219354112 --format VDI

Check the number on the post about 
[backing up a disk](/blog/15/using-dd-and-lzma-to-backup-and-restore-a-disk).
In my case, 62219354112 is the number of bytes of the image. This number comes
from the calculation that the end sector is 121522175. Besides the fact the the
partition starts on section 2048, I want to copy the boot area and partition
table as well, so I copied from sector 0.

Don't forget to add 1, because 121522175 is 0-indexed. After that, multiply by
the size of the section, 512 in my case. It gives the number 62219354112.

After creating the VDI, you can open VitualBox and create a new VM, with that
existing diskt, instead of the default option of creating a new one. A special
reminder. In my case, I'm working with 64-bit machines, it is important to
specify that it is a 64-bit OS, while creating the new VM.

## Convert from VirtualBox VM to compressed image

No secret here, use VBoxManage to generate the raw image and then compress it.
I have found no way to dump the image to stdout in order to pipe it for
compression. So, I'm building a intermediate raw uncompressed file:

    VBoxManage clonehd disk.vdi disk.img --format RAW
    lzma -z -T 4 -9e disk.img
