import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService, AuthService, JwtService, RestaurantService, ReviewService, UserInfoService} from "./services";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpTokenInterceptor} from "./interceptors";
import {UserService} from "./services/user.service";
import {AuthGuard} from "./guards/auth.guard";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    ApiService,
    JwtService,
    AuthService,
    UserService,
    AuthService,
    ReviewService,
    RestaurantService,
    UserInfoService,
    AuthGuard,
  ]
})
export class CoreModule { }
