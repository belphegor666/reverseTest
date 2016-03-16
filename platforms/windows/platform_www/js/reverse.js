// exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

var reverse = function (message) {

   cordova.exec(
      successCallback,
      failFunction,
      "org.tmr.plugin.Reverse",
      "reverseString",
      [message]
   )
}

var successCallback = function(winParam) {
    alert("success: "+winParam);
}

var failFunction = function (error) {
    alert("failure: "+error);
}
