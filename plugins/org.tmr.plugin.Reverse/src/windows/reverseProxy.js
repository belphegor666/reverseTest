cordova.commandProxy.add("Reverse",{
    reverseString:function(successCallback,errorCallback,strInput) {
        var res = ReverseRuntimeComponent.ReversePluginRT.reverse(strInput);
        if(res.indexOf("Error") == 0) {
            errorCallback(res);
        }
        else {
            successCallback("Native: "+res);
        }
        /* Pure WinJS native JavaScript version
        if(!strInput || !strInput.length) {
            errorCallback("Error, something was wrong with the input string. =>" + strInput);
        }
        else {
            var inStrObj = new String(strInput);
            var outStrObj = new String("");
            for(var i=inStrObj.length; i>0; i--) {
                outStrObj += inStrObj.charAt(i-1);
            }
            successCallback(outStrObj);
        }
        */
    }
});