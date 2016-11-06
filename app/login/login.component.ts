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
    loading:boolean;

    ngOnInit() {
        this.loading=false;
        this.login = "";
        this.password = "";
    }

    constructor(private loginService: LoginService) {
    }

    onSubmit() {
        this.loading=true;
        console.log(this.login, this.password);
    }


}

