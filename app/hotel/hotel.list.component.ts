import {Component, OnInit}   from '@angular/core';
import {HotelService} from "./hotel.service";
import {Hotel} from "./hotel";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.list.html'
})

export class HotelListComponent implements OnInit {

    hotels: Hotel[];
    search: Object;
    loadingList: Boolean;

    constructor(private hotelService: HotelService) {
    }



    ngOnInit() {
        this.search = {
            checkIn: new Date().toISOString().slice(0,10).replace(/-/g,"-"),
            limit: 10,
            offset: 0,
            nuitees: 1,
            nom: "",
            order: "ASC",
            orderBy: "libelle",
            ville: "",
            etoiles: "",
        };
        this.loadingList = true;
        this.hotelService.getHotels(this.search).then(hotels => {
            this.loadingList = false;
            this.hotels = hotels;
        });
        ;
    }
    onChange() {
        this.loadingList = true;
        this.hotels=[];
        this.hotelService.getHotels(this.search).then(hotels => {
            this.loadingList = false;
            this.hotels = hotels;
        });
    }
}