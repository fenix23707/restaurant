import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {SharedModule} from "../shared";
import {RestaurantRoutingModule} from "./restaurant-routing.module";
import {NgxPaginationModule} from "ngx-pagination";
import { RestaurantInfoComponent } from './restaurant-info/restaurant-info.component';
import { RestaurantAvaComponent } from './restaurant-ava/restaurant-ava.component';
import {RestaurantInfoResolver} from "./restaurant-info/restaurant-info.resolver";
import { RestaurantRatingComponent } from './restaurant-rating/restaurant-rating.component';


@NgModule({
  imports: [
    SharedModule,
    RestaurantRoutingModule,
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [
    RestaurantListComponent,
    RestaurantInfoComponent,
    RestaurantAvaComponent,
    RestaurantRatingComponent,
  ],
  providers: [
    RestaurantInfoResolver
  ]
})
export class RestaurantModule { }
