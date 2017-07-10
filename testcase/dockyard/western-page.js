/**
 * Created by bindo on 7/7/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';
import fs from 'fs'
import ModifierPage from './modifier-page.js'
import webdriver from 'selenium-webdriver';
import config from '../../config/config.json';
const until = webdriver.until;
const waitTime=config.driverWaitTime;

let expect = chai.expect;
let should = chai.should();

let {dishesName,dishesPrice,dishesAdd,firstDish,secondDish,thirdDish}=elements.westernPage;
let {modifier,modifierName,addBtn,confirmBtn}=elements.modifierPage;
let {plusBtn,optionsBtn}=elements.modifierPage;

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


    takeOrder(num) {

        let dishesNames=[],
            dishesPrices=[],
            dishes={};



        super.getElements(dishesName).then(function(els){
            if(num>=els.length) {
                num=els.length;
            }
            for(let i=0;i<num;i++) {
                //let eleText=
                (function(i){
                    els[i].getText().then(function(txt) {
                        fs.writeFile('./testcase/order.json',txt);
                        dishesNames.push(txt);
                    });
                })(i);

                //dishesNames.push(eleText);
            }
            //return dishesNames;
        });
        super.getElements(dishesPrice).then(function(els){
            if(num>=els.length) {
                num=els.length;
            }
            for(let i=0;i<num;i++) {
                let eleText=els[i].getText();
                dishesPrices.push(eleText);
            }
            //return dishesNames;
        });
        this.driver.sleep(3000);
        super.getElements(dishesAdd).then(function(els){
            els[0].click();
            this.addModifier();
            els[1].click();

            //els[1].click();
            //if(num>=els.length) {
            //    num=els.length;
            //}
            //for(let i=0;i<num;i++) {
            //    eleText=els[i].getText();
            //    dishesPrices.push(eleText);
            //}
            //return dishesNames;
        });


        //super.clickElement(firstDish);
        this.driver.sleep(3000);
        //this.addModifier();

        console.log(dishesNames,dishesPrices);
        dishes=this.arrToJson(dishesNames,dishesPrices);
        //let map={x:1,y:3};

        return dishes;


    }

    clickAddBtn(num) {

        for(let i=0;i<num;i++) {

            super.getElements(dishesAdd).then(function(els) {
                (function(i){
                    els[i].click();
                })(i);

            });
        }

    }

    optionsAdd() {

        super.getElements(optionsBtn).then(function(els){
            els[0].click();
        });

        //if(super.getElement()) {
        //}
    }

    order(num) {
        try {
            let driver=this.driver;
            //let modifierWindow;
            for(let i=0;i<num;i++) {
                //let dishesAdds=super.getElements(dishesAdd);
                (function(i){
                    driver.wait(
                        until.elementsLocated(dishesAdd), 10000)
                        .then(function(els){
                            els[i].click();
                            driver.sleep(2000);
                        });
                    try{
                        let modifierWindow=driver.wait(
                            until.elementLocated(modifier, 10000));
                        if(modifierWindow) {
                            console.log(modifierWindow);
                            this.addModifier(num,true);
                        }
                    }catch(e) {
                        console.log('modifier is block')
                    }
                    //try{
                    //    let options=driver.wait(
                    //        until.elementsLocated(optionsBtn, 10000));
                    //    if(options) {
                    //        console.log(212);
                    //        this.optionsAdd();
                    //    }
                    //}catch(e) {
                    //    console.log('optionsBtn is block')
                    //}
                })(i);


            }

        }catch(e) {
            console.log(e);
        }

        //let p=Promise.resolve();
        //p.then(function(){
        //}).then();

        //for(let i=0;i<num;i++) {

            //let dishesAdds=super.getElements(dishesAdd);
            //dishesAdds[0].click();
        //    if(super.getElement(modifier)) {
        //        this.addModifier(true)
        //    }
        //    this.driver.sleep(2000);
        //dishesAdds[1].click();
        //if(super.getElement(modifier)) {
        //    this.addModifier(true)
        //}

        //}

        //this.driver.sleep(3000);

    }


    addModifier(num,flag=false) {

        let driver=this.driver;
        console.log('addModifier');
        if(flag) {

            for(let i=0;i<num;i++) {
                (function(i){
                    driver.wait(
                        until.elementsLocated(plusBtn), 10000)
                        .then(function(els){
                            driver.sleep(2000);
                            els[i].click();
                            driver.sleep(2000);
                        });

                })(i);

            }

        }
        driver.sleep(2000);
        //super.clickElement(addBtn);
        //let modifierName=super.getElementText(modifierName);
        super.clickElement(confirmBtn);
        //return modifierName;

    }









}


