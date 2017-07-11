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
//import elements from '../elements/dockyard-elements.json';
//var element=require('../elements/dockyard-elements.json');
//
//let {email,password,signInBtn}=element.loginPage;
//
//console.log(email,password,signInBtn);

//"xpath" : "//span[contains(text,'Sign')]"

//this.signUp();
//let script="var text=document.getElementByClassName('registrations_new').innerHTML.replace(/<.+?>/gim,'');return text";
//    let text=super.executeJs(script);
//let errElements=[emailErr,passwordErr,confirmPwdErr];

//*[@id='loginForm']/div[2]/div/div[2]/p[2]
//"className":"sign-up-link"
//*[@id="loginForm"]/div[2]/div/div[2]/p[2]/a
//a[contains(text(),'Create an account now!')]
//p[@class='sign-up-link']
//html/body/div/p[1]
//"xpath": "//span[contains(text='TERMS & CONDITIONS')]"
///html/body/ion-app/ion-modal[2]/div/ng-component/ion-content/div[2]/div
//"linkText":"Create an account now!"

//let source = this.driver.getPageSource().then(function (src) {
//    res.json({ message: src });
//    //console.log(message);
//});

//test.it('#sign up',function () {
//    //this.comFunc.sendMail();
//    driver.sleep(5000);
//    loginPage.clickCreateAccount();
//    driver.sleep(5000);
//    //signUpPage.signUp();
//    driver.sleep(5000);
//    signUpPage.scanTermsConditions();
//
//});


//#npm test lint --  -R good-mocha-html-reporter -p $reportFileName

//super.clickElement(signOutBtn);
//super.clickElement(confirmBtn);
//this.driver.actions().dragAndDrop(super.getElement(userInfoAvatar),{x:100,y:300});
//let els1 = super.getElements({"className":"user_show__btn button button-md button-default button-default-md button-block button-block-md"});
//els1.then(function(els){
//    els[1].click();
//});
//this.driver.sleep(1000);
//let els2 = super.getElements({"className":'alert-button '});
//els2.then(function(els){
//    els[1].click();
//});
///button/span[contains(text(),'Done')]
//button[@class='bar-button bar-button-md bar-button-default bar-button-default-md']"


//"xpath" : "//button/span[contains(text(),'Done')]"
//"className" : "bar-button bar-button-md bar-button-default bar-button-default-md"

//button[@class='bar-button bar-button-md bar-button-default bar-button-default-md xpather-highlight xpath-important-highlight']

//"css":"body > ion-app > ion-modal:nth-child(5) > div > ng-component > ion-header > ion-navbar > ion-buttons:nth-child(4) > button"


"let elements=document.getElementsByClassName('button-inner');for(let i=0;i<elements.length;i++) {if(elements[i].innerHTML=='Done'){return elements[i]}}";
let script="let elements=document.getElementsByClassName('button-inner');" +
    "for(let i=0;i<elements.length;i++) {" +
    "if(elements[i].innerHTML=='Done'){" +
    "return elements[i]}" +
    "}";
"doneBtn1" : {
    "js" : "let elements=document.getElementsByClassName('button-inner');for(let i=0;i<elements.length;i++) {if(elements[i].innerHTML=='Done'){return elements[i]}}"
}

"selectTimer2" : {
    "xpath" : "/html/body/ion-app/ion-picker-cmp/div/div[2]/div[2]/div/button[3]"
}
"//*[@id='lbl-100']/product/ion-label/div[2]/div[2]/quantity-ticker/div/div[2]"

//let pObj=elements[i].click();thenObj=
//let pObj=Promise.resolve(this.driver.executeScript(script));
//return pObj.then(function(ele){
//        ele.click();
//});
//super.getElements(doneBtn).then(function(els){
//    els[2].click();
//});
//try {
//
//    //let modifierWindow;
//    for(let i=0;i<num;i++) {
//        //let dishesAdds=super.getElements(dishesAdd);
//        (function(i){
//            driver.wait(
//                until.elementsLocated(dishesAdd), 10000)
//                .then(function(els){
//                    els[i].click();
//                    driver.sleep(2000);
//                });
//            try{
//
//                let modifierWindow=driver.wait(
//                    until.elementLocated(modifier, 10000));
//                if(modifierWindow) {
//                    console.log(222);
//                    addModifier.call(WesternPage,num,true);
//                    //this.addModifier(num,true);
//                }
//            }catch(e) {
//                console.log('modifier is block')
//            }
//            //try{
//            //    let options=driver.wait(
//            //        until.elementsLocated(optionsBtn, 10000));
//            //    if(options) {
//            //        console.log(212);
//            //        this.optionsAdd();
//            //    }
//            //}catch(e) {
//            //    console.log('optionsBtn is block')
//            //}
//        })(i);
//
//
//    }
//
//}catch(e) {
//    console.log(e);
//}

//let p=Promise.resolve();
//p.then(function(){
//}).then();

//for(let i=0;i<num;i++) {

//let dishesAdds=super.getElements(dishesAdd);
//dishesAdds[0].click();
//    if(super.getElement(modifier)) {
//        this.addModifier(true)
//    }
//    this.driver.sleep(2000);
//dishesAdds[1].click();
//if(super.getElement(modifier)) {
//    this.addModifier(true)
//}

//}

//this.driver.sleep(3000);
clickAddBtn(num) {

    for(let i=0;i<num;i++) {

        super.getElements(dishesAdd).then(function(els) {
            (function(i){
                els[i].click();
            })(i);

        });
    }

    //ion-content/div/
    //form/ion-list/ion-list/ion-item/div/div[@class='input-wrapper']
    super.getElements(optionsItems).then(function(els){
        let fg=false;

        for(let i=0;i<els.length;i++) {
            (function(i){
                let p=Promise.resolve(els[i].isDisplayed());
                p.then(function(flag){
                    if (flag) {
                        els[i].click();
                        fg=flag;

                    }
                });
                if(fg) {
                    break;
                }

            })(i)

        }
        //ele[0].click();
    });


    //ion-buttons/button[@class='bar-button bar-button-md bar-button-default bar-button-default-md']
    takeOrder(num) {

        let dishesNames=[],
            dishesPrices=[],
            dishes={};



        super.getElements(dishesName).then(function(els){
            if(num>=els.length) {
                num=els.length;
            }
            for(let i=0;i<num;i++) {
                //let eleText=
                (function(i){
                    els[i].getText().then(function(txt) {
                        fs.writeFile('./testcase/order.json',txt);
                        dishesNames.push(txt);
                    });
                })(i);

                //dishesNames.push(eleText);
            }
            //return dishesNames;
        });
        super.getElements(dishesPrice).then(function(els){
            if(num>=els.length) {
                num=els.length;
            }
            for(let i=0;i<num;i++) {
                let eleText=els[i].getText();
                dishesPrices.push(eleText);
            }
            //return dishesNames;
        });
        this.driver.sleep(3000);
        super.getElements(dishesAdd).then(function(els){
            els[0].click();
            this.addModifier();
            els[1].click();

            //els[1].click();
            //if(num>=els.length) {
            //    num=els.length;
            //}
            //for(let i=0;i<num;i++) {
            //    eleText=els[i].getText();
            //    dishesPrices.push(eleText);
            //}
            //return dishesNames;
        });


        //super.clickElement(firstDish);
        this.driver.sleep(3000);
        //this.addModifier();

        console.log(dishesNames,dishesPrices);
        dishes=this.arrToJson(dishesNames,dishesPrices);
        //let map={x:1,y:3};

        return dishes;


    }

for(let j=0;j<num+1;j++) {
    //super.clickElement(confirmBtn,2000);
    //(function(j){
    //    driver.wait(
    //        until.elementLocated(confirmBtn), 10000).then(function(ele){
    //        ele.click();
    //        driver.sleep(2000);
    //    });
    //
    //})(j)

}


    if(pickTime!==null) {
    let pickInfo=delInfo+pickTime;
    expect(pickInfo).to.equal(delText);

}else {
    expect(delInfo).to.equal(delText);
}

generateString(str) {
    pickInfo= "Pick up at Location A on Bus Station Side at"+str;
}

let arr=[0,1];
console.log(arr.slice(0,-1));
