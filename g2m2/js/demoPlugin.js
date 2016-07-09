(function ($) {
    var demoPlugin = function() {
    };

    demoPlugin.prototype.postGetConfig = function() {
        console.log("postGetConfig");
    }

    $.g2m2Plugins["demo"] = new demoPlugin();
}(jQuery));
