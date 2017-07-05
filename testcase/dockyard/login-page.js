import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import assert from 'assert';
import chai from 'chai'
import {userData} from './sign-up-page.js';
let expect=chai.expect;

//login element and data
let {email,passwd,signInBtn} = elements.loginPage;
let {username,password} =testData.loginData;
//input login data
let loginDatas=[username,password];

export default class LoginPage extends BasePage {

    constructor(driver,visit = false,url) {
        super(driver,visit,url);
    }

    login(loginData=userData) {
        //loginPage elements
        let loginElements = [email, passwd, signInBtn];
        //input data and click signin button
        console.log("login");
        super.submitData(loginElements, loginData);

    }
    //创建账户
    clickCreateAccount() {
        try {
            super.clickElement(elements.loginPage.createAccount);
        }
        catch(e) {
            console.log(e)
        }
    }


}