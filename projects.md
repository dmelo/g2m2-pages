/*
Title: Projects
Description: 
PageType: page
PageTitle: Projects
*/

# Projects

My profile on GitHub is [dmelo](https://github.com/dmelo). Whenever I start an
open project I version it there. Anyway, this page have the projects I am the
most enthusiastic about.


[Amuzi](http://amuzi.me)
------------------------

The project is hosted at [amuzi.me](http://amuzi.me). It allows people to
listen to music. The project is open source, the code is on GitHub
[dmelo/amuzi](https://github.com/dmelo/amuzi.git).

It was developed using MariaDB, PHP, Zend Framework v1, jQuery. It also rely
on the project [jPlayer](http://jplayer.org/). Amuzi interacts with Youtube and
[last.fm](http://www.last.fm/) to get music content and link to data about the
music, respectively.

[You2Better](https://github.com/dmelo/you2better)
-------------------------------------------------

Instead of build the streaming system within Amuzi, I did it as a separate
project. The scope of You2Better is very well defined and simple: provide an
entrypoint to stream content from YouTube. By developing it on a different
project, I enable other developers to use it. They can just install You2Better
and use it, there is no need to dive into Amuzi. Moreover, it is easier to
maintain the code. 

Refer to the [You2Better](/blog/16/You2Better) post or the GitHub page
[dmelo/you2better](https://github.com/dmelo/you2better) for further information.

[lastfm-autocomplete](https://github.com/dmelo/lastfm-autocomplete)
-------------------------------------------------------------------

This is another spin off project from Amuzi. The project needed a search box,
preferably with autocomplete feature. At first, Amuzi was getting the results
from [amuzi_search](https://github.com/dmelo/amuzi_search), which is an
implementation of Suffix Arrays, that I have developed.

After some problems, I felt the need to change the autocomplete and
lastfm-autocomplete jQuery plugin came up. It uses CORS to query Last.fm
directly. You can see the results on the [Amuzi](http://amuzi.me) site or on
the [lastfm-autocopmlete live demo](http://diogomelo.net/lastfm-autocomplete/).

The code is available on GitHub
[dmelo/lastfm-autocomplete](https://github.com/dmelo/lastfm-autocomplete).


[MDownHost.Me](http://mdownhost.me)
-----------------------------------

Some time ago I was using Drupal to keep this site/blog. Drupal is awesome,
BUT... I like things simple and I'm a software developer, which means I proficient
with tools like git, vim and markdown. I thought it would be much better if I were
able to version the content of my site using git, edit it using vim and pushing
the content live also using git. Markdown is intuitive enough.

While I was buiding the infra for that idea to work, I decided to make it so
that others could just sign up and have their own environment, same way I have.
Considering I already like to automate most of the things I do, I was smooth
and fun to get it working.

The project is at [MDownHost.Me](http://mdownhost.me). It is entirely free.


[VSWM](/vswm)
-------------

In 2005 I've become a Linux guy, finally joined the light. I have learned then,
that you are better off knowing how to do things using the terminal, command
line. The advantages?

- if you know the commands it is easy to automate
- when connecting to remote computers, you can just use SSH, the network 
bandwidth required is way lower than transfering the graphical env;

Controlling the network connection is no exception. But regarding network, there
is something more. I wanted something that doesn't keep working on my back. I
often use custom routing rules. Having NetworkManager re-checking and
re-connecting on my behalf messed up my custom rules.

Moreover, the commands to stablish a wireless connection are tedious. The
solution was to build VSWM -- Very Simple Wireless Manager. It reads the file
/etc/vswm.cfg for the wifi networks I known, perform a scan and connect to
the first match. It does that and only that.

The project is open source and also available on GitHub
[dmelo/vswm](https://github.com/dmelo/vswm.git).


[USPDS](https://github.com/dmelo/uspds.git)
-------------------------------------------

During my undergraduate research, I have developed a robot soccer simulator for
the MiroSot category with 3 players. The project is open source. It was first
distributed on the [USPDroids site](http://uspds.sourceforge.net/simulacao.html).
Later on I versioned with Git and put it on GitHub
[dmelo/uspds](https://github.com/dmelo/uspds.git). There is also a video of the
simulator running on Yoube [USPDS](https://www.youtube.com/watch?v=x0KvdyENjo0).

I remember I had a really nice time developing the simulator. It happend around
2007 and 2008. I was young and naive. Instead of looking for a physics engine
to use, I decided to build everything from the ground up. Altough that was 
foolish, I believe it was a great exercise. It got me envolved with a lot of
code and I've got to interact with researchers from the physics department. That
was when I started to admire the way physicists think.

After I left the USPDroids group, they worked on a version 2 of the USPDS, to
improve usability mainly. You can see it working on the YouTube video
[USPDroids Soccer Simulator 2](https://www.youtube.com/watch?v=lcdk0_Lv2fc).
