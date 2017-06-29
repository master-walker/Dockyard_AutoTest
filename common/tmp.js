/**
 * Created by bindo on 6/28/17.
 */


//setMailServer: function (from, to, subject, html, files, textfile, imagefile) {
//
//    //mailgun邮件服务配置
//    var auth = {
//
//        auth: {
//            api_key: 'key-b1ebfb84934e7140000dfa41d27e9184',
//            domain: 'bindo.com'
//        }
//    };
//
//    var transport = nodemailer.createTransport(mailgun(auth));
//
//    // 设置邮件内容
//    var mailOptions = {
//        from: from,
//        to: to,
//        subject: subject,
//        // text:html,
//        html: html,
//        attachments: [
//            {
//                filename: 'testReport.html',
//                path: files
//            },
//            {
//                filename: 'assert.zip',
//                path: textfile
//            }
//        ]
//    }
//
//    // 发送邮件
//    transport.sendMail(mailOptions, function (error, response) {
//        if (error) {
//            console.error(error);
//        } else {
//            console.log(response);
//        }
//        transport.close();
//    });
//
//},
//
//sendMail: function () {
//    var reportName = fs.readFileSync('/Users/bindo/MyDisk/AutoTest/' +
//        'dockyard-autotest//test-report/reportName.txt');
//    //config.emailconfigInfo.html   reportName.toString()
//    var context = fs.readFileSync(config.emailconfigInfo.html,
//        'utf8');
//    //console.log(context)
//    if (context.indexOf("Error") != -1) {
//        var subject = '【Failed】dockyard test is failed!' +
//            'please check! ';
//
//        this.setMailServer(config.emailconfigInfo.from,
//            config.emailconfigInfo.to, subject, context);
//        console.log("test result is failed");
//    }
//    else {
//        var subject = '【Success】 dockyard test is pass!please check! ';
//        this.setMailServer(config.emailconfigInfo.from,
//            config.emailconfigInfo.to, subject, context);
//        console.log("test result is ok");
//
//    }
//}
//


var webdriver=require('selenium-webdriver');

var getDriver=function() {
    //if (driver) {
    //    return driver;
    //}
    //else {
    driver=new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome()).build();
    return driver;
    //}
};


module.exports=getDriver;
//var buildDriver=function() {
//
//};

//"//*[@id='tabpanel-t4-0']/ng-component/ion-header/
//ion-navbar/div[2]/ion-title/div/header-procurement-title/
//div/ion-row[1]"
//[@class='tab-button-text']