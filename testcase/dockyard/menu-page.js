/**
 * Created by bindo on 6/30/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import assert from 'assert';
import chai from 'chai';
    let expect = chai.expect;
    let should = chai.should();



function MenuPage(driver) {
    //借用构造函数继承
    BasePage.call(this, driver);

}

//原型式继承
MenuPage.prototype = new BasePage();
//inheritPrototype(MenuPage,BasePage);

//click the bar
MenuPage.prototype.enterTheBar = function() {

};





