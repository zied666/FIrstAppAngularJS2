import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {HotelComponent} from "./hotel.component";
import {HotelListComponent} from "./list/hotel.list.component";
import {HotelDetailComponent} from "./details/hotel.detail.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '',
      component: HotelComponent,
      children: [
        { path: '',    component: HotelListComponent },
        { path: ':id', component: HotelDetailComponent }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class HotelRoutingModule {}