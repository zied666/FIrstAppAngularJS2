import {Component, Input, OnInit}   from '@angular/core';
import {Search} from "../object/search";
import {HotelService} from "../hotel.service";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.list.single.price.html',
    selector: 'list-single-hotel-price',
})

export class HotelListSinglePriceComponent implements OnInit {
    @Input() id: number;
    @Input() search: Search;
    loading : Boolean;
    error : Boolean;
    arrangements : any;

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
        this.loading=true;
        this.error=false;
        this.hotelService.getPrice(this.id, this.search).subscribe(
            (data) => {
                this.arrangements = data.arrangements;
                this.loading=false;
            },
            (err) => {
                this.error=true;
            },
        );
    }
}