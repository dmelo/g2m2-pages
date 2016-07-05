/*
Title: Fedora - Find package that provides a binary file
Description: 
Date: 2015/10/07
Tags: linux,fedora
*/

On RPM base systems, you can use the following command to discover which package
provides binary installed on your machine:

    rpm -qf `which find`

Replacing `find` by the name of the binary you want to find.
