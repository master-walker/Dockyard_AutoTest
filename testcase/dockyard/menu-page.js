/**
 * Created by bindo on 6/30/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';
    let expect = chai.expect;
    let should = chai.should();

let {deliveryWayBtn,deliveryInfo}=elements.menuPage;
let {tableNumber,eatHereInfo,pickUpInfo1}=testData;
//let eatHereInfo="Eat Here - Table"+testData.tableNumber;
//let pickUpInfo="Pick up at Location A on Bus Station Side Immediate";

export default class MenuPage extends BasePage {

    enterDelivery() {
        try {
            super.clickElement(deliveryWayBtn)
        }
        catch(e) {
            console.log(e)

        }
    }

    validateDelWay(delInfo=eatHereInfo) {

        try{
            super.getElementText(deliveryInfo).then(function(delText) {
                expect(delInfo).to.equal(delText);
            });
        }
        catch(e) {
            console.log(e);
        }

    }













}






