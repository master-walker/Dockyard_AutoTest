/**
 * Created by bindo on 7/8/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';


let expect = chai.expect;
let should = chai.should();

let {checkOut,checkOut2,payCard}=elements.commonPage;


export default class CommonPage extends BasePage{

    constructor(driver,visit = false,url) {
        super(driver,visit,url);
    }

    clickChckOut() {

        super.clickElement(checkOut,2000);
        super.getElements(checkOut2).then(function(els) {
            els[1].click();
        });
        this.driver.sleep(2000);

    }


    chooseCard() {

        super.clickElement(payCard,2000);
        this.driver.sleep(2000);


    }







}