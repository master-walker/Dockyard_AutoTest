/**
 * Created by bindo on 7/4/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'
import testData from '../../test-data/data.json'
import chai from 'chai'

let expect=chai.expect;
let {title1,topBarTitle}=elements.newsPage;
let {title_text1}=testData.newsPageData;

export default class NewsPage extends BasePage{

    checkNews() {
        super.getElementText(topBarTitle).then(function(title) {
            expect("News").to.equal(title);
        });
    }










}