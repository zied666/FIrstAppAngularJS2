// Exact copy except import UserService from core
import {Component, OnInit}   from '@angular/core';
import {HotelService} from "./hotel.service";
import {Hotel} from "./hotel";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.list.html'
})
export class HotelListComponent implements OnInit {

    hotels: Hotel[];
    loadingList: Boolean;

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
        this.loadingList = true;
        this.hotelService.getHotels().then(hotels => {
            this.loadingList = false;
            this.hotels = hotels;
        });
        ;
    }
}