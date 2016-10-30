import {Component, OnInit}   from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HotelService} from "../hotel.service";
import {Details} from "../object/hotel";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.detail.html'
})

export class HotelDetailComponent implements OnInit {

    hotel :Details;
    tab:String;
    loadingHotel:boolean;

    constructor(private route: ActivatedRoute,private hotelService: HotelService) {
    }


    ngOnInit() {
        this.tab="home";
        this.loadingHotel=true;
        let id = parseInt(this.route.snapshot.params['id'], 10);
        this.hotelService.getHotel(id).subscribe(hotel => {
            this.hotel = hotel;
            this.loadingHotel=false;
        });
    }

}