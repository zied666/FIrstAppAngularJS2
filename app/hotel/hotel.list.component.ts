import {Component, OnInit}   from '@angular/core';
import {HotelService} from "./hotel.service";
import {Hotel} from "./hotel";
import {Search} from "./search";
import {Subscription} from "rxjs";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.list.html'
})

export class HotelListComponent implements OnInit {

    hotels: Hotel[];
    search = new Search();
    loadingList: Boolean;
    loadingMore: Boolean;
    haveMore: Boolean;
    subscribe :Subscription;


    constructor(private hotelService: HotelService) {
    }


    ngOnInit() {
        this.subscribe=null;
        this.hotels=[];
        this.haveMore = true;
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
        this.getHotels();
    }

    onChange() {
        this.loadingList = true;
        this.haveMore = true;
        this.hotels = [];
        this.search.offset = 0;
        this.getHotels();
    }

    getHotels() {
        console.log(this.subscribe);
        if(this.subscribe != null)
            this.subscribe.unsubscribe();
        this.subscribe = this.hotelService.getHotels(this.search).subscribe(hotels => {
            this.loadingList = false;
            this.loadingMore = false;
            if (hotels.length > 0)
                this.hotels = this.hotels.concat(hotels);
            else
                this.haveMore = false;
        });
    }

    onScroll() {
        if (!this.loadingList && !this.loadingMore && this.haveMore) {
            this.search.offset += this.search.limit;
            this.loadingMore = true;
            console.log(this.search.offset);
            this.getHotels();
        }
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