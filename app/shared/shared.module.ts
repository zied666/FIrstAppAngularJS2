import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';

import {AwesomePipe}         from './awesome.pipe';
import {HighlightDirective}  from './highlight.directive';
import {ShowsignePipe} from "./showsigne.pipe";
import {PersonsPipe} from "./persons.pipe";

@NgModule({
    imports: [CommonModule],
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
        FormsModule
    ]
})
export class SharedModule {
}