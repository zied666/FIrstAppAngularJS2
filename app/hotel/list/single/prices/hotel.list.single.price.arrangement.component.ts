import {Component, Input, OnInit}   from '@angular/core';
import {Search} from "../../../object/search";
@Component({
    moduleId: module.id,
    templateUrl: 'hotel.list.single.price.arrangement.html',
    selector: 'list-single-hotel-price-arrangement',
})

export class HotelListSinglePriceArrangementComponent implements OnInit {
    @Input() id: number;
    @Input() search: Search;
    @Input() arrangement: any;
    activeRooms:Array<number>;
    total =0;
    ngOnInit() {
        this.activeRooms=[];
        let k=0;
        for (let room of  this.arrangement.rooms) {
            this.activeRooms[k]=0;
            if(room.chambres.length>0)
                this.total += room.chambres[0].data.total;
            k++;
        }
        this.total=Number(this.total.toFixed(3));
    }
    updateActiveRooms(i,j)
    {
        this.activeRooms[i]=j;
        this.total=0;
        let k=0;
        for (let room of  this.arrangement.rooms) {
            if(room.chambres.length>0)
                this.total += room.chambres[this.activeRooms[k]].data.total;
            k++;
        }
        this.total=Number(this.total.toFixed(3));
    }
}