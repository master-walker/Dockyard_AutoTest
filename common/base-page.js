import webdriver from 'selenium-webdriver';
import config from '../config/config.json';
const until = webdriver.until;
const waitTime=config.driverWaitTime;

export default class BasePage {

    constructor(driver,visit = false, url = null ) {
        this.driver=driver;
        this.url=url;
        if (visit) {
            this.driver.get(this.url);
        }

    }

    //判断传入的对象是否为数组
    static isArray(o) {
        return Object.prototype.toString.call(o) == '[object Array]';
    }
    //get element
    getElement(locators) {
        const elements = [];
        //return new Promise(function (resolve,reject) {
        try {
            if (BasePage.isArray(locators)) {
                for (let i = 0; i < locators.length; i++) {
                    let element = this.driver.wait(
                        until.elementLocated(locators[i]), waitTime);
                    elements.push(element);
                }
                return elements;
            }
            return (this.driver.wait(
                until.elementLocated(locators), waitTime));
        }
        catch(e) {
            console.log(e);
            return false;
        }


    }

    getElements(locator) {
        try {
            return this.driver.wait(
                until.elementsLocated(locator), waitTime);
        }
        catch(e) {
            console.log(e);
            return false;
        }
    }

    //get element's text
    getElementText(locator) {
        try {
            return this.getElement(locator).getText();
        }
        catch(e) {
            console.log(e);
            return false;
        }

    }

    //
    executeJs(script,...args) {
        this.driver.executeScript(script);
    }

    scrollTo(locator,loc) {
        let driver=this.driver;
        //let element=
        this.getElement(locator).then(function(element){
        driver.actions().dragAndDrop(element, loc);
    //}
    });

    }

    //click element
    clickElement(locators, sleepTime=1000) {
        //get elements
        let driver=this.driver;
        //let elements=
        this.getElement(locators).then( function(elements){

            if (BasePage.isArray(elements)) {
                for (let i = 0; i < elements.length; i++) {
                    elements[i].click();
                    driver.sleep(sleepTime);
                }
            }
            else {
                elements.click();
                driver.sleep(sleepTime);
            }
        });


    }

    //input data
    inputData(locators, data, sleepTime=1000) {

        let elements =this.getElement(locators);
        if (BasePage.isArray(elements) && BasePage.isArray(data)) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].clear();
                elements[i].sendKeys(data[i]);
                this.driver.sleep(sleepTime);
            }
        }
        else {
            elements.clear();
            elements.sendKeys(data);
            this.driver.sleep(sleepTime);
        }

    }
    //input data and click submit button
    submitData(locators, data,sleepTime=1000) {
        if(locators.slice(0, -1).length===1) {
            this.inputData(locators.slice(0, -1)[0], data,sleepTime);
        }else {
            this.inputData(locators.slice(0, -1), data,sleepTime);
        }
        this.clickElement(locators[locators.length - 1],sleepTime);
    }


    switchWindow(locator=null) {
        this.driver.getAllWindowHandles().then(function(w) {
            console.log(w);
            return w
        });

        //this.driver.switchTo(this.getElement(locator));
        //this.driver.switchTo().defaultContent();
        //this.getElement(locator).then(function(f) {
        //    this.driver.switchTo().iframe(f);
        //});

    }

}