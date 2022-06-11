import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {SharedModule} from "../shared";
import {RestaurantRoutingModule} from "./restaurant-routing.module";



@NgModule({
  imports: [
    SharedModule,
    RestaurantRoutingModule,
    CommonModule
  ],
  declarations: [
    RestaurantListComponent
  ],
})
export class RestaurantModule { }
