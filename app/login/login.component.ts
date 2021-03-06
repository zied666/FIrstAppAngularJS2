import {Component, OnInit, animate, transition, trigger, state, style, ViewChild,}      from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../shared/services/localStorage.service";
import {ReCaptchaComponent} from "angular2-recaptcha/lib/captcha.component";

@Component({
    moduleId: module.id,
    templateUrl: 'login.html',
    styleUrls: ['form.css'],
    animations: [
        trigger('errorMessage', [
            state("true", style({opacity: 0, display: "none"})),
            state("false", style({opacity: 1, display: "block"})),
            transition('1 => 0', animate('.5s'))
        ])
    ]
})
export class LoginComponent implements OnInit {

    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    token: string;
    login: String;
    password: String;
    loading: boolean;
    error: boolean;
    captchaError: boolean;

    constructor(private loginService: LoginService, private router: Router) {
    }


    handleCorrectCaptcha($event) {
        this.token = $event;
    }

    ngOnInit() {
        this.token = null;
        this.captchaError = false;
        this.error = false;
        this.loading = false;
        this.login = "";
        this.password = "";
        if (this.loginService.logedUser != null)
            this.router.navigateByUrl('profile');
    }

    onSubmit() {
        if (this.token) {
            this.loading = true;
            this.loginService.connection(this.login, this.password).subscribe(response => {
                if (response.data != null) {
                    this.loginService.logedUser = response.data;
                    this.router.navigateByUrl('profile');
                    LocalStorageService.setItem("currentUser", response.data);
                }
                else {
                    this.error = true;
                    setTimeout(() => this.error = false, 3000);
                }
                this.loading = false;
            });
        } else
        {
            this.captchaError = true;
            setTimeout(() => this.captchaError = false, 3000);
        }
    }


}

