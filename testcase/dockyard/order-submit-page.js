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

let {orderInfo,backMenu,priceInfo,dishesInfo,modifierInfo,qtyInfo}=elements.orderSubPage;



export default class OrderSubPage extends BasePage {


    //getOrderInfo() {
    //
    //    let orderInfos=[];
    //    for(let i=0;i<4;i++) {
    //        super.getElements(orderInfo).then(function(els){
    //            let eleTxt=els[i].getText();
    //            orderInfos.push(eleTxt);
    //        });
    //    }
    //    console.log(orderInfos);
    //    return orderInfos;
    //
    //}

    getOrderInfos(locators,num=0) {
        let driver=this.driver;
        let orderInfos=[];
        super.getElements(locators).then(function(els){
            for(let i=0;i<els.length;i++) {
                let eleTxt=els[i].getText();
                orderInfos.push(eleTxt);
                driver.sleep(1000);
            }
        });
        console.log(orderInfos);
        return orderInfos;

    }





    backToMenu() {
        super.clickElement(backMenu,2000);
    }
}