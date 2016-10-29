import {NgModule}            from '@angular/core';

import {SharedModule}        from '../shared/shared.module';
import {HotelRoutingModule} from "./hotel-routing.module";
import {HotelComponent} from "./hotel.component";
import {HotelListComponent} from "./hotel.list.component";
import {HotelService} from "./hotel.service";
import {HttpModule}    from '@angular/http';
import {FormsModule} from "@angular/forms";
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {HotelDetailComponent} from "./hotel.detail.component";
import {HotelDetailGeolocationComponent} from "./hotel.detail.geolocation.component";
import {HotelDetailFicheComponent} from "./hotel.detail.fiche.component";
import {HotelDetailSeasonsComponent} from "./hotel.detail.seasons.component";
@NgModule({
    imports: [SharedModule, HotelRoutingModule, HttpModule,FormsModule,InfiniteScrollModule ],
    declarations: [
        HotelComponent, HotelListComponent,HotelDetailComponent,HotelDetailGeolocationComponent,HotelDetailFicheComponent,HotelDetailSeasonsComponent
    ],
    providers: [HotelService]
})
export class HotelModule {
}
