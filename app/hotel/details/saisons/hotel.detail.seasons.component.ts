import {Component, Input, OnInit}   from '@angular/core';
import {Details} from "../../object/hotel";
import {HotelService} from "../../hotel.service";
@Component({
    moduleId: module.id,
    templateUrl: "hotel.detail.seasons.html",
    selector: "hotel-seasons"
})

export class HotelDetailSeasonsComponent implements OnInit {
    @Input() hotel: Details;
    saisons: Object[];
    loadingSaisons: Boolean;

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
        this.loadingSaisons = true;
        this.hotelService.getSaisons(this.hotel.id).subscribe(saisons => {
            this.saisons = saisons;
            this.loadingSaisons = false;
            console.log(saisons);
        });
    }

}