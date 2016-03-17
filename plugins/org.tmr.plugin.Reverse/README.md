# Cordova Reverse Plugin

Simple plugin that returns your string with the characters reversed.

This plugin provides a simple example demonstrating how Cordova plugins work.

## Using
Clone the plugin

    $ git clone https://github.com/belphegor666/cordova-plugin-reverse.git

Create a new Cordova Project

    $ cordova create reverse com.example.helloapp ReverseTest
    
Install the plugin

    $ cd reverse
    $ cordova plugin add ../cordova-plugin-reverse
    

Edit `www/js/index.js` and add the following code inside `onDeviceReady`

```js
    var success = function(message) {
        alert(message);
    }

    var failure = function() {
        alert("Error calling Reverse Plugin");
    }

    cordova.exec(success, failure,"Reverse", "reverseString", ["Hello World!"]);
```

Install Android platform

    cordova platform add android
    
Run the code

    cordova run 

## More Info

For more information on setting up Cordova see [the documentation](http://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html#The%20Command-Line%20Interface)

For more info on plugins see the [Plugin Development Guide](http://cordova.apache.org/docs/en/4.0.0/guide_hybrid_plugins_index.md.html#Plugin%20Development%20Guide)
