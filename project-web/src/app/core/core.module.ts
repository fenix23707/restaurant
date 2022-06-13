import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AlertifyService,
  ApiService,
  AuthService,
  JwtService,
  RestaurantService,
  ReviewService, SchemeService,
  UserInfoService
} from "./services";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpErrorInterceptor, HttpTokenInterceptor} from "./interceptors";
import {UserService} from "./services/user.service";
import {AuthGuard} from "./guards/auth.guard";
import {ReservationService} from "./services/reservation.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    ApiService,
    JwtService,
    AuthService,
    UserService,
    AuthService,
    ReviewService,
    RestaurantService,
    UserInfoService,
    AlertifyService,
    SchemeService,
    ReservationService,
    AuthGuard,
  ]
})
export class CoreModule { }
