import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: `header.html`
})
export class HeaderComponent  implements OnInit {

    constructor(private loginService: LoginService,private router: Router) {
    }

    ngOnInit() {
        if(localStorage.getItem("currentUser"))
            this.loginService.logedUser=JSON.parse(localStorage.getItem("currentUser"));
    }

    logout(){
        this.loginService.logedUser=null;
        localStorage.removeItem("currentUser");
        this.router.navigateByUrl('');
    }



}