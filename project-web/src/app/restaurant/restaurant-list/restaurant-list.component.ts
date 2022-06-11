import {Component, Input, OnInit} from '@angular/core';
import {Restaurant, RestaurantListConfig, RestaurantService} from "../../core";
import {PaginatePipeArgs} from "ngx-pagination";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  defaultImage = "assets/restaurants/default.png";
  pagination : PaginatePipeArgs = {
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: 6
  }
  restaurants!: Restaurant[]
  listConfig: RestaurantListConfig = {filters: {}};

  pageChange(page: number) {
    this.pagination.currentPage = page;
    this.runQuery();
  }

  constructor(
    private restaurantService: RestaurantService
  ) {
  }

  ngOnInit(): void {
    this.runQuery()
  }

  runQuery() {
    this.restaurants = [];

    this.listConfig.filters.pageNum = Number(this.pagination.currentPage);
    this.listConfig.filters.pageSize = Number(this.pagination.itemsPerPage);

    this.restaurantService.query(this.listConfig)
      .subscribe(
        data => {
          this.restaurants = data.restaurants;
          this.pagination.totalItems = data.totalSize;
        },
        error => {
          console.log(error)
        }
      )
  }

  getImage(restaurant: Restaurant) {
    return restaurant.avatar ? restaurant.avatar : this.defaultImage;
  }

  onSearchTextEntered(name: string) {
    this.listConfig.filters.name = name;
    this.runQuery();
  }
}
