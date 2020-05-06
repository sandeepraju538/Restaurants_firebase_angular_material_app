import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from './../restaurants/models/restaurants.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  _URL = './assets/data/public-restaurants.json';
  private dbPath = '/restaurants';
  restaurantRef: AngularFireObject<Restaurant> = null;

  constructor(private httpClient: HttpClient, private db: AngularFireDatabase) {
    this.restaurantRef = db.object(this.dbPath);
  }

  getRestaurantListData() {
    return this.httpClient.get(this._URL);
  }

  getRestaurantsList(): Observable<any> {
    let result;
    const restaurantsList = localStorage.getItem('restaurantsList');
    if (restaurantsList && restaurantsList !== '') {
      result = Object.values(JSON.parse(restaurantsList));
      return of({ value: result });
    }
    return this.getRestaurantListData().pipe(map((data) => {
      result = Object.values(data);
      localStorage.setItem('restaurantsList', JSON.stringify(data));
      return of(result);
    }));
  }

  updateRestaurantsList(data) {
    return this.restaurantRef.update(data);
  }
}
