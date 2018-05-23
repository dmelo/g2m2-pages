# Create systemctl Services

Once you wrote your file.service file, you have to copy it to
`/lib/systemd/system`, create a symbolic link to /etc/systemd/system and reload
the daemon:

```
cp file.service /lib/systemd/system/
ln -s /lib/systemd/system/file.service /etc/systemd/system/file.service
systemctl daemon-reload
```

After those steps, you can use your new service:

```
systemctl enable file.service
systemctl start file.service
```
