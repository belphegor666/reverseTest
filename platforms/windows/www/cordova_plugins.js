cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.tmr.plugin.Reverse/www/reverse.js",
        "id": "org.tmr.plugin.Reverse.reverse",
        "pluginId": "org.tmr.plugin.Reverse",
        "clobbers": [
            "reverse"
        ]
    },
    {
        "file": "plugins/org.tmr.plugin.Reverse/src/windows/reverseProxy.js",
        "id": "org.tmr.plugin.Reverse.ReverseProxy",
        "pluginId": "org.tmr.plugin.Reverse",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});