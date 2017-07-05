import webdriver from 'selenium-webdriver';
import nodemailer from  'nodemailer';
import mailgun from 'nodemailer-mailgun-transport';
import fs from 'fs';
import config from '../config/config';
import BasePage from './base-page.js';

export default class CommonFunction {

    static getDriver() {
        let driver = new webdriver.Builder().withCapabilities
            (webdriver.Capabilities.chrome()).build();
        return driver;
    }
    static getFormattedDate() {
        let date = new Date();
        let str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" +
            date.getDate() + "-" + date.getHours() + ":"
            + date.getMinutes() + ":" + date.getSeconds();

        return str;
    }
    static takeScreenshot(driver,filename) {
        let dateStr=this.getFormattedDate();
        //let driver=this.getDriver();
        return driver.takeScreenshot().then(
            function (data) {
                fs.writeFile("./test-report/image/"+dateStr+"-"+
                    filename, data.replace(/^data:image\/png;base64,/, ''),
                    'base64', function (err) {
                        if (err) throw err;
                    });
            });
    }

    static getRandomNum() {
        return Math.floor(Math.random()*10);
    }

    static getRandomStr(len) {
        let str='';
        for(let i=0;i<len;i++) {
            str=str+this.getRandomNum()
        }
        return str;

    }

    //static drSleep(time) {
    //    this.getDriver().sleep(time)
    //}


    //checkResult:function(orginvalue,expectvalue){
    //    orginvalue.getAttribute("innerText").then(a =>{
    //        console.log("the params is " + a );
    //        expect(a).to.equal(expectvalue);
    //    });
    //}

}












