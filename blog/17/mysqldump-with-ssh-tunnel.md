/*
Title: Mysqldump with SSH Tunnel
Description: How to make mysqldump work with an SSH tunner
Date: 2017/11/03
Tags: linux ssh mysql
*/

# Mysqldump with SSH Tunnel

Imagine this situation, you don't have direct access to a MySQL/MariaDB server.
To access the database you must first access a server (lets call it
`remote`) in order to access the MySQL. The `remote` server can't be used to
host the full dump of the database because it doesn't have enough free storage.
Moreover, this is task you would want to run from time to time therefore, you
want to make a bash script out of it.

I've painted a picture where it would be desirable to get the SSH tunnel in
place instead of running mysqldump remotely and then copy the dump file to the
final destination.

The straightforward approach would be to make the tunnel:

```
ssh -f -N -L 3306:localhost:3306 user@remote
```

Assuming that you SSH public key is on remote, you won't be prompted for
password. The tunnel will open then you will be able to run mysqldump:

```
mysqldump -u user -h localhost --databases myprojectdatabase > dump.sql
```

At that point `mysqldump` will complain that a socket on `/var/run` doesn't
exits and you won't be able to `mysqldump`:

```
mysqldump: Got error: 2002: "Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (2 "No such file or directory")" when trying to connect
```

This is happening because `mysqldump` is trying to open a local socket. To
prevent this, you have to open the tunnel using `127.0.0.1` instead of
`localhost`:

```
ssh -f -N -L 3306:127.0.0.1:3306 user@remote
mysqldump -u user -h 127.0.0.1 --databases myprojectdatabase > dump.sql
```

Although it works, at the time you want to make a bash script with this, you will
run into another problem. Which is, how to kill the tunnel after `mysqldump`
have done its job. The `-f` parameter on the tunnel is to tell SSH to fork the
process, `wait` won't work. If you try to open it on background, you won't be
able to know when the tunnel is open, before issuing the `mysqldump` command.

The solution is to keep using the `-f` flag and retrieve the PID:

```bash
#!/bin/bash

ssh -f -o ExitOnForwardFailure=yes -N -L 3306:127.0.0.1:3306 user@remote
PID=$(lsof -t -i @127.0.0.1:3306)
mysqldump --compress -u root -h 127.0.0.1 --databases myprojectdatabase > dump.sql
kill $PID
```

Done! This should work perfectly.
