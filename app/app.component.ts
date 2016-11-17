import {Component, ElementRef, OnInit} from '@angular/core';
declare var $: any

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private el: ElementRef) {
  }

  public ngOnInit() {
    //$(this.el.nativeElement).dropdown();
    $('body').addClass('loaded');
    $('h1').css('color','#222222');
  }
}