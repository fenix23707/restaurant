import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, take} from 'rxjs';
import {UserService} from "../services";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.userService.isAuthenticated.subscribe(isAuth => {
      if (!isAuth) {
        this.router.navigateByUrl('/login')
      }
    })
    return this.userService.isAuthenticated.pipe();
  }

}
