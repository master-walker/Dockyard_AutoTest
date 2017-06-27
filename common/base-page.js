var webdriver = require('selenium-webdriver');
var config = require('../config/config');
const until = webdriver.until;


function BasePage(driver) {
    this.driver = driver;
}

BasePage.prototype = {

    //判断传入的对象是否为数组
    isArray: function (o) {
        return Object.prototype.toString.call(o) == '[object Array]';
    },

    //get element
    getElement: function (locators) {
        var elements = [];
        if (this.isArray(locators)) {
            for (var i = 0; i < locators.length; i++) {
                element = this.driver.wait(until.elementLocated(locators[i]),
                    config.driverWaitTime);
                elements.push(element);
            }
            return elements;
        }
        return this.driver.wait(until.elementLocated(locators),
            config.driverWaitTime);
    },

    //get element's text
    getElementText: function (locator) {
        return this.getElement(locator).text;
    },

    //click element
    clickElement: function (locators, sleepTime=config.sleepTime) {
        //get elements
        elements = this.getElement(locators);
        if (this.isArray(elements)) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].click();
                this.driver.sleep(sleepTime);
            }
        }
        else {
            elements.click();
            this.driver.sleep(sleepTime);
        }

    },

    //input data
    inputData: function (locators, data, sleepTime=config.sleepTime) {
        elements = this.getElement(locators);
        if (this.isArray(elements) && this.isArray(data)) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].sendKeys(data[i]);
                this.driver.sleep(sleepTime);
            }
        }
        else {
            elements.sendKeys(data);
            this.driver.sleep(sleepTime);
        }

    },

    //input data and click submit button
    submitData: function (locators, data) {
        this.inputData(locators.slice(0, -1), data);
        this.clickElement(locators[locators.length - 1]);
    }


};


module.exports = BasePage;
