/*
Title: Command line httpd markdown server
Description: Command line httpd markdown server
Date: 2016/08/28
Tags: markdown,web-development
*/

# Command line httpd markdown server

I like keeping notes in markdown format, because it is a format that is easy to
understant, fast to abstract in your mind. Then I needed to send those notes to
a coworker and I wanted to send the pretty version. The question I asked myself
was: what is the easiest way to view that document, in a way I can copy & paste
to an email?

The answer I found was [grip](https://github.com/joeyespo/grip). You can install
it with `pip install grip` and to make it serve a md file just `grip
path/to/that/file.md`. It will tell you the address you should browse and that
is it.
