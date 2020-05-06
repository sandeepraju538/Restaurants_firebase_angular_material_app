import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from '../../models/restaurants.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-restaurants-list',
	templateUrl: './restaurants-list.component.html',
	styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {

	restaurants: Restaurant[];
	searchValue: string;
	storedData: Restaurant[];
	constructor(private restaurantService: RestaurantService, private router: Router) { }

	ngOnInit() {
		this.restaurantService.getRestaurantsList().subscribe((data: any) => {
			this.storedData = data.value;
			this.restaurants = this.storedData;
		});
	}

	restaurantTapped(restaurant) {
		localStorage.setItem('selectedRestaurant', JSON.stringify(restaurant));
		this.router.navigate(['/restaurants/map']);
	}

	textChanged() {
		this.restaurants = this.storedData;
		this.restaurants = this.restaurants.filter((restaurant) => {
			return restaurant.name.indexOf(this.searchValue) > -1;
		});
	}

}
