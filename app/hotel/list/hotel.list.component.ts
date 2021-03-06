import {Component, OnInit}   from '@angular/core';
import {Subscription} from "rxjs";
import {Hotel} from "../object/hotel";
import {HotelService} from "../../shared/services/hotel.service";
import {SearchService} from "../../shared/services/search.service";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.list.html',
})

export class HotelListComponent implements OnInit {

    countHotels: number = null;
    hotels: Hotel[];
    loadingList: Boolean;
    loadingMore: Boolean;
    haveMore: Boolean;
    subscribe: Subscription;

    constructor(private hotelService: HotelService, private searchService: SearchService) {
    }


    ngOnInit() {
        this.subscribe = null;
        this.hotels = [];
        this.haveMore = true;
        this.loadingList = true;
        this.updateCountHotels();
        this.update();
    }

    updateSearch(updateCount: Boolean) {
        this.loadingList = true;
        this.haveMore = true;
        this.hotels = [];
        this.searchService.resetOffset();
        if (updateCount)
            this.updateCountHotels();
        this.update();
    }

    updateCountHotels() {
        this.countHotels = null;
        this.hotelService.getCount().subscribe(count => {
            this.countHotels = count;
        });
    }

    update() {
        if (this.subscribe != null)
            this.subscribe.unsubscribe();
        this.subscribe = this.hotelService.getHotels().subscribe(hotels => {
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
            this.searchService.incrementLimit();
            this.loadingMore = true;
            this.update();
        }
    }

}