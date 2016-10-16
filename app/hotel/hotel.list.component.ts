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
    search: Object={
        checkIn: new Date(),
        limit: 10,
        offset: 0,
        nuitees: 1,
        nom: null,
        order: "ASC",
        orderBy: "libelle",
        ville: null,
        etoiles: null,
    };
    loadingList: Boolean;

    constructor(private hotelService: HotelService) {
    }

    ngOnInit() {
        /*this.search = {
            checkIn: new Date(),
            limit: 10,
            offset: 0,
            nuitees: 1,
            nom: null,
            order: "ASC",
            orderBy: "libelle",
            ville: null,
            etoiles: null,
        };*/
        this.loadingList = true;
        this.hotelService.getHotels().then(hotels => {
            this.loadingList = false;
            this.hotels = hotels;
        });
        ;
    }
}