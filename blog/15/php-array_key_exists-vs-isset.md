/*
Title: PHP: array_key_exists vs. isset
Description: This post compares two functions that have very similar behaviour,
for arrays, but very difference performance.
Date: 2015/11/21
Tags: php,performance
*/

First, the basics. Let's say you want to verify if `$foo['bar']` is set. You
can use either functions:

    array_key_exists('bar', $foo);
    isset($foo['bar']);

The differences between those functions are:

1. `array_key_exists` is, as the name suggests, supposed to be used specifically
for arrays, while `isset` can work with other var types as well;
2. `isset` does not return true if the array value is null (i.e.: if you have
`$foo['bar'] = NULL`,  `array_key_exists($foo['bar'])` will return true while
`isset($foo['bar'])` will return false.
3. `isset` is MUCH FASTER than `array_key_exists` (about 5.6 x 1).

Bellow is the script to test all my claims:

    <?php

    $foo['bar'] = 'some value';

    echo "Similar behaviour: " . PHP_EOL; 
    var_dump(array_key_exists('bar', $foo)); // bool(true)
    var_dump(isset($foo['bar']));            // bool(true)

    echo "Differences:" . PHP_EOL;
    echo "1. isset works with other variables, besides arrays." . PHP_EOL;
    $foo = 'bar';
    var_dump(isset($foo)); // bool(true)

    echo "2. isset return false when value is null" . PHP_EOL;
    $foo = array();
    $foo['bar'] = null;
    var_dump(isset($foo['bar'])); // bool(false)

    echo "3. Speed" . PHP_EOL;

    $i = 1000000;
    $start = microtime(true);
    while ($i--) {
        array_key_exists('bar', $foo);
    }
    $finish = microtime(true);
    echo "array_key_exists: " . ($finish - $start) . " seconds " . PHP_EOL;

    $i = 1000000;
    $start = microtime(true);
    while ($i--) {
        isset($foo['bar']);
    }
    $finish = microtime(true);
    echo "isset: " . ($finish - $start) . " seconds " . PHP_EOL;
 
I am using PHP 5.6.13. When I ran that script on my computer, I've got the
following output:

    Similar behaviour: 
    bool(true)
    bool(true)
    Differences:
    1. isset works with other variables, besides arrays.
    bool(true)
    2. isset return false when value is null
    bool(false)
    3. Speed
    array_key_exists: 0.5188250541687 seconds 
    isset: 0.092790126800537 seconds 

