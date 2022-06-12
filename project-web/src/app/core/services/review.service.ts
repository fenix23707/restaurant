import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {map} from "rxjs";
import {Review} from "../models";

@Injectable()
export class ReviewService {

  constructor(
    private apiService: ApiService
  ) {
  }

  save(review: Review) {
    if (review.id) {
      return this.update(review);
    } else {
      return this.create(review);
    }
  }


  getByUserAndRestaurant(userId: number, restaurantId: number) {
    return this.apiService.get('/reviews/users/' + userId + '/restaurants/' + restaurantId);
  }

  getAllByRestaurantId(restaurantId: number | string) {
    return this.apiService.get('/reviews/restaurants/' + restaurantId);
  }

  getRating(restaurantId: number | string) {
    return this.apiService.get('/reviews/restaurants/rating/' + restaurantId)
      .pipe(map((data: { restaurantId: number, rating: number }) => data.rating));
  }

  private create(review: Review) {
    const body = {
      rate: review.rate,
      review: review.review,
      restaurant_id: review.restaurantId,
    }

    return this.apiService.post('/reviews', body);
  }

  private update(review: Review) {
    const body = {
      rate: review.rate,
      review: review.review
    }
    return this.apiService.put('/reviews/' + review.id, body);
  }
}
