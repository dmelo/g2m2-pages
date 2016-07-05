/*
Title: Export Amazon EC2 instance to VirtualBox 
Description: This post describes, step by step, how to export an EC2 instance to VirtualBox or a host machine
Date: 2016/05/11
Tags: linux,ec2,virtualbox
*/

Export Amazon EC2 instance to VirtualBox
========================================

Let's say that you want/need to export your running EC2 instance to another
platform. It may be a VirtualBox, VMWare, QEmu virtual machine or perhaps a
physical machine. The 
[tool provided by Amazon](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ExportingEC2Instances.html)
to do a job like this is very restricted:

- the EC2 instance may have only one EBS volume attached to it;
- there is no way to do it using only the Web console, you have to use the cli
tool;
- you can only export instances you have previously imported.

The approach proposed on this post doesn't rely on that Amazon tool and,
therefore is not bound by those restrictions. The basic idea is:

- attach the EBS volume of the target machine on another instance;
- use dd to dump the volume into a file;
- download/transfer that file to a more convenient place;
- reconfigure the image so that it works outside of the cloud;
- convert the raw image to the desired VM.

The following sections go in details about how to accomplish each
described step.

Before executing the procedure
------------------------------

Bear in mind that the end result will be the EC2 instance running on VirtualBox
(or something similar). You will probably want to log on the tty console.
By default, you access your EC2 instance through ssh, using certificates, so
the standard user (in my case fedora) doen't have a password. Log into your
machine and set a password for that user:

```bash
sudo passwd fedora
```

Dump the EBS volume into a downloadable file
--------------------------------------------

On the Amazon console, do the following steps:

1. turn off the machine that will be cloned;
2. detach the root volume from that machine;
3. attach the volume on another (auxiliary) machine (it must be attached as a
secondary volume);
4. install lzma (some distros doesn't include it by default);
5. log into the auxiliary machine and dump the EBS volume into a file.

Considering it is attached as `/dev/xvdf`, you can use the following command
to accomplish that last step.

```bash
dd if=/dev/xvdf | lzma -z -0 > /opt/ec2.img.lzma
```

This command might take a while. After it is done, you can copy
`/opt/ec2.img.lzma` to your local machine or any other convenient place.

* Obs.: If you rather not turn off the EC2 instance, during this procedure,
you can try to make a snapshot of the root EBS and create another EBS from it.
Then, perform the steps on this section on that cloned EBS.


Reconfigure the image so that it works outside of the cloud
-----------------------------------------------------------

This step ended up being easier than I had expected. Start by uncompressing
the image

```bash
lzma -cd ec2.img.lzma > ec2.img
```

We need to know the offset for the beginning of the root partition, inside the
block file. Use fdisk:

```bash
fdisk -l ec2.img
```

The offset is equal to `Start` times sector size. In my case 2048 times 512,
which equals 1048576. Now, I can mount the img file as a partition:


```bash
sudo mount -o loop,offset=1048576 ec2.img /mnt/disk
```

As root, use chroot to change the base to the ec2 system. It is also necessary
to disable the cloud specific services. The last thing I had to do was to
include a line on `/etc/security/access` to enable login through the tty console.

```bash
chroot /mnt/disk;
rm /etc/systemd/system/multi-user.target.wants/cloud*;
echo "+ : ALL : ALL" >> /etc/security/access.conf;
```

It is also a good idea to review your `/etc/fstab` to remove entries about
partitions that won't be there (at least at first). Now, get off chroot and
unmount the partition:

```bash
exit;
umount /mnt/disk;
```

Convert the raw image to the desired VM
---------------------------------------

In this post, I show how to make a VirtualBox VM out of it. So, this last
section varies accordingly with your goal. To make the VirtualBox VM, start
by converting from raw to VDI using VBoxManage:

```bash
VBoxManage convertfromraw ec2.img ec2.vdi --format VDI
```

Now you can use the VirtualBox GUI to create a new VirtualBox machine.
Instead of asking to create a new disk, use the newly created `ec2.vdi`.

And it is done!! Now you can start your VM and have fun with it.
