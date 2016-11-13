import {Component, Input, trigger, state, transition, animate, style, OnInit}   from '@angular/core';
import {Hotel} from "../object/hotel";
import {Search} from "../object/search";
import {HotelService} from "../hotel.service";

@Component({
    moduleId: module.id,
    template: '<h3><img *ngIf="loading" src="https://nashaplaneta.net/images/loading.gif" /><strong *ngIf="!loading">{{ price }}</strong></h3>',
    selector: 'list-single-hotel-price',
})

export class HotelListSinglePriceComponent implements OnInit {
    @Input() id: number;
    @Input() search: Search;
    loading: Boolean;
    price: String;

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
        this.loading = true;
        this.hotelService.getPrice(this.id, this.search, "2").subscribe(
            data => {
                this.price = data.total + " DT";
                this.loading = false;
            },
            err => this.price="eeeeeeee",
        );
    }
}