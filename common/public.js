/**
 * Created by bindo on 6/26/17.
 */

var webdriver = require('selenium-webdriver');


function ComFunc() {

}


ComFunc.prototype={

    getDriver:function() {
    driver=new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome()).build();
    return driver;
    }

};


module.exports=ComFunc;




