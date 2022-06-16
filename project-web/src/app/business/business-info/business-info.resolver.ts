import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, Observable, of, tap} from 'rxjs';
import {Restaurant, RestaurantService, UserService} from "../../core";

@Injectable()
export class BusinessInfoResolver implements Resolve<Restaurant> {

  constructor(
    private router: Router,
    private restaurantService: RestaurantService,
    private userService: UserService
  ) {   }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot
  ): Observable<any> {
    const userId = this.userService.getCurrentUser().id;
    return this.restaurantService.get(route.params['restaurantId'])
      .pipe(tap(value => {
        if (value.user_id != userId) {
          this.router.navigateByUrl('/business')
        }
      }))
      .pipe(catchError(err => this.router.navigateByUrl('/business')))
  }
}
