/*
Title: Solving "You have no authority to access this router" on TP-Link router
Description: How to overcome the "You have no authority to access this router"
message shown by the TP-Link router.
Date: 2015/09/02
Tags: linux
*/


Today I have stumbled upon a a funny problem. I'm working on an equipment that
is a couple of hundred miles away. It sits under a TP-Link router, model
TL-MR3220 to be more precise. I accesss my equipment through a VPN so I rarely
have have to deal with the router. Today was not one of those days.

There was a problem regarding the ISP and, long story short, I had to access
the router's web admin interface. Seems like a good task, just start an SSH
tunnel from my laptop to port 80 of the router passing through my equipament.
Something like:

    ssh -N -f -L 3228:192.168.15.228:80 dmelo@10.20.2.1

Then I would be able to access the admin interface on the address
`http://localhost:3228`. Unfortunately, after the auth, I see almost all the
frames showing the same message "You have no authority to access this router!".

At first, I thought it was a firmware problem. But then the problem would be
even worse. How would I remotely update the firwmare? I wold have have to do
a road trip.

Looking for alternative scenarios, googling around, I've found someone who had
the same problem `http://forum.tp-link.com/showthread.php?74815-You-have-no-authority-to-access-this-router!`

One of the comments clarify that the probme occurs because the router try to
assess the `referer` parameter. Which it expects to be on the same network as
the router.

It can be solved by modifying the `referer` request header. The forum suggests
using the RefControl addon for Firefox. But I only had luck using the `Referer
Control` extesion for chrome. After setting the referer header for router
address on the local network (in my case http://192.168.15.228), it worked.
