import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {HttpModule} from "@angular/http";
import {ProfileComponent} from "./profile/profile.component";


@NgModule({
  imports:      [ SharedModule,FormsModule,HttpModule ],
  declarations: [ LoginComponent,ProfileComponent ],
  providers:    [ LoginService  ]
})


export class LoginModule { }