/**
 * Created by bindo on 7/5/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';

let expect = chai.expect;
let should = chai.should();
let {delTypeBtn,scanQrBtn,tableNumBox,doneBtn,exitBtn,nextBtn,toGoDone,eatHereImg,toGoImg,timePicker,time1}=elements.deliveryPage;
let tableNumEls=[tableNumBox,doneBtn];


export default class DeliveryPage extends BasePage {

    constructor(driver,visit = false,url) {
        super(driver,visit,url);
    }

    scanQrCode() {
        //click scan qrcode btn
        super.clickElement(scanQrBtn);
        //exit scan qrcode
        this.driver.sleep(2000);
        super.clickElement(exitBtn);
    }

    eatHere() {

        //获取delivery的两种方式的一组元素
        //super.getElements(delTypeBtn).then(function(eles) {
        //    //choose eat here
        //    eles[0].click();
        //});
        super.clickElement(eatHereImg);
        this.driver.sleep(2000);
        this.scanQrCode();
        this.driver.sleep(2000);
        //submit table number
        super.inputData(tableNumBox,testData.tableNumber);
        this.driver.sleep(5000);
        this.clickDone();
        //super.getElement(doneBtn).then(function(eles){
        //    eles[0].click();
        //});

        this.driver.sleep(2000);
        //console.log("done");
        //super.submitData(tableNumEls,testData.tableNumber)

    }

    clickDone() {
        super.clickElement(doneBtn);
    }


    pickUp() {

        super.clickElement(toGoImg);
        //choose pick up point
        super.clickElement(nextBtn);
        let time=super.getElementText(time1);
        console.log(time);
        this.driver.sleep(2000);
        this.choosePickTime();
        return time;


    }
    choosePickTime() {

        super.getElements(timePicker).then(function(eles){

            eles[1].click();
        });

        super.clickElement(toGoDone);
        this.driver.sleep(2000);

    }


















}