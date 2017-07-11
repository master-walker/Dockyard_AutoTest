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

let {addBtn,cardNumBox,cardDate,cdHolderBox,subBtn,monthPicker,monthPicker8,yearPicker,doneBtn}=elements.paymentPage;
let {creditCardNum,cardHolder}=testData;
let addCardEles=[cardNumBox,cdHolderBox,subBtn];
let cardData=[creditCardNum,cardHolder];


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
                    driver.sleep(2000);
                }

            });
        }
        // super.clickElement(monthPicker8,2000);
        super.clickElement(doneBtn,2000);

        super.getElements(cardDate).then(function(els){
            els[0].click();
        });
        this.driver.sleep(2000);
        super.getElement(yearPicker).then(function(els){
            els[2].click()
        });
        // super.clickElement(yearPicker,2000);
        super.clickElement(doneBtn,2000);


    }

    addCard() {

        super.getElements(addBtn).then(function(els){
            els[0].click()
        });
        this.driver.sleep(2000);
        //super.clickElement(addBtn,2000);

        this.chooseDate();

        this.driver.sleep(2000);


        super.submitData(addCardEles,cardData);


    }






}