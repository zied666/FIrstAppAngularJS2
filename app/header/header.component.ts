import {Component} from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: `header.html`
})
export class HeaderComponent {

    constructor(private loginService: LoginService,private router: Router) {
    }

    logout(){
        this.loginService.logedUser=null;
        this.router.navigateByUrl('');
    }



}