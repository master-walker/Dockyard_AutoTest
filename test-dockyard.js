var assert = require('assert');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var chrome = require('selenium-webdriver/chrome');
var test = require('selenium-webdriver/testing');
var config = require('./config/config');
var testData = require('./test-data/data');
var getDriver = require('./common/driver');
var CommonFunction = require('./common/common-function');
var LoginPage = require('./testcase/login-page');
var fs = require('fs');


test.describe('Test for dockyard-test', function () {

    this.timeout(9000000);

    test.before(function () {
        var comFunc = new CommonFunction();
        driver = comFunc.getDriver();
        this.comFunc = comFunc;

        // driver.manage().window().setPosition(150,30);
        // driver.manage().window().setSize(1100,700);
        driver.get(config.url);

    });

    test.after(function () {
        driver.quit();
    });

    test.it('#login', function () {

        //  this.timeout(90000);
        var loginPage = new LoginPage(driver);
        loginPage.login();
        driver.sleep(10000);
        this.comFunc.takeScreenshot(driver, 'loginpage.jpeg');

        this.comFunc.sendMail();


        //         var img = driver.findElement(By.tagName("img"));
        //         img.getAttribute("src").then(function(value) {
        //             assert.equal(value, '/images/index1.jpg');
        //         });

    });

});
