import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {Restaurant, User, UserData} from "../models";
import {map, Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {RestaurantListConfig} from "../models/restaurant-list-config.model";

@Injectable()
export class RestaurantService {
  constructor(
    private apiService: ApiService,
  ) { }

  query(config: RestaurantListConfig): Observable<Restaurant[]> {
    const params = {};

Object.keys(config.filters)
  .forEach(key => {
    // @ts-ignore
    params[key] = config.filters[key];
  })

    return this.apiService.get('/restaurants', new HttpParams({fromObject: params}));
  }
}
