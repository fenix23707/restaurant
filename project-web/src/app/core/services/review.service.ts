import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map} from "rxjs";

@Injectable()
export class ReviewService {

  constructor(
    private apiService: ApiService
  ) { }

  getAllByRestaurantId(restaurantId: number | string) {
    return this.apiService.get('/reviews/restaurants/' + restaurantId);
  }

  getRating(restaurantId: number | string) {
    return this.apiService.get('/reviews/restaurants/rating/' + restaurantId)
    .pipe(map((data: { restaurantId: number, rating: number }) => data.rating));
  }
}
