(function ($) {
    var demoPlugin = function() {
    };

    demoPlugin.prototype.postLoadConfig = function(config) {
        console.log("postLoadConfig");

        return config;
    }

    $.g2m2Plugins["demo"] = new demoPlugin();
}(jQuery));
