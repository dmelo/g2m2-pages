/*
Title: grep -- Binary file (standard input) matches
Description: grep -- Binary file (standard input) matches
Date: 2015/03/15
Tags: linux
*/

When grep finds your match on a binary input, instead of printing the matches, it will just tell you that there was a hit.

If you want to see the matches, uses the option "-a". Example:

    cat file | grep -a
