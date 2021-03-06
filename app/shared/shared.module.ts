import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {TranslateModule} from "ng2-translate";
import {AwesomePipe} from "./pipes/awesome.pipe";
import {PersonsPipe} from "./pipes/persons.pipe";
import {ShowsignePipe} from "./pipes/showsigne.pipe";
import {HighlightDirective} from "./directives/highlight.directive";
import {LoadingComponent} from "./components/loading.component";
import {AlertComponent} from "./components/alert.component";
import {LocalStorageService} from "./services/localStorage.service";
import {StateDirective} from "./directives/state.directive";
import {HotelService} from "./services/hotel.service";
import {SearchService} from "./services/search.service";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot(),
    ],
    declarations: [
        AwesomePipe,
        PersonsPipe,
        ShowsignePipe,
        HighlightDirective,
        LoadingComponent,
        AlertComponent,
        StateDirective
    ],
    exports: [
        PersonsPipe,
        AwesomePipe,
        ShowsignePipe,
        HighlightDirective,
        CommonModule,
        FormsModule,
        TranslateModule,
        LoadingComponent,
        AlertComponent,
        StateDirective
    ],
    providers: [
        LocalStorageService,
        HotelService,
        SearchService
    ]
})
export class SharedModule {
}