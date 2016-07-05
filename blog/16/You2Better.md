/*
Title: You2Better
Description: A Web server that let you easily download audio files.
Date: 2016/03/05
Tags: linux,web-development
*/

It's been a while that [Amuzi](http://amuzi.me) uses You2Better to stream audio
content from YouTube. I have recently upgraded the documentation on You2Better
to make it easier for other developers to take advantage of You2Better.

Setting it up
-------------

If you use Docker, you can set it up simply by running:

```bash
docker run -p 8888:8888 dmelo/you2better
```

It works because I have linked the GitHub repo
[dmelo/you2better](https://github.com/dmelo/you2better) to the docker image
on Docker Hub [dmelo/you2better](https://hub.docker.com/r/dmelo/you2better/).

When You2Better is running locally, you can download the audio files by
accessing URLs like:

```bash
wget http://localhost:8888/?youtubeid=meT2eqgDjiM -O PomplamooseMusic_Beat_it.m4a
```

Under the hoods
---------------

All that You2Better need is the YouTube ID of the video. It uses
[rg3/youtube-dl](https://github.com/rg3/youtube-dl) to get meta data about the
video, select the audio stream and download it.

When an URL like `http://localhost:8888/?youtubeid=meT2eqgDjiM` is requested,
You2Better starts downloading the file from YouTube and immediately stream it
to the client of the request. Also, it stores the file on cache, to speed up
next requests.

It supports [HTTP Range Requests](https://tools.ietf.org/html/rfc7233), which
is widely used by browsers to play audio streams.

