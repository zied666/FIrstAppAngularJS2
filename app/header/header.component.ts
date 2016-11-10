import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../core/localStorage.service";

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: `header.html`
})
export class HeaderComponent  implements OnInit {

    constructor(private loginService: LoginService,private router: Router) {
    }

    ngOnInit() {
        if(LocalStorageService.getItem("currentUser"))
            this.loginService.logedUser=LocalStorageService.getItem("currentUser");
    }

    logout(){
        this.loginService.logedUser=null;
        LocalStorageService.removeItem("currentUser");
        this.router.navigateByUrl('');
    }



}