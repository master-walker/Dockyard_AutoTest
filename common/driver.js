/**
 * Created by bindo on 6/26/17.
 */

var webdriver=require('selenium-webdriver');

var getDriver=function() {
  //if (driver) {
  //    return driver;
  //}
  //else {
      driver=new webdriver.Builder()
          .withCapabilities(webdriver.Capabilities.chrome()).build();
      return driver;
  //}
};


module.exports=getDriver;
//var buildDriver=function() {
//
//};


