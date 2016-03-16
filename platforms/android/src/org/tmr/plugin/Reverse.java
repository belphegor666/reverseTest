package org.tmr.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * Created by europa on 16/03/16.
 */
public class Reverse  extends CordovaPlugin{

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("reverseString".equals(action)) {
            //this.beep(args.getLong(0));
            callbackContext.success(this.reverseString(args.getString(0)));
            return true;
        }
        return false;  // Returning false results in a "MethodNotFound" error.
    }

    private String reverseString (String inStr) {
        //TODO implement reverse routine
        String outStr = "";
        if (inStr != null && !inStr.equals("")) {
            for(int i=inStr.length(); i>0; i--) {
                outStr += inStr.charAt(i-1);
            }
        }
        return outStr;
    }
}
