/**
 * Created by bindo on 7/12/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';
import fs from 'fs';
import ModifierPage from './modifier-page.js';
import webdriver from 'selenium-webdriver';
import config from '../../config/config.json';
const until = webdriver.until;
const waitTime=config.driverWaitTime;

let expect = chai.expect;
let should = chai.should();

let {orderInfo,backMenu}=elements.orderSubPage;
let {orderBtn}=elements.historyPage;

export default class HistoryPage extends BasePage {


    enterOrderDetails() {

        super.clickElement(orderBtn,2000);
    }






}