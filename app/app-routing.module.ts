import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ContactComponent} from "./contact/contact.component";

export const routes: Routes = [
  { path: '',  component: HomepageComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'hotel', loadChildren: 'app/hotel/hotel.module#HotelModule' },
  { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
