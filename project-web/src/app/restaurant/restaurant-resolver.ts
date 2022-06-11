import {Injectable} from "@angular/core";
import {Restaurant, RestaurantService} from "../core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {catchError, Observable} from "rxjs";

@Injectable()
export class RestaurantResolver implements Resolve<Restaurant>{
  constructor(
    private restaurantService: RestaurantService,
    private router: Router
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.restaurantService.getAll()
      .pipe(catchError((err => this.router.navigateByUrl('/'))))
  }



}
