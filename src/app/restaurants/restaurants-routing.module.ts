import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { RestaurantMapComponent } from './components/restaurant-map/restaurant-map.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsListComponent
  },
  {
    path: 'map',
    component: RestaurantMapComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
