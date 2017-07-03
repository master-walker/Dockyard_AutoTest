/**
 * Created by bindo on 7/1/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import assert from 'assert';
import chai from 'chai';
import {emailAccount} from './sign-up-page.js';

let expect=chai.expect;

export default class ClubAccount extends BasePage {

    //获取用户账号
    getUserInfo() {
       return super.getElementText(elements.clubAccountPage.userInfo);

    }
    //校验账号
    validateUser(email=emailAccount) {
        this.getUserInfo().then(function(userInfo) {
            expect(userInfo).to.equal(email);
        });
    }

}