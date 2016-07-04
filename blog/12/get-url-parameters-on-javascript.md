/*
Title: Get URL parameters on Javascript
Description: In PHP there is the global var $_GET that contains a map of all the get parameters on the requested URL. I needed something similar to work with Javascript. I found this post...
Date: 2012/08/26
*/

In PHP there is the global var `$_GET` that contains a map of all the get
parameters on the requested URL. I needed something similar to work with
Javascript. I found this post [http://stackoverflow.com/questions/1403888/get-url-parameter-with-jquery](http://stackoverflow.com/questions/1403888/get-url-parameter-with-jquery)
that solved my problem.

The function that performs the job fairly well is as follows:

    function getURLParameter(name) {
        return decodeURIComponent(
            (location.search.match(RegExp("[?|&]"+name+'=(.+?)(&|$)'))||[,null])[1]
        );
    }

The only constraint is that when a parameter is not defined, the string `"null"` is returned, instead of the value `null`.
