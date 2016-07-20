/*
Title: SSH Tricks 
Description: SSH is a powerful tool that allow you to remotely operate another machine. Here you'll find some tips about SSH.
Date: 2011/08/09
*/

# SSH Tricks 

SSH is a powerful tool that allow you to remotely operate another machine. Here you'll find some tips about SSH.

## Safe Browsing

Whenever you connect to someone through http (and not https) all the data transfered comes and goes on plain text, allowing people on the middle to see everything. One way to avoid it is to create a tunnel from your machine to some place else and use this tunnel as proxy. To do this tunnel, use the command:


```bash
ssh -f -N -D 1080 user@remoteserver
```

After that, go to Firefox preferences and set your network to be a SOCK network where the address is `127.0.0.1` and the port is `1080`.

Done, now you have more privacy.

## Running graphical softwares

That's the basic stuff, let's turn the things a little more interesting. Usually you can only use non graphical software. SSH has a way to export the X from the remote machine to yours. To do that you need to add the flag `-X`.

```bash
ssh -X dmelo@merov
```

By doing this you'll be able to run graphical softwares like firefox :D. The only constraint is about audio. SSH does not support export it but some geeks have found a way to do so. As you may expect by using graphical software over SSH you'll need a larger bandwidth.



## SCP - Transferring files between hosts

Sometimes is necessary to transfer a file over the network. ssh offers a way to do that. The scp command uses ssh to copy a file. The command syntax is very similar to the cp command. The difference is on how to describe a file on a remote machine. Let 'book.pdf' be a file in my home, on the host 'merov'. The address that describe this file is `dmelo@merov:/home/dmelo/book.pdf`. To copy this file to my local machine I have to do only this 

```bash
scp dmelo@merov:/home/dmelo/book.pdf ./
```

This command will copy the file from the remote host `merov` to the current path of my local machine. Since the communications is encrypted, scp provide you an efficient and safe way to transfer you files. By default, the port is 22, if the server is running on a different port you can specify that using the flag -P. Like this

```bash
scp -P22 dmelo@merov:/home/dmelo/book.pdf
```

## SSHFS - Mouting partitions over SSH

Another very nice thing about SSH is that it allows you to remotely mount partitions. Yes, you can see remote directories on the same way you see your pendrive. But, for this you need to install sshfs. In ubuntu it's simple `sudo apt-get install sshfs`. SSHFS is a file system client based on ssh. It does not require root permissions to mount partitions. The syntax is similar to ssh.

```bash
sshfs dmelo@merov:/home/dmelo movies
```

After this, my home will be mounted on the local `./movies` path.

## Playing movies and music over SSH

To play stuff you can simply use sshfs but there is another way. The command

```bash
ssh dmelo@merov cat movie.avi | mplayer -
```

This command will redirect the stdout of the file movie.avi to the input of the mplayer and mplayer will play the movie (or whatever media it is). It's important to note that mplayer is running on the local machine. So, you won't have troubles with sound.


## Creating tunnels

Create tunnel is not any secret. The sintax is `ssh -L partA:hostA:portB [hostB]` . This command will create a tunnel from portA of hostA to portB of hostB. If you don't specify hostB then it will be portA to portB of hostA.

The tip here is about the way to make the tunnel. Use "-N" to avoid open a shell on the foreign host. When you run without the "-N" it logs in on the foreign host. With the "-N" it just make the tunnel.

```bash
ssh -N -L portA:hostA:portB hostB
```

Comment bellow what is the coolest thing you know about SSH :D I will update this blog post with your suggestions.
