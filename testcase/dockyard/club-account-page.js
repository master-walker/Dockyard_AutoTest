/**
 * Created by bindo on 7/1/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';
import {userData} from './sign-up-page.js';

let expect=chai.expect;
let {userInfo,changePsdBtn,signOutBtn,confirmBtn,userInfoAvatar}=elements.clubAccountPage;

export default class ClubAccount extends BasePage {

    constructor(driver,visit = false,url) {
        super(driver,visit,url);
    }

    //获取用户账号
    getUserInfo() {
       return super.getElementText(userInfo);

    }
    //校验账号
    validateUser(email=userData[0]) {
        this.getUserInfo().then(function(user_info) {
            expect(user_info).to.equal(email);
        });
    }

    //update password
    clickChangePsd() {
        super.clickElement(changePsdBtn);
    }
    //sign out
    signOut() {
        super.getElements(signOutBtn).then(function(eles) {
            eles[1].click();
        });
        this.driver.sleep(1000);
        super.clickElement(confirmBtn);
    }
    //scroll to bottom
    scrollToBottom() {
        let locate={x:100,y:300};
        super.scrollTo(userInfoAvatar,locate);
    }

}