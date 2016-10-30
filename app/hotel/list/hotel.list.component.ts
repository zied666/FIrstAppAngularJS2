import {Component, OnInit}   from '@angular/core';
import {Subscription} from "rxjs";

import {HotelService} from "../hotel.service";
import {Hotel} from "../object/hotel";
import {Search} from "../object/search";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.list.html',
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


    onChangeCheckIn(event)
    {
        this.search.checkIn=event;
        this.onChange();
    }

    onChangeVille(event)
    {
        this.search.ville=event;
        this.onChange();
    }

    onChangeNom(event)
    {
        this.search.nom=event;
        this.onChange();
    }

    onChange(event=null) {
        this.loadingList = true;
        this.haveMore = true;
        this.hotels = [];
        this.search.offset = 0;
        this.getHotels();
    }

    getHotels() {
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
        this.onChange(null);
    }
}