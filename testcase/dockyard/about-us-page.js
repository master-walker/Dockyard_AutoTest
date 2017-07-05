/**
 * Created by bindo on 7/4/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai'

let expect=chai.expect;
let {Intro,Kiosks,Chefs,topTitle}=elements.aboutUsPage;
let titleElements=[Intro,Kiosks,Chefs];
let {titles}=testData.aboutUsData;

export default class NewsPage extends BasePage {

    checkAboutUs() {
        super.getElementText(topTitle).then(function(title) {
            expect("About Us").to.equal(title);
        });
        //for(let i=0;i<titleElements.length;i++) {
        //    super.getElementText(titleElements[i]).then(function (title) {
        //        expect(titles[i]).to.equal(title);
        //    });
        //}

    }


}