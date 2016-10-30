import {Component, Input}   from '@angular/core';
import {Hotel} from "../object/hotel";

@Component({
    moduleId: module.id,
    templateUrl: 'hotel.single.html',
    selector:'list-single-hotel'
})

export class HotelListSingleComponent {
    @Input() hotel: Hotel;
}