import {Component, Input}   from '@angular/core';
import {Details} from "../object/hotel";
@Component({
    moduleId: module.id,
    templateUrl:'hotel.detail.fiche.html',
    selector:"hotel-fiche"
})

export class HotelDetailFicheComponent  {
    @Input() hotel: Details;

}