import {Component, OnInit, transition} from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../core/localStorage.service";
import {TranslateService} from "ng2-translate";

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: `header.html`
})
export class HeaderComponent  implements OnInit {

    constructor(private loginService: LoginService,private router: Router,private translate: TranslateService) {
    }

    ngOnInit() {
        this.translate.addLangs(["en", "fr"]);
        this.translate.setDefaultLang('en');
        if(LocalStorageService.getItem('locale'))
            this.translate.use(LocalStorageService.getItem('locale'));
        else
        {
            let browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
            LocalStorageService.setItem("locale",browserLang.match(/en|fr/)? browserLang : 'en');
        }
        if(LocalStorageService.getItem("currentUser"))
            this.loginService.logedUser=LocalStorageService.getItem("currentUser");
    }

    changeTranlsation(lang:string){
        this.translate.use(lang);
        LocalStorageService.setItem("locale",lang);
    }

    logout(){
        this.loginService.logedUser=null;
        LocalStorageService.removeItem("currentUser");
        this.router.navigateByUrl('');
    }



}