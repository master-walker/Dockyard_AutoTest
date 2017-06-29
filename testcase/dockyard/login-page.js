/**
 * Created by bindo on 6/26/17.
 */

var BasePage = require('../../common/base-page');
var Elements = require('../../elements/dockyard-elements');
var config = require('../../config/config');
var testData = require('../../test-data/data');
var assert = require('assert');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();


function inheritPrototype(subType, superType) {
    var prototype = Object(superType.prototype);
    prototype.constructor = subType;
    subType.protoype = prototype;
}


//var loginPage=new BasePage(driver);
function LoginPage(driver) {
    //借用构造函数继承
    BasePage.call(this, driver);
}

//原型式继承
LoginPage.prototype = new BasePage();
//inheritPrototype(LoginPage,BasePage);

LoginPage.prototype.login = function () {

    //loginPage elements
    LoginPageElements = Elements.LoginPage;
    var loginElements = [LoginPageElements.email, LoginPageElements.password,
        LoginPageElements.signInBtn];

    //input login data
    loginData = testData.LoginData;
    var loginData = [loginData.username, loginData.password];

    //input data and click signin button
    console.log("execute submitData");
    this.submitData(loginElements, loginData,5000);


    //BasePage.prototype.submitData.call(this,loginElements,loginData);
    //点击clubAccount
    //driver.sleep(5000);
    //this.clickElement(Elements.ClubAccountPage.clubAccountElement);
    //console.log("log 11");
};


LoginPage.prototype.validate=function() {
    //验证  //span[contains(@text,'Maps')]
    console.log("execute clickElement");
    //点击clubAccount
    this.clickElement(Elements.ClubAccountPage.clubAccount,3000);
    //var clubAccountElement=this.getElement(
    //    Elements.ClubAccountPage.clubAccountElement);
    var userInfo=this.getElementText(Elements.ClubAccountPage.userInfo);
    //console.log(text);
    //var clubAccountElementText=this.getElementText(
    //    Elements.ClubAccountPage.clubAccountElement);
    //console.log(clubAccountElementText);
    //topElement.innerText().then(function(value) {
    //             assert.equal(value, '/images/index1.jpg');
    //         });
    //expectStr = 'Dockyard';
    //expect(testData.LoginData.username).to.equal(userInfo);
    //assert.equal(topElementText,'Dockyard');
};


module.exports = LoginPage;




