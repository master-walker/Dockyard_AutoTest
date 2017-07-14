/**
 * Created by bindo on 7/13/17.
 */

import test from 'selenium-webdriver/testing';
import config from './config/config.json';
import ComFun from './common/common-function.js';
import testData from './test-data/data.json'
import CommonPage from './testcase/dockyard/common-page.js'
import LoginPage from './testcase/dockyard/login-page.js';
import BottomNavBtn from './testcase/dockyard/bottom-nav-button.js'
import ClubAccount from './testcase/dockyard/club-account-page.js';
import SignUpPage from './testcase/dockyard/sign-up-page.js';
import NewsPage from './testcase/dockyard/news-page.js'
import AboutUsPage from './testcase/dockyard/about-us-page.js'
import ChangePasswdPage from './testcase/dockyard/change-passwd-page.js'
import MenuPage from './testcase/dockyard/menu-page.js'
import DeliveryPage from './testcase/dockyard/delivery-page.js'
import WesternPage from './testcase/dockyard/western-page.js';
import PaymentPage from './testcase/dockyard/payment-page.js'
import OrderSubPage from './testcase/dockyard/order-submit-page.js'
import HistoryPage from './testcase/dockyard/history-page.js';
import elements from './elements/dockyard-elements.json'
import chai from 'chai';
import {userData} from './testcase/dockyard/sign-up-page.js'
//import iwebdriver from 'selenium-webdriver/bin/JavascriptExecutor'//

const url=config.url;
let expect=chai.expect;
let driver=ComFun.getDriver();
let bottomNav=new BottomNavBtn(driver);
let clubAccount=new ClubAccount(driver);
let signUpPage=new SignUpPage(driver);
let loginPage = new LoginPage(driver);
let newsPage=new NewsPage(driver);
let aboutUsPage=new AboutUsPage(driver);
let changePsdPage=new ChangePasswdPage(driver);
let menuPage=new MenuPage(driver);
let deliveryPage=new DeliveryPage(driver);
let westernPage=new WesternPage(driver);
let commonPage=new CommonPage(driver);
let paymentPage=new PaymentPage(driver);
let orderSubPage=new OrderSubPage(driver);
let historyPage=new HistoryPage(driver);

let {orderInfo,backMenu,priceInfo,dishesInfo,modifierInfo,qtyInfo}=elements.orderSubPage;
let {username,password} =testData.loginData;
let loginDatas=[username,password];
let promise = Promise.resolve();
let {oldPwd,newPwd,confirmPwd}=testData.password;
let newLgDatas=[username,newPwd];
let newPsds=[newPwd,oldPwd,oldPwd];

test.describe( 'dockyard-auto-test', function() {
    this.timeout( 290000 );

    test.before( function() {
        driver.get(url);
    } );

    //test.it('#validate error message and sign up',function () {
    //    let promise = Promise.resolve();
    //    promise.then(driver.sleep(2000))
    //        .then(loginPage.clickCreateAccount())
    //        .then(signUpPage.validateErrMsg())
    //        .then(signUpPage.checkTermsConditions())
    //        .then(signUpPage.signUp())
    //        .then(driver.sleep(3000))
    //        .then(signUpPage.skip())
    //        .then(bottomNav.switchNavBtn("clubAccount"))
    //        .then(clubAccount.validateUser())
    //        .then(ComFun.takeScreenshot(driver,"validateUser.jpeg"))
    //        .then(clubAccount.scrollToBottom())
    //        .then(clubAccount.signOut())
    //        .then(loginPage.login(userData))
    //        .then(driver.sleep(5000))
    //        .then(bottomNav.switchNavBtn("clubAccount"))
    //        .then(clubAccount.validateUser())
    //        .then(driver.sleep(2000))
    //        .then(ComFun.takeScreenshot(driver,"validateUser2.jpeg"));
    //
    //});

    test.it('choose delivery and validate', async function() {

        //(async function main() {
            try{
                await Promise.all([
                    loginPage.login(loginDatas),
                    driver.sleep(3000),
                    menuPage.enterDelivery(),
                    deliveryPage.pickUp(),
                    deliveryPage.choosePickTime(2),
                    ComFun.takeScreenshot(driver,"pickTime.jpeg")

                ]);

                await Promise.all([
                    deliveryPage.getPickTime()
                    //deliveryPage.clickTogoDone()
                ]).then((function(pickTime) {
                    let pickInfo= "Pick up at Location A on" +
                        " Bus Station Side at "+pickTime;
                    driver.sleep(2000);
                    menuPage.validateDelWay(pickInfo);
                })()) ;

            }
            catch(e) {
                console.log(e);
            }
        //}());

    });

    test.it('create an order and validate', async function() {
        //let orderInfo=[];

        //(async function main(){
            try{
                await Promise.all([
                    driver.sleep(2000),
                    menuPage.enterRestaurant('western'),
                    driver.sleep(1000),
                    westernPage.order('usual'),
                    westernPage.order('combo',3),
                    westernPage.order('options'),
                    driver.sleep(1000),
                    commonPage.clickChckOut(),
                    paymentPage.addCard(),
                    commonPage.chooseCard(),
                    paymentPage.checkOut()
                ]);
                //let orderInfos1=await orderSubPage.getOrderInfos(orderInfo);
                //await driver.sleep(2000);
                //let priceInfos1=await orderSubPage.getOrderInfos(priceInfo);
                //await driver.sleep(2000);
                //await menuPage.enterRestaurant('western');
                //await driver.sleep(1000);
                //await westernPage.order('usual');
                //await westernPage.order('combo',3);
                //await westernPage.order('options');
                //await driver.sleep(1000);
                //await commonPage.clickChckOut();
                //await paymentPage.addCard();
                //await commonPage.chooseCard();
                //await paymentPage.checkOut();
                await driver.sleep(2000);
                let orderInfos2=await orderSubPage.getOrderInfos(orderInfo);
                //let priceInfos2=await orderSubPage.getOrderInfos(priceInfo);
                await orderSubPage.backToMenu();
                await bottomNav.switchNavBtn("history");
                await historyPage.enterOrderDetails();
                console.log(orderInfos2);

                //if(Object.is(orderInfos1.sort().toString(),orderInfos2.sort().toString())) {
                //    console.log(222);
                //}
                //if(priceInfos1.toString()===priceInfos2.toString()) {
                //    console.log(223);
                //}


            }catch(e) {
                console.log(e);
            }

        //}());

        //(async function main() {
        //    try {
        //        let orderInfos1=await orderSubPage.getOrderInfos(orderInfo);
        //        let priceInfos1=await orderSubPage.getOrderInfos(priceInfo);
        //        await driver.sleep(3000);
        //        await orderSubPage.backToMenu();
        //        await bottomNav.switchNavBtn("history");
        //        await historyPage.enterOrderDetails();
        //        let orderInfos2=await orderSubPage.getOrderInfos(orderInfo);
        //        let priceInfos2=await orderSubPage.getOrderInfos(priceInfo);
        //        if(Object.is(orderInfos1.sort().toString(),orderInfos2.sort().toString())) {
        //            console.log(222);
        //        }
        //        if(priceInfos1.toString()===priceInfos2.toString()) {
        //            console.log(223);
        //        }
        //    }
        //    catch(e) {
        //
        //    }
        //}());

    });

    //test.it('Login and validate', function() {
    //    let promise = Promise.resolve();
    //    promise//.then()//driver.sleep(2000)
    //    .then(loginPage.login())
    //    .then(bottomNav.switchNavBtn("clubAccount"))
    //    .then(clubAccount.validateUser(testData.loginData.username));
    //    //driver.sleep(5000);
    //
    //
    //} );




    //test.it('#change password and validate',function () {

    //promise
    //.then(loginPage.login(loginDatas))
    //    .then(driver.sleep(3000))
    //    .then(bottomNav.switchNavBtn("clubAccount"))
    //    .then(clubAccount.clickChangePsd())
    //    .then(changePsdPage.changePasswd())
    //    .then(driver.scroll)
    //    .then(clubAccount.signOut())
    //    .then(ComFun.takeScreenshot(driver,"signOut.jpeg"))
    //    .then(loginPage.login(newLgDatas))
    //    .then(driver.sleep(3000))
    //    .then(bottomNav.switchNavBtn("clubAccount"))
    //    .then(clubAccount.clickChangePsd())
    //    .then(changePsdPage.changePasswd(newPsds))
    //    .then(clubAccount.signOut())
    //    .then(ComFun.takeScreenshot(driver,"signOut.jpeg"))
    //    .then(loginPage.login(loginDatas));

    //});




    //test.it('#check news and about us',function () {

    //promise
    //    //.then(loginPage.login())
    //    .then(driver.sleep(3000))
    //    .then(bottomNav.switchNavBtn("news"))
    //    .then(ComFun.takeScreenshot(driver,"news.jpeg"))
    //    .then(newsPage.checkNews())
    //    .then(bottomNav.switchNavBtn("aboutUs"))
    //    .then(ComFun.takeScreenshot(driver,"about-us.jpeg"))
    //    .then(aboutUsPage.checkAboutUs());

    //});


    test.after( () => driver.quit());


});
