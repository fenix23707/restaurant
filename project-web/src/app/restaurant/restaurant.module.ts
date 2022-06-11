import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import {SharedModule} from "../shared";
import {RestaurantRoutingModule} from "./restaurant-routing.module";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  imports: [
    SharedModule,
    RestaurantRoutingModule,
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [
    RestaurantListComponent,
  ],
})
export class RestaurantModule { }
