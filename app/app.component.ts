import {Component, OnInit} from '@angular/core';
import {TranslateService} from "ng2-translate";
declare var $: any

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {


  ngOnInit() {

    $('body').addClass('loaded');

  }
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}