/*
Title: prunepath - a way to prune path to a threshold size
Description: a shell script that removes files from a path until it's size reaches a given threashold.
Date: 2016/04/02
Tags: linux,sh
*/

# prunepath - a way to prune path to a threshold size

When using [you2better](https://github.com/dmelo/you2better) the system will
download the stream into cache files. The systema have no options to specify
the maximum size that that cache dir can have. I could either implement that
on you2better, or create a new (small) script for this task. The advantage of
creating it as a separate project is that I can use it elsewhere.

[prunepath](https://github.com/dmelo/prunepath) is a shell script that takes two
arguments DIR and SIZELIMIT. The first, can be a relative path and must point to
a directory. SIZELIMIT specifies a size threshold. The script will keep deleting
files on the specified path until the size is below the threshold.

I'm using this with crond the amuzi.me server to keep the cache size of the
you2better under control.
