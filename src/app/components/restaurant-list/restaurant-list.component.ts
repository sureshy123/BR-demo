import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor (private http: HttpClient, private data: DataService) {
    this.getRestaurants();
  };
  ngOnInit() {
  }
  isListView: boolean = true;
  restaurants:[];
  selectedRestaurant: {};

  getRestaurants(){
    this.http.get<any>('https://s3.amazonaws.com/br-codingexams/restaurants.json').subscribe(data => {
      console.log('$$$',data);
      this.restaurants = data.restaurants;
    })
  };

  showDetails(rest: any) {
    console.log('rest $', rest);
    this.isListView = false;
    this.selectedRestaurant = rest;
    this.data.isDetails = true;
  }

}
