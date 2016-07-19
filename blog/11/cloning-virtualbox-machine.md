/*
Title: Cloning a Virtualbox Machine
Description: You can either have the installation that comes with Ubuntu or the Oracle's release<h3>Oracle's release</h3>If you are using the Oracle's release (https//www.virtualbox.org/wiki/Downloads) then everything you need to do is right click on your machine and "clone", on the Virtualbox's management interface.<h3>Ubuntu's version</h3>
Date: 2011/11/03
*/

# Cloning a Virtualbox Machine

You can either have the installation that comes with Ubuntu or the Oracle's release

### Oracle's release

If you are using the Oracle's release ([https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)) then everything you need to do is right click on your machine and "clone", on the Virtualbox's management interface.



### Ubuntu's version

However, if you are using the version that comes on the Ubuntu's repository, then you need to do it manually, and it is a little bit more complicated then just copy the VDI file. Because of the UUID of the VDI, that ID must be different for each machine. But it's easy. Let's say your image is Ubuntu1.vdi and you want a Ubuntu2 machine:

    vboxmanage clonevdi ../Ubuntu1/Ubuntu1.vdi Ubuntu2.vdi

Now, on the Virtualbox's user interface, you can create the new machine with an existing disk. It's almost done. 

Now, if you start your machine, the network interface will have the same MAC address and (for a reason that I don't understand) it won't work. All you have to do is (on Virtualbox's interface) go to the settings of your new machine, then on network, advanced and change the MAC address to anything else valid.

### On any release

Supposing your guest system is also Linux (Ubuntu in my case), start your machine and you will notice it's getting trouble setting the network. You need to edit the file /etc/udev/rules.d/70-persistent-net.rules . There will be two lines effective working. Delete the line that says about "eth0". On the line about "eth1", replace the "eth1" by "eth0". 

Done, reboot and you are good to go.
