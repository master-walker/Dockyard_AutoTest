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
import WesternPage from './testcase/dockyard/western-page.js'
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

    test.it('choose delivery and validate', function() {

        promise.then(loginPage.login(loginDatas))
            .then(driver.sleep(3000))
            //.then(bottomNav.switchNavBtn("menu"))
            //.then(menuPage.enterDelivery())
            //.then(deliveryPage.eatHere())
            //.then(deliveryPage.inputTableNum())
            ////.then(ComFun.takeScreenshot(driver,"tableNum.jpeg"))
            //.then(driver.sleep(2000))
            //.then(menuPage.validateDelWay())
            //.then(ComFun.takeScreenshot(driver,"eatHereInfo.jpeg"))
            .then(menuPage.enterDelivery())
            .then(deliveryPage.pickUp())
            .then(deliveryPage.choosePickTime(2))
            .then(ComFun.takeScreenshot(driver,"pickTime.jpeg"))
            .then(deliveryPage.getPickTime()
                .then(deliveryPage.clickTogoDone())
                .then(function(pickTime) {
                    let pickInfo= "Pick up at Location A on" +
                        " Bus Station Side at "+pickTime;
                    driver.sleep(3000);
                    menuPage.validateDelWay(pickInfo);
                })
            )
            .then(ComFun.takeScreenshot(driver,"pickUpInfo.jpeg"))
            .catch(function(err) {
                console.log(err);
            });

    });

    test.it('create an order and validate', function() {
        promise//
        //.then(loginPage.login(loginDatas))
        .then(driver.sleep(2000))
        .then(menuPage.enterRestaurant('western'))
        //.then(westernPage.takeOrder(3))
        .then(driver.sleep(2000))
        .then(westernPage.order(2))
        //    .then(function(arr){
        //    console.log(arr);
        //})
        //)
        .then(driver.sleep(3000))
        .then(commonPage.checkOut());
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
