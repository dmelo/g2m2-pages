(function ($) {
    'use strict';

    var LayoutPlugin = function () {
    };


    LayoutPlugin.prototype.postHtmlCalc = function (html) {
        var linkPrefix = window.location.pathname.match(/^\/g2m2-pages/) ?
                '/g2m2-pages' : '',
            header = "<div class=\"row\"> <div class=\"col-md-3\" role=\"complementary\"> <ul class=\"nav nav-pills nav-stacked span2\"> <li class=\"sidebar-brand\"> <a href=\"" + linkPrefix + "/\"><h1>Diogo Melo</h1></a> </li>",
            footer = "<footer class=\"row\"> <div class=\"container\"> <p id=\"legal\">Powered by <a target=\"_blank\" href=\"http://g2m2.net\">G2M2.net</a> - Copyright &copy; 2011-2016 Diogo Oliveira de Melo.</p> </div></footer> </div> </div>",
            items = [
                { link: linkPrefix + "/me", text: "Me" },
                { link: linkPrefix + "/blog", text: "Blog" },
                { link: linkPrefix + "/projects", text: "Projects" }
            ],
            ads = [
                { link: "http://g2m2.net", text: "G2M2.net", desc: "Flat Markdown GitHub CMS" },
                { link: "http://amuzi.me", text: "Amuzi", desc: "The open source way to enjoy music" }
            ],
            i;

        for (i in items) {
            header += "<li><a type=\"button\" class=\"btn btn-default\" href=\"" + items[i].link + "\">" + items[i].text + "</a></li>";
        }

        for (i in ads) {
            header += "<li class=\"ads\"><a href=\"" + ads[i].link + "\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary\">" + ads[i].text + "</button><p><small>" + ads[i].desc + "</small></p></a></li>";
        }

        header += "</ul> </div> <div class=\"col-md-9\" role=\"main\">";

        return header + html + footer;
    };

    $.g2m2Plugins.layout = new LayoutPlugin();
}(jQuery));
