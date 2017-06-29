/**
 * Created by bindo on 6/28/17.
 */

var nodemailer = require('nodemailer');
var mailgun = require('nodemailer-mailgun-transport');
var fs = require('fs');
var config = require('../config/config');

function setMailServer(from, to, subject, html, files, textfile,
                       imagefile) {

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
                filename: 'testReport.html',
                path: files
            },
            {
                filename: 'assert.zip',
                path: textfile
            }
        ]
    };


    // 发送邮件
    transport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.error(error);
        } else {
            console.log(response);
        }
        transport.close();
    });

}

function sendReportMail() {
    //读取测试报告路径
    var reportName = fs.readFileSync('/Users/bindo/MyDisk/AutoTest/' +
        'dockyard-autotest/test-report/reportName.txt','utf8');
    reportName=reportName.replace(/[\r\n]/g,"");

    var context = fs.readFileSync(reportName,
        'utf8');
    //console.log(context)
    if (context.indexOf("Fail: 1") != -1) {
        var subject = '【Failed】dockyard test is failed!' +
            'please check! ';

        setMailServer(config.emailconfigInfo.from,
            config.emailconfigInfo.to, subject, context);
        console.log("test result is failed");
    }
    else {
        var subject = '【Success】 dockyard test is pass!please check! ';
        setMailServer(config.emailconfigInfo.from,
            config.emailconfigInfo.to, subject, context);
        console.log("test result is ok");

    }
}

sendReportMail();
