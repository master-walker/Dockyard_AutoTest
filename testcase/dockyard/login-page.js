import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import assert from 'assert';
import chai from 'chai'
import {emailAccount} from './sign-up-page.js';
let expect=chai.expect;

//login element and data
let {email,passwd,signInBtn} = elements.loginPage;
let {username,password} =testData.signUpData;
//input login data
let loginDatas=[emailAccount,password];


export default class LoginPage extends BasePage {

    constructor(driver,visit = false,url) {
        super(driver,visit,url);
    }

    login(loginData=loginDatas) {
        //loginPage elements
        let loginElements = [email, passwd, signInBtn];
        //input data and click signin button
        console.log("execute submit and login");
        super.submitData(loginElements, loginData);

    }
    //创建账户
    clickCreateAccount() {
        super.clickElement(elements.loginPage.createAccount);
    }


}