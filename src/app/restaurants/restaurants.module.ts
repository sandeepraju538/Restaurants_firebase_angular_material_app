import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestaurantMapComponent } from './components/restaurant-map/restaurant-map.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RestaurantsListComponent, RestaurantMapComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RestaurantsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6aArjyo6j2PRln-zXuM65OU9yA8WyUn0'
    })
  ]
})
export class RestaurantsModule { }
