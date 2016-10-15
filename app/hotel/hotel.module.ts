import { NgModule }            from '@angular/core';

import { SharedModule }        from '../shared/shared.module';
import {HotelRoutingModule} from "./hotel-routing.module";
import {HotelComponent} from "./hotel.component";
import {HotelListComponent} from "./hotel.list.component";

@NgModule({
  imports: [ SharedModule, HotelRoutingModule ],
  declarations: [
    HotelComponent, HotelListComponent,
  ]
})
export class HotelModule { }
