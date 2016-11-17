import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

/* App Root */
import {AppComponent}   from './app.component';

/* Feature Modules */
import {CoreModule}       from './core/core.module';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from "./header/header.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginModule} from "./login/login.module";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {LoginService} from "./login/login.service";

@NgModule({
    imports: [
        BrowserModule,
        LoginModule,
        CoreModule.forRoot({userName: 'Miss Marple'}),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomepageComponent,
        HeaderComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},LoginService],
    bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule {
}