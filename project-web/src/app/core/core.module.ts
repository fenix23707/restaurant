import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService, AuthService, JwtService} from "./services";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    ApiService,
    JwtService
  ]
})
export class CoreModule { }
