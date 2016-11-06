import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {LoginService} from "./login.service";
import {HttpModule} from "@angular/http";


@NgModule({
  imports:      [ SharedModule,FormsModule,HttpModule ],
  declarations: [ LoginComponent ],
  providers:    [ LoginService  ]
})


export class LoginModule { }