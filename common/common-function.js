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
            date.getDate() + " " + date.getHours() + ":"
            + date.getMinutes() + ":" + date.getSeconds();

        return str;
    },
    takeScreenshot: function (driver, filename) {
        return driver.takeScreenshot().then(
            function (data) {
                fs.writeFile(filename, data.replace(/^data:image\/png;base64,/, ''),
                    'base64', function (err) {
                        if (err) throw err;
                    });
            });
    },

    setMailServer: function (from, to, subject, html, files, textfile, imagefile) {

        //mailgun邮件服务配置
        var auth = {

            auth: {
                api_key: 'key-b1ebfb84934e7140000dfa41d27e9184',
                domain: 'bindo.com'
            }
        };

        var transport = nodemailer.createTransport(mailgun(auth));

        // 设置邮件内容
        var mailOptions = {
            from: from,
            to: to,
            subject: subject,
            // text:html,
            html: html,
            attachments: [
                {
                    filename: 'mochawesome.html',
                    path: files
                },
                {
                    filename: 'assert.zip',
                    path: textfile
                }
            ]
        }

        // 发送邮件
        transport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.error(error);
            } else {
                console.log(response);
            }
            transport.close();
        });

    },

    sendMail: function () {
        var context = fs.readFileSync(config.emailconfigInfo.html,
            'utf8');
        //console.log(context)
        if (context.indexOf("Error") != -1) {
            var subject = '【Failed】dockyard test is failed!' +
                'please check! ';

            this.setMailServer(config.emailconfigInfo.from,
                config.emailconfigInfo.to, subject, context);
            console.log("test result is failed");
        }
        else {
            var subject = '【Success】 dockyard test is pass!please check! ';
            this.setMailServer(config.emailconfigInfo.from,
                config.emailconfigInfo.to, subject, context);
            console.log("test result is ok");

        }
    }
    //checkResult:function(orginvalue,expectvalue){
    //    orginvalue.getAttribute("innerText").then(a =>{
    //        console.log("the params is " + a );
    //        expect(a).to.equal(expectvalue);
    //    });
    //}


};

module.exports = CommonFunction;




