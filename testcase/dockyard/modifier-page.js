/**
 * Created by bindo on 7/10/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai';
import fs from 'fs'

let expect = chai.expect;
let should = chai.should();

let {plusBtn}=elements.modifierPage;


export default class ModifierPage extends BasePage {

    //static addModifier() {
    //    //let driver=this.driver;
    //
    //    super.getElements(plusBtn).then(function(els){
    //        els[0].click();
    //        els[1].click();
    //        els[2].click();
    //    });
    //    //super.clickElement(addBtn);
    //    //let modifierName=super.getElementText(modifierName);
    //    super.clickElement(confirmBtn);
    //    //return modifierName;
    //
    //}












}