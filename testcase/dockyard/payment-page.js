/**
 * Created by bindo on 7/11/17.
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

let {addBtn,cardNumBox,cardDate,cdHolderBox,subBtn,monthPicker,monthPicker8,yearPicker,yearPicker2,doneBtn,cvvBox,tipsBox,confirmPayBtn}=elements.paymentPage;
let {creditCardNum,cardHolder,CVV,tips}=testData;
let addCardEles=[cardNumBox,cdHolderBox,subBtn];
let cardData=[creditCardNum,cardHolder];
let payEls=[cvvBox,tipsBox,confirmPayBtn];
let payData=[CVV,tips];


export default class PaymentPage extends BasePage {

    chooseDate(num=6) {

        let driver=this.driver;
        super.getElements(cardDate).then(function(els){
            els[0].click();
        });
        this.driver.sleep(2000);
        if (num===0) {
            return false;
        }
        else {
            super.getElements(monthPicker).then(function(els){
                for(let i=1;i<=num;i++) {
                    els[i].click();
                    driver.sleep(1000);
                }

            });
        }
        super.clickElement(doneBtn,2000);

        super.getElements(cardDate).then(function(els){
            els[0].click();
        });
        this.driver.sleep(2000);
        super.clickElement(yearPicker2);
        super.clickElement(doneBtn,2000);


    }

    addCard() {

        super.getElements(addBtn).then(function(els){
            els[0].click()
        });
        this.driver.sleep(2000);

        this.chooseDate();

        super.submitData(addCardEles,cardData);


    }

    checkOut() {

        super.submitData(payEls,payData);
        this.driver.sleep(5000);



    }






}