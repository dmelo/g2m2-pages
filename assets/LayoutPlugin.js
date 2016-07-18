(function ($) {
    'use strict';

    var LayoutPlugin = function () {
    };


    LayoutPlugin.prototype.postHtmlCalc = function (html) {
        var header = "<div class=\"container\"> <div class=\"row\"> <div class=\"col-md-3\" role=\"complementary\"> <ul class=\"nav nav-pills nav-stacked span2\"> <li class=\"sidebar-brand\"> <a href=\"/\">Diogo Melo</a> </li>  <li><a href=\"/\">Welcome</a></li> <li><a href=\"/projects\">Projects</a></li> <li><a href=\"/me\">Me</a></li> <li><a href=\"/blog/\">Blog</a></li> <li class=\"ads\"><a href=\"http://mdownhost.me\" target=\"_blank\"><button>MDownHost.ME</button><p><small>CMS for developers</small></p></a></li> <li class=\"ads\"><a href=\"http://amuzi.me\" target=\"_blank\"><button>AMUZI</button><p><small>The open source way to enjoy music</small></p></a></li> </ul> </div> <div class=\"col-md-9\" role=\"main\">",
            footer = "</div> </div> <footer> <div class=\"container\"> <p id=\"legal\">Powered by <a target=\"_blank\" href=\"http://g2m2.net\">G2M2.net</a> - Copyright &copy; 2011-2016 Diogo Oliveira de Melo.</p> </div></footer>";

        return header + html + footer;
    };

    $.g2m2Plugins.layout = new LayoutPlugin();
}(jQuery));
