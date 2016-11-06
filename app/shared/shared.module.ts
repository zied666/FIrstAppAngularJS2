import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { AwesomePipe }         from './awesome.pipe';
import { HighlightDirective }  from './highlight.directive';
import {ShowsignePipe} from "./showsigne.pipe";

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AwesomePipe,ShowsignePipe, HighlightDirective ],
  exports:      [ AwesomePipe,ShowsignePipe, HighlightDirective,
                  CommonModule, FormsModule ]
})
export class SharedModule { }