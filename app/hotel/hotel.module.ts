import {NgModule}            from '@angular/core';

import {SharedModule}        from '../shared/shared.module';
import {HotelRoutingModule} from "./hotel-routing.module";
import {HotelComponent} from "./hotel.component";
import {HotelService} from "./hotel.service";
import {HttpModule}    from '@angular/http';
import {FormsModule} from "@angular/forms";
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import {HotelDetailComponent} from "./details/hotel.detail.component";
import {HotelListComponent} from "./list/hotel.list.component";
import {HotelDetailGeolocationComponent} from "./details/hotel.detail.geolocation.component";
import {HotelDetailSeasonsComponent} from "./details/hotel.detail.seasons.component";
import {HotelDetailFicheComponent} from "./details/hotel.detail.fiche.component";
import {HotelListSingleComponent} from "./list/hotel.list.single.component";
import {LoadingComponent} from "../header/loading.component";

@NgModule({
    imports: [
        SharedModule,
        HotelRoutingModule,
        HttpModule,
        FormsModule,
        InfiniteScrollModule
    ],
    declarations: [
        HotelComponent,
        HotelListComponent,
        HotelListSingleComponent,
        HotelDetailComponent,
        HotelDetailGeolocationComponent,
        HotelDetailFicheComponent,
        HotelDetailSeasonsComponent,
        LoadingComponent
    ],
    providers: [HotelService]
})
export class HotelModule {
}
