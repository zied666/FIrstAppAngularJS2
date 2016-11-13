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
import {HotelListSingleComponent} from "./list/hotel.list.single.component";
import {LoadingComponent} from "../header/loading.component";
import { AgmCoreModule } from 'angular2-google-maps/core';
import {HotelDetailGeolocationComponent} from "./details/geolocation/hotel.detail.geolocation.component";
import {HotelDetailFicheComponent} from "./details/fiche/hotel.detail.fiche.component";
import {HotelDetailSeasonsComponent} from "./details/saisons/hotel.detail.seasons.component";
import {HotelListSinglePriceComponent} from "./list/hotel.list.single.price.component";

@NgModule({
    imports: [
        SharedModule,
        HotelRoutingModule,
        HttpModule,
        FormsModule,
        InfiniteScrollModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBrmGPKzL57yv1rdDGTFMr0Am6pmZ8t898'
        })
    ],
    declarations: [
        HotelComponent,
        HotelListComponent,
        HotelListSingleComponent,
        HotelListSinglePriceComponent,
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
