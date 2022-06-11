import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {concatMap} from "rxjs";
import {Restaurant, RestaurantService} from "../../core";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants!: Restaurant[]
  defaultImage = "assets/restaurants/default.png";
  constructor(
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    this.restaurantService.getAll()
      .subscribe(data => {
        this.restaurants = data;
      })
  }

  onImgError(event:any) {
    event.target.src = this.defaultImage;
  }

}
