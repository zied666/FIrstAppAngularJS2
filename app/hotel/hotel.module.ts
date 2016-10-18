import {NgModule}            from '@angular/core';

import {SharedModule}        from '../shared/shared.module';
import {HotelRoutingModule} from "./hotel-routing.module";
import {HotelComponent} from "./hotel.component";
import {HotelListComponent} from "./hotel.list.component";
import {HotelService} from "./hotel.service";
import {HttpModule}    from '@angular/http';
import {FormsModule} from "@angular/forms";
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
@NgModule({
    imports: [SharedModule, HotelRoutingModule, HttpModule,FormsModule,InfiniteScrollModule ],
    declarations: [
        HotelComponent, HotelListComponent,
    ],
    providers: [HotelService]
})
export class HotelModule {
}
