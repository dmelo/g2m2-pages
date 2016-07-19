(function ($) {
    'use strict';

    var LayoutPlugin = function () {
    };


    LayoutPlugin.prototype.postHtmlCalc = function (html) {
        var header = "<div class=\"container\"> <div class=\"row\"> <div class=\"col-md-3\" role=\"complementary\"> <ul class=\"nav nav-pills nav-stacked span2\"> <li class=\"sidebar-brand\"> <a href=\"/\"><h1>Diogo Melo</h1></a> </li>",
            footer = "</div> </div> <footer class=\"row\"> <div class=\"container\"> <p id=\"legal\">Powered by <a target=\"_blank\" href=\"http://g2m2.net\">G2M2.net</a> - Copyright &copy; 2011-2016 Diogo Oliveira de Melo.</p> </div></footer>",
            items = [
                { link: "/projects", text: "Projects" },
                { link: "/me", text: "Me" },
                { link: "/blog", text: "Blog" }
            ],
            ads = [
                { link: "http://g2m2.net", text: "G2M2.net", desc: "Flat Markdown GitHub CMS" },
                { link: "http://amuzi.me", text: "Amuzi", desc: "The open source way to enjoy music" }
            ],
            i;

        for (i in items) {
            header += "<li><a type=\"button\" class=\"btn btn-default\" href=\"" + items[i].link + ">" + items[i].text + "</a></li>";
        }

        for (i in ads) {
            header += "<li class=\"ads\"><a href=\"" + ads[i].link + "\" target=\"_blank\"><button type=\"button\" class=\"btn btn-primary\">" + ads[i].text + "</button><p><small>" + ads[i].desc + "</small></p></a></li>";
        }

        header += "</ul> </div> <div class=\"col-md-9\" role=\"main\">";

        return header + html + footer;
    };

    $.g2m2Plugins.layout = new LayoutPlugin();
}(jQuery));
