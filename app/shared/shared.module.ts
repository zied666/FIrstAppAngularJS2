import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';

import {AwesomePipe}         from './awesome.pipe';
import {HighlightDirective}  from './highlight.directive';
import {ShowsignePipe} from "./showsigne.pipe";
import {PersonsPipe} from "./persons.pipe";
import {TranslateModule} from "ng2-translate";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot(),
    ],
    declarations: [
        AwesomePipe,
        PersonsPipe,
        ShowsignePipe,
        HighlightDirective
    ],
    exports: [
        PersonsPipe,
        AwesomePipe,
        ShowsignePipe,
        HighlightDirective,
        CommonModule,
        FormsModule,
        TranslateModule
    ]
})
export class SharedModule {
}