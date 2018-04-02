# Using SWAP on AWS EC2

By default, all Linux instances of EC2 comes without swap. I'm not sure what are
the reasons for that BUT, in a few situations it is important to have swap,
instead of scaling up to an instance with more main memory. For instace, PHP
Composer might break on a EC2 micro instance, due to the lack of available
memory.

A very practical way of having swap is to create it on file. This way, you don't
have to partition you EBS volume or add a new one. If you are using encrypted
volumes and/or it is important to keep all data at rest encrypted, then create
the swap file inside an encrypted volume.

Before executing this tutorial, backup all your data and/or take a snapshot of
the machine.

To configure swap on a file, in a way that is persistent across reboots, do the
following steps:

1. Log as root `sudo -i`
2. Create the swap file (preferably inside an encrypted partition), say
   /opt/swap `dd if=/dev/zero of=/opt/swap bs=1M count=1024`. In this command we
   are creating a file with 1GB (1024 blocks of 1MB). Change `/opt/swap` to the
   desired path
3. Format the file as a swap partition `mkswap /opt/swap`
4. Fix possible permission problems `chmod 600 /opt/swap`
5. Turn on the swap using the new file `swapon /opt/swap`
6. At this point, if you run top/htop you will be able to see the swap partition
   already being used but if you reboot you instance, it will come up again
   without the swap. To make it persistent across reboots, edit the `/etc/fstab`
   file to add the line `/opt/swap swap swap defaults 0 0`. It is important to
   notice that the partition where the swap file is located must be configured
   to mount on boot

Done. Now, you can reboot your instance and your swap will still be working on
the next boot.
