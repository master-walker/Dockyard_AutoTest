/**
 * Created by bindo on 7/7/17.
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

let {dishesName,dishesPrice,dishesAdd,firstDish,secondDish,thirdDish}=elements.westernPage;
let {modifier,modifierName,addBtn,confirmBtn,confirmBtn2,confirmBtn3}=elements.modifierPage;
let {plusBtn,optionsBtn,optionsItems1}=elements.modifierPage;

export default class WesternPage extends BasePage {


    arrToJson(arr1,arr2) {
        let mp={};
        for(let i=0;i<arr1.length;i++) {
            mp[arr1[i]]=arr2[i];
        }
        return mp;
    }

    writeFile(filePath,data=0) {
        fs.writeFile(filePath,data,function(err){
            if(err) {
                throw err;
            }
        })
    }

    //add options
    optionsAdd(num=2) {

        let driver=this.driver;

        for(let i=0;i<3;i++) {

            (function(i){
                driver.wait(
                    until.elementsLocated(optionsBtn), 10000).then(function(els){
                    switch(i) {
                        case 0:
                            els[0].click();
                            break;
                        case 2:
                            els[2].click();
                            break;
                    }

                });
                driver.sleep(1000);
            })(i);

        }
        //add modifier options
        super.clickElement(optionsItems1,2000);
        super.clickElement(confirmBtn3,2000);
        super.clickElement(confirmBtn2,2000);
        super.clickElement(confirmBtn,2000);

    }

    order(orderType,num=2) {

        try {
            let driver = this.driver;
            switch (orderType) {
                case 'usual':
                    super.getElements(dishesAdd).then(function (els) {
                        els[0].click();
                        driver.sleep(1000);
                    });
                    break;
                case 'combo':
                    super.getElements(dishesAdd).then(function (els) {
                        els[1].click();
                        driver.sleep(1000);
                    });
                    this.addModifier(num);
                    break;
                case 'options':
                    super.getElements(dishesAdd).then(function (els) {
                        els[2].click();
                        driver.sleep(1000);
                    });
                    this.optionsAdd();
                    break;
                case 'modifier':
                    super.getElements(dishesAdd).then(function (els) {
                        els[3].click();
                        driver.sleep(2000);
                    });
                    this.addModifier(num);
                    break;


            }

        } catch (e) {
            console.log(e);
        }


    }


    addModifier(num) {

        let driver=this.driver;
        //if(flag) {,flag=false
        for(let i=0;i<num;i++) {
            (function(i){
                driver.wait(
                    until.elementsLocated(plusBtn), 10000)
                    .then(function(els){
                        els[i].click();
                        driver.sleep(2000);
                    });

            })(i);

        }

        //}
        driver.sleep(2000);
        super.clickElement(confirmBtn);

    }









}


