/*
Title: Simple Benchmark with Node.js against Apache
Description: Today I did a very basic benchmark and the result was impressive. For this benchmark I'm only interested on the overhead each web server creates to establish the connection, process the request and send the response. First, a simple hello world program on node.js...
Date: 2012/02/26
*/

Today I did a very basic benchmark and the result was impressive. For this benchmark I'm only interested on the overhead each web server creates to establish the connection, process the request and send the response.

First, a simple hello world program on node.js:

    var http = require('http');

    var s = http.createServer(function(req, res) {
        res.writeHead(200, { 'content-type': 'text/plain'});
        res.end('hello world\n');
    });

    s.listen(8000);

After run `node a.js` the result is available using the url [http://localhost:8000](http://localhost:8000)

For Apache a simple html file with nothing the the string `"hello world"` on it. The file is positioned on `/var/www` and can be accessed using the url [http://localhost/a.html](http://localhost/a.html).

I've used **ab** to run the benchmark. To be more specific, the command `ab -n 1000 -c 100 URL`. Here is the log for Apache:



    This is ApacheBench, Version 2.3 <$Revision: 655654 $>
    Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
    Licensed to The Apache Software Foundation, http://www.apache.org/

    Benchmarking localhost (be patient)
    Completed 1000 requests
    Completed 2000 requests
    Completed 3000 requests
    Completed 4000 requests
    Completed 5000 requests
    Completed 6000 requests
    Completed 7000 requests
    Completed 8000 requests
    Completed 9000 requests
    Completed 10000 requests
    Finished 10000 requests


    Server Software:        Apache/2.2.20
    Server Hostname:        localhost
    Server Port:            80

    Document Path:          /a.html
    Document Length:        12 bytes

    Concurrency Level:      100
    Time taken for tests:   2.642 seconds
    Complete requests:      10000
    Failed requests:        0
    Write errors:           0
    Total transferred:      2860000 bytes
    HTML transferred:       120000 bytes
    Requests per second:    3785.48 [#/sec] (mean)
    Time per request:       26.417 [ms] (mean)
    Time per request:       0.264 [ms] (mean, across all concurrent requests)
    Transfer rate:          1057.27 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   0.5      0       9
    Processing:     4   26   3.2     26      55
    Waiting:        4   26   2.7     26      48
    Total:         10   26   3.0     26      55

    Percentage of the requests served within a certain time (ms)
      50%     26
      66%     27
      75%     27
      80%     28
      90%     28
      95%     30
      98%     34
      99%     37
     100%     55 (longest request)

And here is the output for Nodejs:

    This is ApacheBench, Version 2.3 <$Revision: 655654 $>
    Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
    Licensed to The Apache Software Foundation, http://www.apache.org/

    Benchmarking localhost (be patient)
    Completed 1000 requests
    Completed 2000 requests
    Completed 3000 requests
    Completed 4000 requests
    Completed 5000 requests
    Completed 6000 requests
    Completed 7000 requests
    Completed 8000 requests
    Completed 9000 requests
    Completed 10000 requests
    Finished 10000 requests


    Server Software:        
    Server Hostname:        localhost
    Server Port:            8000

    Document Path:          /
    Document Length:        12 bytes

    Concurrency Level:      100
    Time taken for tests:   1.630 seconds
    Complete requests:      10000
    Failed requests:        0
    Write errors:           0
    Total transferred:      760000 bytes
    HTML transferred:       120000 bytes
    Requests per second:    6134.36 [#/sec] (mean)
    Time per request:       16.302 [ms] (mean)
    Time per request:       0.163 [ms] (mean, across all concurrent requests)
    Transfer rate:          455.28 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   1.0      0      10
    Processing:     1   16   8.0     15      49
    Waiting:        0   16   8.0     15      49
    Total:          1   16   7.9     16      50

    Percentage of the requests served within a certain time (ms)
      50%     16
      66%     20
      75%     22
      80%     23
      90%     26
      95%     29
      98%     33
      99%     35
     100%     50 (longest request)

As the logs shows, Apache takes about 10ms more time to process each request. Also on the factors longest request and +/- sd (variation) Nodejs beats Apache.

Of course, there is lot a lot more involved on this benchmark, like configuration options for each web server, possible processes not related to the benchmark being scheduled by my kernel and so on. But the truth is that today Nodejs won the battle agains Apache.
