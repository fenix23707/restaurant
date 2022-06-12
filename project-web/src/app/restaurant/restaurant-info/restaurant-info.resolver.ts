import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, Observable, of} from 'rxjs';
import {Restaurant, RestaurantService} from "../../core";

@Injectable()
export class RestaurantInfoResolver implements Resolve<Restaurant> {

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {   }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<any> {
    return this.restaurantService.get(route.params['restaurantId'])
      .pipe(catchError(err => this.router.navigateByUrl('/')))
  }
}
