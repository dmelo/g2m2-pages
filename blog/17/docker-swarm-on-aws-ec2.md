/*
Title: Docker Swarm on AWS EC2 Using Fedora 25
Description: This post describes, step by step, how to get an EC2 instance
running Docker to join a swarm
Date: 2017/03/20
Tags: linux,ec2,docker,docker-swarm
*/

# Docker Swarm on AWS EC2 Using Fedora 25

Here are the steps I used to launch a Fedora 25 instance, on AWS, and make it
join the Docker Swarm.

## EC2 Instance

I used Fedora 25, 64 bits, HVM, EBS based the Cloud version (not the Atomic
 one).

Make sure this machine is accessible from the other managers/workers on the
Docker Swarm. The following ports must be available:

| Protocol    |   Port  |
| ----------- | ------- |
| TCP         |   2376  |
| TCP         |   2377  |
| TCP/UDP     |   7946  |
| UDP         |   4789  |

## Installing requirements

First thing is to give a name to the host (edit `/etc/hostname`) and update
packages:

```bash
dnf update -y
```

If Kernel was also updated, then reboot the machine. After that, follow the
steps described on
[Get Docker for Fedora](https://docs.docker.com/engine/installation/linux/fedora/#prerequisites).

## Joining the Swarm

Make sure you enable and start Docker daemon:

```bash
systemctl enable docker && systemctl start docker
```

To join the Swarm, beside the basic parameters also specify `listen-addr` and
`advertise-addr`, where the former may be `0.0.0.0` (so that it can listen on
all interfaces) and the latter is the instance's public IP:

```bash
docker swarm join \
--token SWMTKN-1-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa \
--listen-addr=0.0.0.0 \
--advertise-addr=53.53.53.53
```
