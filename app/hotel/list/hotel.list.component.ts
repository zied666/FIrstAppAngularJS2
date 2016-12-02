import {Component, OnInit}   from '@angular/core';
import {Subscription} from "rxjs";
import {Hotel} from "../object/hotel";
import {Search} from "../object/search";
import {HotelService} from "../../shared/services/hotel.service";

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
        this.updateCountHotels();
        this.update();
    }

    updateSearch(search: Search) {
        this.search = search;
        this.loadingList = true;
        this.haveMore = true;
        this.hotels = [];
        this.search.offset = 0;
        this.updateCountHotels();
        this.update();
    }

    updateCountHotels() {
        this.countHotels = null;
        this.hotelService.getCount(this.search).subscribe(count => {
            this.countHotels = count;
        });
    }

    update() {
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

}