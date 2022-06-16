import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list/business-list.component';
import {BusinessRoutingModule} from "./business-routing.module";
import {SharedModule} from "../shared";
import { BusinessAddComponent } from './business-add/business-add.component';
import {SchemeModule} from "../scheme/scheme.module";
import { BusinessInfoComponent } from './business-info/business-info.component';
import {BusinessInfoResolver} from "./business-info/business-info.resolver";
import {RestaurantModule} from "../restaurant/restaurant.module";
import {ReservationModule} from "../reservation/reservation.module";



@NgModule({
  declarations: [
    BusinessListComponent,
    BusinessAddComponent,
    BusinessInfoComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule,
    SchemeModule,
    RestaurantModule,
    ReservationModule
  ],
  providers: [
    BusinessInfoResolver
  ],
})
export class BusinessModule { }
