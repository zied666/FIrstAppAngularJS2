import {Component, OnInit} from '@angular/core';
declare var $: any

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {


  ngOnInit() {

    $('body').addClass('loaded');

  }
}