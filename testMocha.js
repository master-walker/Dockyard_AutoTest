

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var chrome = require('selenium-webdriver/chrome');
var test = require('selenium-webdriver/testing');
var BasePage=require('./common/basepage');
var Elements=require('./Elements');
var config=require('./config/config');
var testData=require('./test_data/data');
var getDriver=require('./common/driver');
var ComFunc=require('./common/public');
var LoginPage=require('./testcase/loginPage');




test.describe('Test for dockyard-test', function() {
  this.timeout(9000000);

  test.before(function() {
    var comFunc=new ComFunc();
    driver=comFunc.getDriver();
    //driver = new webdriver.Builder()
    //        .withCapabilities(webdriver.Capabilities.chrome()).build();
             //.usingServer('http://127.0.0.1:4444/wd/hub')  //start the server in need!


    // driver.manage().window().setPosition(150,30);
    // driver.manage().window().setSize(1100,700);
    driver.get(config.url);

  });

  test.after(function() {
      driver.quit();
  });

test.it('#login', function () {

  //  this.timeout(90000);

    var loginPage=new LoginPage(driver);
    loginPage.login();

    ////loginPage elements
    //DyardLoginPage=Elements.DyardLoginPage;
    //var loginElements=[DyardLoginPage.email,DyardLoginPage.password,
    //    DyardLoginPage.signInBtn];
    ////input login data
    //loginData=testData.LoginData;
    //var loginData=[loginData.username,loginData.password];
    ////input data and click signin button
    //loginPage.submitData(loginElements,loginData);
    ////loginPage.inputData(loginElements,loginData);
    ////loginPage.clickElement(DyardLoginPage.signInBtn);


    driver.sleep(18000);



//         var img = driver.findElement(By.tagName("img"));
//         img.getAttribute("src").then(function(value) {
//             assert.equal(value, '/images/index1.jpg');
//         });

    });

 });
