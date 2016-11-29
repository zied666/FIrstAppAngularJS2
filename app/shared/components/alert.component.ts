import {Component, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';

@Component({
    selector: 'alert',
    template: `
            <div *ngIf="view"  class="alert alert-{{class}}" role="alert">
                <strong>{{class.toUpperCase()}}:</strong>
                {{ text|translate }}
            </div>    
`
})
export class AlertComponent implements OnInit{
    @Input() class: String; //success,info,warning and danger
    @Input() view: Boolean;
    @Input() text: String;

    ngOnInit() {
        if(this.view)
            setTimeout(() => this.view = false, 3000);
    }
}