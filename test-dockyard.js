var assert = require('assert');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var chrome = require('selenium-webdriver/chrome');
var test = require('selenium-webdriver/testing');
var config = require('./config/config');
var CommonFunction = require('./common/common-function');
var LoginPage = require('./testcase/dockyard/login-page');
var fs = require('fs');
var Elements = require('./elements/dockyard-elements');


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
    //test.describe('test dockyard',function() {
    //
    //});

    test.it('#login', function () {

        //  this.timeout(90000);
        var loginPage = new LoginPage(driver);
        loginPage.login();
        driver.sleep(5000);

        //driver.findElement(By.xpath("//span[contains(@text,'Club Account')]")).click();
        //driver.findElement(By.xpath("//span[contains(@text,'History')]")).click();
        //driver.findElement(By.xpath("//span[contains(@text,'News')]")).click();
        loginPage.validate();
        driver.sleep(3000);

        //loginPage.clickElement(Elements.ClubAccountPage.clubAccountElement);

        //done()

        this.comFunc.takeScreenshot(driver, 'login.jpeg');




    });
    //test.it('#validate',function () {
        //this.comFunc.sendMail();

    //});

});
