import {Component, Input, OnInit}   from '@angular/core';
import {Search} from "../object/search";
import {HotelService} from "../hotel.service";

@Component({
    moduleId: module.id,
    template: '<h4><strong *ngIf="!loading">{{ price }}</strong></h4>',
    selector: 'list-single-hotel-price',
})

export class HotelListSinglePriceComponent implements OnInit {
    @Input() id: number;
    @Input() search: Search;
    price: String;

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
        this.price="loading ...";
        this.hotelService.getPrice(this.id, this.search).subscribe(
            (data) => {
                this.price = data.total + " DT";
            },
            (err) => {
                this.price = "Erreur";
            },
        );
    }
}