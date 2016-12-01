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

    countHotels:number=null;
    hotels: Hotel[];
    search = new Search();
    loadingList: Boolean;
    loadingMore: Boolean;
    haveMore: Boolean;
    subscribe: Subscription;
    chambreCount: number;
    room1: Room;
    room2: Room;
    room3: Room;
    room4: Room;
    room5: Room;

    constructor(private hotelService: HotelService) {
    }


    ngOnInit() {
        this.room1 = new Room();
        this.room2 = new Room();
        this.room3 = new Room();
        this.room4 = new Room();
        this.room5 = new Room();
        this.chambreCount = 1;
        this.subscribe = null;
        this.hotels = [];
        this.haveMore = true;
        this.search.checkIn = new Date().toISOString().slice(0, 10).replace(/-/g, "-");
        this.search.limit = 10;
        this.search.offset = 0;
        this.search.nuitees = 1;
        this.search.rooms = "1";
        this.search.nom = "";
        this.search.order = "ASC";
        this.search.orderBy = "libelle";
        this.search.ville = "";
        this.search.etoiles = "";
        this.loadingList = true;
        this.getHotels();
        this.updateCountHotels();
    }


    onChangeCheckIn(event) {
        this.search.checkIn = event;
    }

    onChangeVille(event) {
        this.search.ville = event;
    }

    onChangeNom(event) {
        this.search.nom = event;
    }

    onChange(event = null) {
        this.loadingList = true;
        this.haveMore = true;
        this.hotels = [];
        this.search.offset = 0;
        this.getHotels();
        this.updateCountHotels();
    }

    updateCountHotels(){
        this.countHotels=null;
        this.hotelService.getCount(this.search).subscribe(count => {
            this.countHotels=count;
        });
    }

    getHotels() {
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

    updateRooms() {
        let roomsString = "";
        for (var i = 1; i <= this.chambreCount; i++) {
            roomsString += this["room" + i].countAdult;
            for (var j = 1; j <= this["room" + i].countChild; j++) {
                roomsString += "," + this["room" + i].getAge(j);
            }
            roomsString += ";";
        }
        roomsString = roomsString.substr(0, roomsString.length - 1);
        this.search.rooms=roomsString;
        this.onChange();
    }
}