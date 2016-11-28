import {Component} from '@angular/core';
import {TranslateService} from "ng2-translate";

@Component({
    moduleId: module.id,
    templateUrl:"homepage.html"
})
export class HomepageComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
}