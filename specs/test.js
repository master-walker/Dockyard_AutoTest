import test from 'selenium-webdriver/testing';
import config from '../config/config.json';
import ComFun from '../common/common-function.js';
import testData from '../test-data/data.json'
import LoginPage from './../testcase/dockyard/login-page.js';
import BottomNavBtn from '../testcase/dockyard/bottom-nav-button.js'
import ClubAccount from '../testcase/dockyard/club-account-page.js';
import SignUpPage from '../testcase/dockyard/sign-up-page.js';
import elements from '../elements/dockyard-elements.json'
import chai from 'chai';
import step from '../common/step.js'

const url=config.url;
let expect=chai.expect;
let driver=ComFun.getDriver();
let bottomNav=new BottomNavBtn(driver);
let clubAccount=new ClubAccount(driver);
let signUpPage=new SignUpPage(driver);
let loginPage = new LoginPage(driver);

let {email,password} =testData.loginData;
let loginDatas=[email,password];

test.describe( 'dockyard-auto-test', function() {
    this.timeout( 900000 );

    test.before( function() {
        driver.get(url);
    } );

    test.it('#vilidate error message and sign up',function () {

        let promise = Promise.resolve();
        promise.then(driver.sleep(2000))
            .then(loginPage.clickCreateAccount())
            .then(signUpPage.validateErrMsg())
            .then(signUpPage.checkTermsConditions())
            .then(signUpPage.signUp())
            .then(driver.sleep(2000))
            .then(signUpPage.skip())
            .then(bottomNav.switchNavBtn("clubAccount"))
            .then(clubAccount.validateUser())
        .then(ComFun.takeScreenshot(driver,"validateUserAccount.jpeg"));

    });

    //test.it('Login and validate', function() {
    //
    //    //loginPage.login(loginDatas);
    //    //driver.sleep(5000);
    //    bottomNav.switchNavBtn("clubAccount");
    //    clubAccount.validateUser();
    //} );




    test.after( () => driver.quit());


});
