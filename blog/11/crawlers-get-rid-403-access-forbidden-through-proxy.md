/*
Title: Crawlers - Get rid of the "403 Access Forbidden" through PROXY
Description: Well, as I started out my research on my master degree, one of my first tasks was to get the abstract and citations information about thousands of scientific articles. I intend to use this data at the machine learning classes. There is a lot of systems that organizes articles. One of them is the ACM Portal. There you can perform really good searching. It's a very positive point for the system. What they doesn't seems to have is an API for automated searching.
Date: 2011/03/28
*/

Well, as I started out my research on my master degree, one of my first tasks was to get the abstract and citations information about thousands of scientific articles. I intend to use this data at the machine learning classes.

There is a lot of systems that organizes articles. One of them is the [ACM Portal](http://portal.acm.org). There you can perform really good searching. It's a very positive point for the system. What they doesn't seems to have is an API for automated searching.

Then, I had to write a script (on my favorite language, PHP) to help me out on my task. My first attempt failed badly. After something like 30 request, the site started giving the "403 Access Forbidden" message.

So, how would I get the 5000 articles information that I want? The answer is simples. **Proxy**. They can detect several requests from the same host but, apparently, they can't recognize when I distribute those requests over a few proxies.

First, I had to find my list of proxies. Sites like this [http://www.proxyvadi.net/21-03-2011-proxy-list-proxy-listesi-7.html](http://www.proxyvadi.net/21-03-2011-proxy-list-proxy-listesi-7.html) offers me just what I wanned. A GOOD list.

What the script does is simple, get a random proxy on the list and use it on the `file_get_contents` PHP function.

I really hate when I got to some blog/site/whatever and the guy brags about his findings but don't show any results. So, attached to this post you can find the code I did to perform my crawling.

Just one tip, handle threads in PHP is not something very simple/pleasant to do. Instead of parallelize the script, I just run it N times.

Please, write comments :)

[spider.php](/files/spider.php_.txt)

