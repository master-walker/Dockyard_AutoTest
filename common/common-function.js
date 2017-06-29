/**
 * Created by bindo on 6/26/17.
 */

var webdriver = require('selenium-webdriver');
var nodemailer = require('nodemailer');
var mailgun = require('nodemailer-mailgun-transport');
var fs = require('fs');
var config = require('../config/config');

function CommonFunction() {

}


CommonFunction.prototype = {

    getDriver: function () {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome()).build();
        return driver;
    },
    getFormattedDate: function () {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" +
            date.getDate() + "-" + date.getHours() + ":"
            + date.getMinutes() + ":" + date.getSeconds();

        return str;
    },
    takeScreenshot: function (driver, filename) {
        dateStr=this.getFormattedDate();
        return driver.takeScreenshot().then(
            function (data) {
                fs.writeFile("./test-report/image/"+dateStr+"-"+
                    filename, data.replace(/^data:image\/png;base64,/, ''),
                    'base64', function (err) {
                        if (err) throw err;
                    });
            });
    }


    //checkResult:function(orginvalue,expectvalue){
    //    orginvalue.getAttribute("innerText").then(a =>{
    //        console.log("the params is " + a );
    //        expect(a).to.equal(expectvalue);
    //    });
    //}


};

module.exports = CommonFunction;




