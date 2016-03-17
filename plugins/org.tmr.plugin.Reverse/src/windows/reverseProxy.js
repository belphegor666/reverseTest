cordova.commandProxy.add("Reverse",{
    reverseString:function(successCallback,errorCallback,strInput) {
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
    }
});