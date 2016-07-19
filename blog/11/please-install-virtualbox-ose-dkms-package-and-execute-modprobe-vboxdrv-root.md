/*
Title: Virtualbox Problems - Please install the virtualbox-ose-dkms package and execute 'modprobe vboxdrv' as root
Description: I fixed a problem that I was having since the day I upgraded to ubuntu 11.04. My virtualbox stoped working and whenever I tried to launch a virtual machine it pop-up a alert window saying "Please install the virtualbox-ose-dkms package and execute 'modprobe vboxdrv' as root.". This error is probably happening because the Virtualbox that you are using doesn't works with the kernel that you are using. The Virtualbox that comes on the Ubuntu's repository, doesn't works with kernels that have PAE support. The PAE is for addressing more then 3.5GB of RAM memory.
Date: 2011/11/03
*/

# Virtualbox Problems - Please install the virtualbox-ose-dkms package and execute 'modprobe vboxdrv' as root

I fixed a problem that I was having since the day I upgraded to ubuntu 11.04. My virtualbox stoped working and whenever I tried to launch a virtual machine it pop-up a alert window saying "Please install the virtualbox-ose-dkms package and execute 'modprobe vboxdrv' as root.".

This error is probably happening because the Virtualbox that you are using doesn't works with the kernel that you are using. The Virtualbox that comes on the Ubuntu's repository, doesn't works with kernels that have PAE support. The PAE is for addressing more then 3.5GB of RAM memory.

There is three basic solutions: **1) use the Oracle's release of Virtualbox**, **2) just boot with a kernel that doesn't have PAE support** and **3) uninstall the PAE kernel**.



### 1) Use Oracle's release

If you go to synaptic (or using apt-get from command line) you are gonna find packages for Virtualbox that are available on Ubuntu's repositories. The thing is that it differs from the Oracle's release and the Oracle's does not have any problem with PAE module.

To install the Oracle's release you have to remove the current Virtualbox installed, add the Oracle's repository and install the package offered by Oracle.

    apt-get remove virtualbox*

Add the line `deb http://download.virtualbox.org/virtualbox/debian oneiric contrib` on your `/etc/apt/sources.list` file. Then, use the following command to add Oracle's key:

    wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | sudo apt-key add -

Now, update your apt-get and install the right package.

    apt-get update
    apt-get install virtualbox-4.1

Now you are done, and the new Virtualbox will recognize the machines you had on your old Virtualbox.



### 2) Boot with a kernel that doesn't have PAE support

When I was having this problem, after install the virtualbox-ose-dkms, when I tried to load vboxdrv it was gaving me the message "FATAL: Module vboxdrv not found."

I was using the kernel 2.6.38-10-generic-pae. After uninstall that kernel and install the 2.6.38-10-generic, I was able to install virtualbox-ose-dkms and load the vboxdrv. But you don't need to uninstall the PAE kernel, just need to boot with another kernel when you are going to use Virtualbox.

If you use Virtualbox very often or just don't want to keep in mind the booting the right kernel thing. You can change the default kernel on grub https://help.ubuntu.com/community/Grub2

### 3) Uninstall the PAE kernel

If you don't mind not using PAE for ever, you can just uninstall that kernel that supports it. To uninstall the 2.6.38-10-generic-pae:

    apt-get remove --purge linux-image-2.6.38-10-generic-pae

The right kernel is probably already installed. Just in case, here is the command to install the generic kernel:

    apt-get install linux-image-2.6.38-10-generic

Reboot, make sure you are booting the right kernel when grub is loaded. Open the root terminal again, install the virtualbox-ose-dkms and load vboxdrv.

    apt-get install virtualbox-ose-dkms
    modprobe vboxdrv

Now, you must be able to run your virtual machines again.

I hope it to be helpful ;) and PLEASE leave comments.
