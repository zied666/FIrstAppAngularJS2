import {Component, OnInit}      from '@angular/core';
import {LoginService} from "./login.service";

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


    ngOnInit() {
        this.confirmed = false;
        this.error = false;
        this.loading = false;
        this.login = "";
        this.password = "";
    }

    constructor(private loginService: LoginService) {
    }

    onSubmit() {
        this.loading = true;
        console.log(this.login, this.password);
        this.loginService.connection(this.login, this.password).subscribe(response => {
            if (response.data != null)
                this.confirmed = true;
            else
                this.error = true;
            this.loading = false;
        });
    }


}

