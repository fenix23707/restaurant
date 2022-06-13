import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {map} from "rxjs";

@Injectable()
export class SchemeService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getSchemeByRestaurantId(restaurantId: number) {
    return this.apiService.get('/schemes/restaurants/' + restaurantId);
  }

  getCountFreeTables(restaurantId: number) {
    return this.apiService.get('/schemes/restaurants/count/' + restaurantId)
      .pipe(map((data: { restaurantId: number, count: number; }) => data.count));

  }
}
