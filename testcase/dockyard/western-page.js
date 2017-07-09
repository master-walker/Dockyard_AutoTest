/**
 * Created by bindo on 7/7/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';
import fs from 'fs'

let expect = chai.expect;
let should = chai.should();

let {dishesName,dishesPrice,dishesAdd,firstDish,secondDish,thirdDish}=elements.westernPage;
let {modifierName,addBtn,confirmBtn}=elements.modifierPage;

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
        this.addModifier();

        console.log(dishesNames,dishesPrices);
        dishes=this.arrToJson(dishesNames,dishesPrices);
        //let map={x:1,y:3};

        return dishes;


    }





    addModifier() {

        //super.clickElement(addBtn);
        //let modifierName=super.getElementText(modifierName);
        super.clickElement(confirmBtn);
        //return modifierName;

    }







}


