import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {JwtService} from "./jwt.service";
import {Restaurant, User, UserData} from "../models";
import {map, Observable} from "rxjs";

@Injectable()
export class RestaurantService {
  constructor(
    private apiService: ApiService,
  ) { }

  getAll(): Observable<Restaurant[]> {
    return this.apiService.get('/restaurants');
  }
}
