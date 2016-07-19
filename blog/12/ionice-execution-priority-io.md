/*
Title: ionice - Execution priority for IO
Description: Today I'm doing some very intensive IO usage with mysql. It's basically restoring dumps which includes lots of indexes. It's taking more than 6 hours and it makes it difficult to other processes to use the the IO too. What I discovered is that you can use the command `ionice`, which is similar to `nice` but (as the name suggests) for IO.
Date: 2012/05/20
*/

# ionice - Execution priority for IO

Today I'm doing some very intensive IO usage with mysql. It's basically
restoring dumps which includes lots of indexes. It's taking more than 6 hours
and it makes it difficult to other processes to use the the IO too.

What I discovered is that you can use the command `ionice`, which is similar to
`nice` but (as the name suggests) for IO.

The command `ionice -c 3 -p 1394` changes the priority of the process 1394 to
idle, which means it will only get IO access when no other process has
requested. The `-c` flag says the priority class of the project, from 0 to 3, 3
means idle.

After that command other processes (gui processes) started working much better.
