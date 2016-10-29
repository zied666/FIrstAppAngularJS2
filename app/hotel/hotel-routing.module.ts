import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import {HotelComponent} from "./hotel.component";
import {HotelListComponent} from "./hotel.list.component";
import {HotelDetailComponent} from "./hotel.detail.component";

const routes: Routes = [
  { path: '',
    component: HotelComponent,
    children: [
      { path: '',    component: HotelListComponent },
      { path: ':id', component: HotelDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule {}