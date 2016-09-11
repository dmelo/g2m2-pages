/*
Title: Dicno.net
Description: Today's post is about dicno.net. As the background of this blog suggests, I'm a brazilian guy, and a very patriot one. My english sucks but I like to write my posts in english. This way all my friends can read it D
Date: 2009/12/26
*/

# Dicno.net

Today's post is about [dicno.net](http://dicno.net).

As the background of this blog suggests, I'm a brazilian guy, and a very patriot one. My english sucks but I like to write my posts in english. This way all my friends can read it :D

The subject of this post is my very new web system. A dictionary for brazilian people names, [dicno.net](http://dicno.net). The web system is a small mashup. There is data from four different sources, which (what i like to think) is a very interesting mixing. The idea of the site is to provide the maximum information possible about somebody's name.

There are photos from Google, meaning of the name from [dicionariodenomesproprios.com.br](http://dicionariodenomesproprios.com.br), lucky of the day from Orkut and people who have the same name from Wikipedia.

This is a technical post. I present here the technical background that I'm using on [dicno.net](http://dicno.net).

###URLs

Each name have a url. The latin charset includes a few accents on letters. Those accents appears on a lot of names like "Joăo", "José" and so on. There is also some names that are written on both ways (with or without graphic signs). To avoid use more than one URL to the same name, names with accent are converted into the equivalent name without accent. "Joăo" is transformed into "Joao".

The web system is using [Zend Framework](http://framework.zend.com/). I changed the way that Zend reads the URL so that he considers the first string, after the root path, the name that the user is trying to access. This way we keep the URL very short. Joăo's page is at [ttp://dicno.net/Joao](http://dicno.net/Joao).


###The Mashup Part

Google images comes through [Google AJAX Search API](http://code.google.com/apis/ajaxsearch/). Which means the images that appears on every pages are loaded dynamically.

Apart of the Google images, every content comes from server side, they are not loaded dynamically. This measure is for SEO purposes. If the site was populating the all the content using AJAX, then search engines wouldn't find any content. As far as I know those search engines doesn't run the Javascript to see if there is more information.

The site [dicionariodenomesproprios.com.br](http://www.dicionariodenomesproprios.com.br) does not have an API, for foreign sites to access it's content. So, I'm using [Zend\_Dom\_Query](http://framework.zend.com/manual/en/zend.dom.query.html) to parse the site's content and get the information  I want.

The content from [Wikipedia](http://en.wikipedia.org) comes through a very elegant way, the [DBpedia](http://dbpedia.org). DBpedia is a very interesting effort to make the internet (or at least the Wikipedia) accessible by it's semantic. When you try to access somebody's name, the server request the list of people who have the same name.

The lucky phrases is the most shameless copy and paste I ever did. No big deal. Just copy a few phrases into a mysql table and that's it.

###Performance

If a user have certain delay while accessing a page that have it's content stored on all together on the same server, imagine what happens when that user access a page which content's is spread over several sources, on different servers across the world. The total time to access it is the time between the browser and dicno plus the most long delay between all the foreign sources and dicno (considering they are accessed in parallel).

There is a solution to make it incredibly faster. The miracle word is CACHE. The meaning of the name that a user is searching doesn't not change, but my sources could update they contents. So, a one month cache sounds quite well. The google images is the unique foreign source that is not cached.

Every time that a user search somebody's name, the server search for the cache files (I'm using [Zend_Cache](http://framework.zend.com/manual/en/zend.cache.html) for that). On cache miss cases, the server consult the foreign sources and store the results on cache.

The system also presents the top names (the most visited names) and, on each page, suggests names that might be interest for the user. On both cases the results are also stored on cache. The list of names is stored on a MySQL database and I want to avoid access it because the communication between the hosting server and the MySQL database is slow.

###Conclusion

I did [Dicno](http://dicno.net) because I was looking for some fun and I wanned to start and end a project on the same weekend. Besides the cache implementation and this post, everything was done in two lazy days.

[Dicno](http://dicno.net) is fast but there are some minor details that could make it even faster. I plan to work on it later. So far, I'm very pleased with the results.
