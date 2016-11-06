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
    saisons: any[];
    loadingSaisons: Boolean;
    selectedSeason : Object;

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
        this.selectedSeason=null;
        this.loadingSaisons = true;
        this.hotelService.getSaisons(this.hotel.id).subscribe(saisons => {
            this.saisons = saisons;
            this.loadingSaisons = false;
        });
    }

    updateSelectedSeasons(id){
        for (let season of this.saisons) {
            if(season.id == id)
            {
                this.selectedSeason=season;
                console.log(this.selectedSeason);
            }
        }
    }
}