import { Component, OnInit } from '@angular/core';
import {Restaurant, RestaurantService, UserService} from "../../core";

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent implements OnInit {

  constructor(
    private userService: UserService,
    private restaurantService: RestaurantService
  ) { }

  restaurants: Restaurant[] = []

  ngOnInit(): void {
    const userId = this.userService.getCurrentUser().id;
    this.restaurantService.getAllByUserId(userId)
      .subscribe(value => {
        this.restaurants = value;
      })
  }

}
