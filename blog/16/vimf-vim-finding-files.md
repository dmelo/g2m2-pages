/*
Title: vimf - vim finding files
Description: shortcut to have vim finding files, without the need to specify the whole path
Date: 2016/02/12
Tags: linux,vim
*/

# vimf - vim finding files

Did you ever got bored of calling vim with a huge path? It can happen pretty often,
specially when programming with Java. The command would go something like this:

    vim src/main/java/org/company/client/project/subproject/module/base/Entity.java

Even with the autocomplete feature provided by bash this is a very tedious task.
To help me with this, I have created a function, named `vimf`, that interpret the second argument as
the file name, not the full path. I would open the `Entity.java` just by typing:

    vimf Entity.java

To make it work nicely, I have appended my `~/.bashrc` with the funciton definition:

```bash
function vimf ()
{
    vim `find -name $@`
}

```

*Update [2016-03-09]*: I also added an alias do `f='find -name'` to save a few
keystrokes inside vim, to run commands linke `tabe 'f Entity.java'`. Append
~/.bashrc with the following:

```bash
alias f='find -name'
```
