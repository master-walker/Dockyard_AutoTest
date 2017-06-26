

var assert = require('assert');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var chrome = require('selenium-webdriver/chrome');
var test = require('selenium-webdriver/testing');
var basepage=require('./common/basepage');
var Elements=require('./Elements');


test.describe('Test for dockyard-test', function() {
  this.timeout(60000);

  test.before(function() {
    driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            // .usingServer('http://127.0.0.1:4444/wd/hub')  //start the server in need!
            .build();

    // driver.manage().window().setPosition(150,30);
    // driver.manage().window().setSize(1100,700);
    driver.get("https://www.google.com/");
    //driver.sleep(1000)
  });

  test.after(function() {
      driver.quit();
  });

test.it('#search', function () {

  //  this.timeout(60000);
    var bpage=new basepage(driver);
    // driver.findElement({"xpath":"//*[@id='lst-ib']"}).sendKeys('test-google')
    // driver.sleep(5000)

    bpage.inputData(Elements.ggpage.inputBox,'testGoogle');
    //bpage.clickElement(Elements.ggpage.mailBtn);

  //  bpage.clickElement(Elements.ggpage.searchBtn);
  // driver.sleep(2000);
//         // driver.get();
//         var usname = driver.findElement(By.id('id_corphttps://www.google.com/https://www.google.com/id'));
//         usname.sendKeys("usename");
//         var password = driver.findElement(By.id('id_corppw'));
//         password.sendKeys("pwd");
//         var loginBotton = driver.findElement(By.className('btn btn-primary'));
//         loginBotton.click();
//         var img = driver.findElement(By.tagName("img"));
//         img.getAttribute("src").then(function(value) {
//             assert.equal(value, '/images/index1.jpg');
//         });

    });

 });
