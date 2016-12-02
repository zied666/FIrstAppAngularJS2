import {Component, OnInit, Input, Output, EventEmitter}   from '@angular/core';
import {Search} from "../../object/search";
import {Room} from "../../object/room";

@Component({
    moduleId: module.id,
    selector: 'hotel-list-search',
    templateUrl: 'hotel.list.search.html',
})

export class HotelListSearchComponent implements OnInit {

    @Input() search: Search;
    @Output() sendSearch = new EventEmitter();
    chambreCount: number;
    room1: Room;
    room2: Room;
    room3: Room;
    room4: Room;
    room5: Room;

    ngOnInit() {
        this.chambreCount = 1;
        this.room1 = new Room();
        this.room2 = new Room();
        this.room3 = new Room();
        this.room4 = new Room();
        this.room5 = new Room();
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
        this.sendSearch.emit(this.search);
    }

}