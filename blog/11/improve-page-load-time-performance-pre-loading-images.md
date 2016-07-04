/*
Title: Improve Page Load Time Performance by Pre-Loading Images
Description: It's very common to have websites that includes images on the layout. Let's go through how the browser works. First, it downloads the HTML, which references the CSS files. Then it downloads the CSS files in parallel. After interpret the CSS files, it starts downloading the objects referenced by those CSS files.
Date: 2011/07/20
*/

It's very common to have websites that includes images on the layout. Let's go through how the browser works. First, it downloads the HTML, which references the CSS files. Then it downloads the CSS files in parallel. After interpret the CSS files, it starts downloading the objects referenced by those CSS files.

It means that the images are the last objects to be loaded. But what if we reference the images needed on the HTML code (the first file loaded)? Then the image files would be loaded in parallel with the CSS. Well, that's the trick, add references for the images you use on the HTML so that it can be downloaded earlier.

A way to reference images without change anything on the page's layout is to put IMG tags with style setting the element to be invisible, just like this: `<img src="image.jpg" style="display: none"/>`.
