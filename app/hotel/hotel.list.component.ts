import {Component, OnInit}   from '@angular/core';
import {HotelService} from "./hotel.service";
import {Hotel} from "./hotel";
import {Search} from "./search";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.list.html'
})

export class HotelListComponent implements OnInit {

    hotels: Hotel[];
    search = new  Search();
    loadingList: Boolean;

    constructor(private hotelService: HotelService) {
    }


    ngOnInit() {
        this.search.checkIn = new Date().toISOString().slice(0, 10).replace(/-/g, "-");
        this.search.limit = 10;
        this.search.offset = 0;
        this.search.nuitees = 1;
        this.search.nom = "";
        this.search.order = "ASC";
        this.search.orderBy = "libelle";
        this.search.ville = "";
        this.search.etoiles = "";
        this.loadingList = true;
        this.hotelService.getHotels(this.search).then(hotels => {
            this.loadingList = false;
            this.hotels = hotels;
        });
        ;
    }

    onChange() {
        this.loadingList = true;
        this.hotels = [];
        this.search.offset = 0;
        this.hotelService.getHotels(this.search).then(hotels => {
            this.loadingList = false;
            this.hotels = hotels;
        });
    }

    onScroll() {
        console.log('scrolled!!')
    }

    updateSort(lib: string) {
        if (lib == this.search.orderBy) {
            if (this.search.order == "DESC")
                this.search.order = "ASC";
            else
                this.search.order = "DESC";
        }
        else
            this.search.orderBy = lib;
        this.onChange();
    }
}