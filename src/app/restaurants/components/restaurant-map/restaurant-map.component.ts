import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/restaurants.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-map',
  templateUrl: './restaurant-map.component.html',
  styleUrls: ['./restaurant-map.component.scss']
})
export class RestaurantMapComponent implements OnInit {
  lat;
  lng;
  zoom = 12;
  selectedRestaurant: Restaurant;
  editRestaurant = false;
  editForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.selectedRestaurant = JSON.parse(localStorage.getItem('selectedRestaurant'));
    this.lat = this.selectedRestaurant.location.lat;
    this.lng = this.selectedRestaurant.location.long;
    this.createEditFormBuilder();
  }

  editDetails() {
    this.editRestaurant = true;
  }

  get formControls() { return this.editForm.controls; }

  createEditFormBuilder() {
    this.editForm = this.formBuilder.group({
      name: [this.selectedRestaurant !== null ? this.selectedRestaurant.name : '', Validators.required],
      description: [this.selectedRestaurant !== null ? this.selectedRestaurant.description : '', Validators.required],
      logo: [this.selectedRestaurant !== null ? this.selectedRestaurant.logo : '', Validators.required],
      lat: [this.selectedRestaurant !== null ? this.selectedRestaurant.location.lat : '', Validators.required],
      long: [this.selectedRestaurant !== null ? this.selectedRestaurant.location.long : '', Validators.required],
    });
  }

  saveDetails() {
    const restaurantList = localStorage.getItem('restaurantsList');
    let filteredRestaurant = [];
    if (restaurantList && restaurantList !== '') {
      filteredRestaurant = Object.values(JSON.parse(restaurantList));
      filteredRestaurant.map((restaurant) => {
        if (restaurant.name === this.selectedRestaurant.name) {
          restaurant.name = this.editForm.value.name;
          restaurant.logo = this.editForm.value.logo;
          restaurant.description = this.editForm.value.description;
          restaurant.location = {
            lat: this.editForm.value.lat,
            long: this.editForm.value.long
          };
        }
      });
      console.log(filteredRestaurant);
      this.restaurantService.updateRestaurantsList(filteredRestaurant).then((data: any) => {
        console.log(data);
        localStorage.setItem('restaurantsList', JSON.stringify(filteredRestaurant));
        this.router.navigate(['/restaurants']);
      });
    }
  }

}
