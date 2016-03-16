cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.tmr.plugin.Reverse/www/reverse.js",
        "id": "org.tmr.plugin.Reverse.reverse",
        "clobbers": [
            "reverse"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "org.tmr.plugin.Reverse": "0.0.1"
};
// BOTTOM OF METADATA
});