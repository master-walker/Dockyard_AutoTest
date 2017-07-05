/**
 * Created by bindo on 7/4/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';
import {userData} from './sign-up-page.js'

let expect=chai.expect;
let {oldPsBox,newPsBox,confirmPsBox,submitBtn}=elements.changePsdPage;
let {oldPwd,newPwd,confirmPwd}=testData.password;
let passWds=[oldPwd,newPwd,confirmPwd];
passWds[0]=userData[1];



export default class ChangePasswdPage extends BasePage {

    changePasswd(inputData=passWds) {
        let changePsdEles=[oldPsBox,newPsBox,confirmPsBox,submitBtn];

        super.submitData(changePsdEles,passWds);
    }

}


