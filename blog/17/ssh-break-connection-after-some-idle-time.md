/*
Title: SSH Break Connection After Some Idle Time
Description: How to avoid losing connection due to connection timeout
Date: 2017/03/28
Tags: linux,ssh
*/

For some reason, while I'm at work, if I leave a SSH connection sitting idle for
a few minutes, I lose the connection. It get stuck, whatever I type, doesn't
show on the remote shell. To fix this problem, I have set two variables, on my
`.ssh/config` file:

```
Host *
  ServerAliveInterval 30
  ServerAliveCountMax 5
```

It causes the SSH to send dummy/ping packets every 30 seconds. If the connection
is unstable and the server doesn't repond the packet, it will retry up to 5
times. Only after 5 consecutive failed attempts, it will give up the connection.
