import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./login/profile/profile.component";

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'hotel', loadChildren: 'app/hotel/hotel.module#HotelModule'},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
