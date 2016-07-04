/*
Title: Vim Tips
Description: All my friends know that I'm a big fun of Vim. I use vim to program in C++, Java, PHP, javascript and whatever language I have to. I do that because vim is simple and powerful. It supports regular expressions to make search and replace texts. It leads you to the function's main page with a simple shortcut.You can use Vim as a development environment for your projects. Instead of use one IDE for each language you program you can just use Vim.If you use vim for more than 1 year so you probably know most of the tips I'm giving here.
Date: 2009/11/29
*/

All my friends know that I'm a big fun of Vim. I use vim to program in C++, Java, PHP, javascript and whatever language I have to. I do that because vim is simple and powerful. It supports regular expressions to make search and replace texts. It leads you to the function's main page with a simple shortcut.

You can use Vim as a development environment for your projects. Instead of use one IDE for each language you program you can just use Vim.

If you use vim for more than 1 year so you probably know most of the tips I'm giving here.

###1 - Man page

When you are programing on c, php, perl.... your system's man page may have the documentation for the function of the language that you are using. On Debian based distribution, install the package manpages-dev.

    sudo apt-get install manpages-dev

Then, if you ponint the cursor over the word *printf* and press `<Alt>+K` vim will lead you the *printf* main page.

###2 - Tabes

Developers usually have to edit multiple files at once. Vim have tabs in a similar way as Firefox does. To open a new tabe you can just use:

    :tabe file.c

Use *Ctrl+Alt+PageUp* and *Ctrl+Alt+PageDown* to navigate on the tabs.

###3 - Vertical Split

Split is very useful. It let you seen two or more files on the same screen at once. Simple split is used on the same way 
