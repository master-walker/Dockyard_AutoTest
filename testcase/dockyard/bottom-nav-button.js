/**
 * Created by bindo on 7/1/17.
 */

import BasePage from  '../../common/base-page.js'
import elements from '../../elements/dockyard-elements.json'


let {menu,history,clubAccount,news,aboutUs}=elements.bottomNavBtn;

export default class BottomNavBtn extends BasePage {

     switchNavBtn(navBtn) {

        switch(navBtn) {

            case "menu":
                super.clickElement(menu);
                break;
            case "history":
                super.clickElement(history);
                break;
            case "clubAccount":
                super.clickElement(clubAccount);
                break;
            case "news":
                super.clickElement(news);
                break;
            case "aboutUs":
                super.clickElement(aboutUs);
                break;

        }
    }


}
