import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, Observable, of} from 'rxjs';
import {Scheme, SchemeService} from "../../core";

@Injectable({
  providedIn: 'root'
})
export class SchemeResolver implements Resolve<Scheme> {
  constructor(
    private router: Router,
    private schemeService: SchemeService
  ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.schemeService.getByRestaurantId(route.params['restaurantId']);
  }
}
