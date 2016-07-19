/*
Title: List resources being used by process
Description: List resources, like files and socked that are being used, openned, by a process
Date: 2016/03/10
Tags: linux
*/

# List resources being used by process

I've been looking for this for a while. I wanted a way to list all files openned
by a process. The answare is way simpler than I imagined:

```bash
lsof -p PID
```

where `PID` is the process ID. It gives not only the files openned but sockets,
resources and directories.
