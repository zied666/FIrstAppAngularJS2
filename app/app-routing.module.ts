import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./login/profile/profile.component";
import {HotelListComponent} from "./hotel/list/hotel.list.component";
import {HotelDetailComponent} from "./hotel/details/hotel.detail.component";

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'hotel', component: HotelListComponent},
    {path: 'hotel/:id', component: HotelDetailComponent},
    //{path: 'hotel', loadChildren: 'app/hotel/hotel.module#HotelModule'},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
