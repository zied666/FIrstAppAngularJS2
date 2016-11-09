import {Component, OnInit}      from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'login.html',
    styleUrls: ['form.css']
})
export class LoginComponent implements OnInit {

    login: String;
    password: String;
    loading: boolean;
    confirmed: boolean;
    error: boolean;

    constructor(private loginService: LoginService,private router: Router) {
    }


    ngOnInit() {
        this.confirmed = false;
        this.error = false;
        this.loading = false;
        this.login = "";
        this.password = "";
        if(this.loginService.logedUser!=null)
            this.confirmed=true;
    }

    onSubmit() {
        this.loading = true;
        this.loginService.connection(this.login, this.password).subscribe(response => {
            if (response.data != null)
            {
                this.loginService.logedUser=response.data;
                this.router.navigateByUrl('profile');
                this.confirmed = true;
            }
            else
                this.error = true;
            this.loading = false;
        });
    }


}

