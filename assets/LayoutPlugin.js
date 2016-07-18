(function ($) {
    'use strict';

    var LayoutPlugin = function () {
    };


    LayoutPlugin.prototype.postHtmlCalc = function (html) {
        var header = "\n\
<div class=\"container\">\n\
    <div class=\"row\">\n\
        <ul class=\"nav nav-pills nav-stacked span2\">\n\
            <li class=\"sidebar-brand\">\n\
                <a href=\"/\">Diogo Melo</a>\n\
            </li>\n\
    \n\
            <li><a href=\"/\">Welcome</a></li>\n\
            <li><a href=\"/projects\">Projects</a></li>\n\
            <li><a href=\"/me\">Me</a></li>\n\
            <li><a href=\"/blog/\">Blog</a></li>\n\
            <li class=\"ads\"><a href=\"http://mdownhost.me\" target=\"_blank\"><button>MDownHost.ME</button><p><small>CMS for developers</small></p></a></li>\n\
            <li class=\"ads\"><a href=\"http://amuzi.me\" target=\"_blank\"><button>AMUZI</button><p><small>The open source way to enjoy music</small></p></a></li>\n\
        </ul>\n\
    </div>
",
            footer = "\n\
</div><footer>\n\
    <div class=\"container\">\n\
        <p id=\"legal\">Powered by <a target=\"_blank\" href=\"http://g2m2.net\">G2M2.net</a> - Copyright &copy; 2011-2016 Diogo Oliveira de Melo.</p>\n\
    </div>\n\
</footer>";

        return header + html + footer;
    };

    $.g2m2Plugins.layout = new LayoutPlugin();
}(jQuery));
