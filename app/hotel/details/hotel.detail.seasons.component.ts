import {Component, Input}   from '@angular/core';
import {Details} from "../object/hotel";
@Component({
    template: "saisons",
    selector:"hotel-seasons"
})

export class HotelDetailSeasonsComponent  {
    @Input() hotel: Details;

}