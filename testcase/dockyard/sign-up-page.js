/**
 * Created by colin on 6/30/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import ComFun from '../../common/common-function.js';
import assert from 'assert';
import chai from 'chai';
    let expect = chai.expect;
    let should = chai.should();

//注册页元素
let {email,password,confirmPassword,signUpBtn,acceptTc,errElement,alertMsg,okBtn}=elements.signUpPage;
//注册数据
let signUpData = testData.signUpData;
let signUpDatas = [signUpData.email, signUpData.password,
    signUpData.confirmPassword];
//生成注册账号
let emailAccount="col"+ComFun.getRandomStr(6)+"@bindo.com";
//export let acoountPsd=signUpData.password;
signUpDatas[0]=emailAccount;
export let userData=[emailAccount,signUpData.password];

//输入的错误数据
let errSignData=testData.errSignData;
let errSignDatas=[errSignData.email, errSignData.password,
    errSignData.confirmPassword];
//提示信息
let errMsgs=testData.expectErrMsgs;

export default class SignUpPage extends BasePage {
    //注册账号
    signUp(signUpData=signUpDatas) {
        let signUpElements=[email,password,confirmPassword,signUpBtn];
        this.clickElement(acceptTc);
        super.submitData(signUpElements,signUpDatas);
        //while(super.getElement(alertMsg)) {
        //    super.clickElement(okBtn);
        //    super.submitData(signUpElements,signUpDatas);
        //}
    }
    //注册后,点击skip
    skip() {
        super.clickElement(elements.signUpPage.skipBtn)
    }
    //查看隐私条款
    checkTermsConditions() {

        super.clickElement(elements.signUpPage.tcBtn);

        //let itemsTitle=elements.termsConditionPage.tcFrame

        //super.switchWindow();
        //super.getElementText(elements.termsConditionPage.tcFrame).then((itemsTitle) => {
        //    expect(itemsTitle).to.include(testData.termsTitle);
        //});

        //let flag=assert.equal(itemsTitle,testData.termsTitle);
        //if (flag) {
        //关闭
            super.clickElement(elements.termsConditionPage.closeBtn);
        //}


    }

    validateErrMsg(inputData=errSignDatas,
                   locator=elements.signUpPage.signDiv,
                   validateFlag=false) {
        //输入不符合规则的数据
        let signUpElements=[email,password,confirmPassword,acceptTc];
        //提交数据
        super.submitData(signUpElements,inputData);
        //获取提示信息
        let errElements=super.getElements(errElement);
            //比较出现的错误提示信息
            for (let i=0;i<errElements.length;i++) {
                super.getElementText(errElements[i]).then(function  (errMsg)  {
                     expect(errMsg).to.include(errMsgs[i]);
                });
            }
    }





}



