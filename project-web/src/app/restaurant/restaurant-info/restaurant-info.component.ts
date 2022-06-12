import { Component, OnInit } from '@angular/core';
import {Restaurant, RestaurantService} from "../../core";
import {ActivatedRoute} from "@angular/router";
import {concatMap, map} from "rxjs";

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss']
})
export class RestaurantInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  restaurant!: Restaurant

  ngOnInit(): void {
    this.route.data.pipe(map(value => value['restaurant']))
      .subscribe(restaurant => {
        this.restaurant = restaurant;
      })
  }
}
