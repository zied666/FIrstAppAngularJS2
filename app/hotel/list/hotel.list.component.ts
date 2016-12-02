import {Component, OnInit}   from '@angular/core';
import {Subscription} from "rxjs";
import {HotelService} from "../hotel.service";
import {Hotel} from "../object/hotel";
import {Search} from "../object/search";
import {Room} from "../object/room";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.list.html',
})

export class HotelListComponent implements OnInit {

    countHotels: number = null;
    hotels: Hotel[];
    search = new Search();
    loadingList: Boolean;
    loadingMore: Boolean;
    haveMore: Boolean;
    subscribe: Subscription;

    constructor(private hotelService: HotelService) {
    }


    ngOnInit() {
        this.subscribe = null;
        this.hotels = [];
        this.haveMore = true;
        this.loadingList = true;
        this.update();
    }

    updateSearch(search: Search) {
        this.search = search;
        this.loadingList = true;
        this.haveMore = true;
        this.hotels = [];
        this.search.offset = 0;
        this.update();
    }

    updateCountHotels() {
        this.countHotels = null;
        this.hotelService.getCount(this.search).subscribe(count => {
            this.countHotels = count;
        });
    }

    update() {
        this.updateCountHotels();
        if (this.subscribe != null)
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
            this.update();
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
        this.updateSearch(this.search);
    }
}