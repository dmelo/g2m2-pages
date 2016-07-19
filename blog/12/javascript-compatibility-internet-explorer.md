/*
Title: JavaScript - Compatibility with Internet Explorer
Description: <p>There is a few javascript functions that are very useful but are not implemented on IE Function.bind, String.trim, Array.indexOf, Array.lastIndexOf and a few more... I found an script on stackoverflow (lost the link) that tests it those functions exists and, if it doesn't, implement them. Also, as I use console.log for debugging, IE kept claiming console.log doesn't exists, so I added that too (dummy version, just to stop it from complaining).
Date: 2012/12/30
*/

# JavaScript - Compatibility with Internet Explorer

There is a few javascript functions that are very useful but are not implemented on IE: Function.bind, String.trim, Array.indexOf, Array.lastIndexOf and a few more...



I found an script on stackoverflow (lost the link) that tests it those functions exists and, if it doesn't, implement them. Also, as I use console.log for debugging, IE kept claiming console.log doesn't exists, so I added that too (dummy version, just to stop it from complaining).



Here is the script gist [ie-compatibility.js](https://gist.github.com/dmelo/dbbfbc7ea11bad41c3e2)


    'use strict';

    // Add ECMA262-5 method binding if not supported natively
    //
    if (!('bind' in Function.prototype)) {
        Function.prototype.bind= function(owner) {
            var that= this;
            if (arguments.length<=1) {
                return function() {
                    return that.apply(owner, arguments);
                };
            } else {
                var args= Array.prototype.slice.call(arguments, 1);
                return function() {
                    return that.apply(owner, arguments.length===0?
                        args : args.concat(Array.prototype.slice.call(arguments)));
                };
            }
        };
    }

    // Add ECMA262-5 string trim if not supported natively
    //
    if (!('trim' in String.prototype)) {
        String.prototype.trim= function() {
            return this.replace(/^\s+/, '').replace(/\s+$/, '');
        };
    }

    // Add ECMA262-5 Array methods if not supported natively
    //
    if (!('indexOf' in Array.prototype)) {
        Array.prototype.indexOf= function(find, i) {
            if (i===undefined) i= 0;
            if (i<0) i+= this.length;
            if (i<0) i= 0;
            for (var n= this.length; i<n; i++)
                if (i in this && this[i]===find)
                    return i;
            return -1;
        };
    }
    if (!('lastIndexOf' in Array.prototype)) {
        Array.prototype.lastIndexOf= function(find, i) {
            if (i===undefined) i= this.length-1;
            if (i<0) i+= this.length;
            if (i>this.length-1) i= this.length-1;
            for (i++; i-->0;) 
                if (i in this && this[i]===find)
                    return i;
            return -1;
        };
    }
    if (!('map' in Array.prototype)) {
        Array.prototype.map= function(mapper, that) {
            var other= new Array(this.length);
            for (var i= 0, n= this.length; i<n; i++)
                if (i in this)
                    other[i]= mapper.call(that, this[i], i, this);
            return other;
        };
    }
    if (!('filter' in Array.prototype)) {
        Array.prototype.filter= function(filter, that) {
            var other= [], v;
            for (var i=0, n= this.length; i<n; i++) {
                if (i in this && filter.call(that, v= this[i], i, this))
                    other.push(v);
            }
            return other;

        };
    }
    if (!('every' in Array.prototype)) {
        Array.prototype.every= function(tester, that) {
            for (var i= 0, n= this.length; i<n; i++)
                if (i in this && !tester.call(that, this[i], i, this))
                    return false;
            return true;
        };
    }
    if (!('some' in Array.prototype)) {
        Array.prototype.some= function(tester, that) {
            for (var i= 0, n= this.length; i<n; i++)
                if (i in this && tester.call(that, this[i], i, this))
                    return true;
            return false;
        };
    }

    if (!('console' in window)) {
        window.console = function() {};
        window.console.log = function() {};
    }
