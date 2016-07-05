/*
Title: Use sed to replace newline
Description: Sed processes line by line, therefore special syntax is needed to
replace newline char.
Date: 2015/10/20
Tags: linux
*/

Sed processes line by line, therefore special syntax is needed to
replace newline char. For some darn reason, I keep forgetting this special
syntax. Here is the command to replace newline by a comma:

    sed ':a;N;$!ba;s/\n/,/g'

I've got this code from [this stackoverflow question](http://stackoverflow.com/questions/1251999/how-can-i-replace-a-newline-n-using-sed).


*Update [2015-11-16]*: If the idea is to drop / skip empty lines, you can use grep:

    grep -v -e "^$"

Careful not to be fooled white chars. If you also want to drop lines that have
only white chars you can use:

    grep -v -e '^[[:space:]]*$'

The above tip, I've got from [another stackoverflow question](http://stackoverflow.com/questions/3432555/remove-blank-lines-with-grep).
