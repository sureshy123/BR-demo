import { NgModule }    from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { InternetsComponent } from './components/internets/internets.component';


const routes: Routes = [
  { path: 'lunch', component: RestaurantListComponent },
  { path: 'internets', component: InternetsComponent },
  { path: '**', redirectTo: '/lunch', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}