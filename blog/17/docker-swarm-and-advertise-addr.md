# Docker Swarm and Advertise Address

When your network interface have many IPs attached to it, make sure you specify
the advertise-addr both when initiating and joining nodes to the cluster.
Otherwise, you may get one sided communication, causing the log to look
something like this

Machine A (`docker swarm init --listen-addr 0.0.0.0 --advertise-addr X.X.X.X`):

```
Apr 20 19:38:22 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:22.080427799Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:24 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:24.080224981Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:25 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:25.080487073Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:27 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:27.080223955Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:29 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:29.080224237Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:30 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:30.080814564Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:32 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:32.080248030Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:32 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:32.080736493Z" level=error msg="periodic bulk sync failure for network v77pwqrjlm80xenjyywyrgh0x: bulk sync failed on node oregon-00-810acb52336c: failed to send a TCP message during bulk sync: dial tcp 10.40.2.16:7946: i/o timeout"
Apr 20 19:38:34 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:34.080259808Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:36 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:36.080236031Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:38 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:38.080259391Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:39 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:39.080889518Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
Apr 20 19:38:41 nvirginia-00 dockerd[16957]: time="2017-04-20T19:38:41.080423694Z" level=info msg="memberlist: Suspect oregon-00-810acb52336c has failed, no acks received"
```

Machine B (node that joined the cluster without specifying advertise-addr - `docker swarm join --token SWMTKN-1-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-bbbbbbbbbbbbbbbbbbbbbbbbb X.X.X.X:2377`):

```
memberlist: Refuting a suspect message (from: nvirginia-00-43f6a8884d79)"
Apr 20 19:18:22 oregon-00 dockerd[32597]: time="2017-04-20T19:18:22.453453922Z" level=warning msg="memberlist: Refuting a suspect message (from: nvirginia-00-43f6a8884d79)"
Apr 20 19:18:25 oregon-00 dockerd[32597]: time="2017-04-20T19:18:25.467154338Z" level=warning msg="memberlist: Refuting a suspect message (from: nvirginia-00-43f6a8884d79)"
Apr 20 19:18:30 oregon-00 dockerd[32597]: time="2017-04-20T19:18:30.453525385Z" level=warning msg="memberlist: Refuting a suspect message (from: nvirginia-00-43f6a8884d79)"
Apr 20 19:18:33 oregon-00 dockerd[32597]: time="2017-04-20T19:18:33.453631756Z" level=warning msg="memberlist: Refuting a suspect message (from: nvirginia-00-43f6a8884d79)"
Apr 20 19:18:37 oregon-00 dockerd[32597]: time="2017-04-20T19:18:37.453614429Z" level=warning msg="memberlist: Refuting a suspect message (from: nvirginia-00-43f6a8884d79)"
Apr 20 19:18:40 oregon-00 dockerd[32597]: time="2017-04-20T19:18:40.453870232Z" level=warning msg="memberlist: Refuting a suspect message (from: nvirginia-00-43f6a8884d79)"
Apr 20 19:18:42 oregon-00 dockerd[32597]: time="2017-04-20T19:18:42.453479405Z" level=warning msg="memberlist: Refuting a suspect message (from: nvirginia-00-43f6a8884d79)"
```

This error is happening because machine B has published it's private address and
machine A is not being able to reach it. To fix this problem I had to use
`docker swarm join` with the `--advertise-addr` option, specifying the right
IP address.

