import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

/* App Root */
import {AppComponent}   from './app.component';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

/* Feature Modules */
import {ContactModule}    from './contact/contact.module';
import {CoreModule}       from './core/core.module';

/* Routing Module */
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from "./header/header.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {LoadingComponent} from "./header/loading.component";

@NgModule({
    imports: [
        BrowserModule,
        ContactModule,
        CoreModule.forRoot({userName: 'Miss Marple'}),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomepageComponent,
        HeaderComponent
    ],
    bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule {
}