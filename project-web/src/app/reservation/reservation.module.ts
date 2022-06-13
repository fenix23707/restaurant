import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {ReservationCreateComponent} from './reservation-create/reservation-create.component';
import {SharedModule} from "../shared";
import {ReservationRoutingModule} from "./reservation-routing.module";
import {SchemeModule} from "../scheme/scheme.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReservationRoutingModule,
    SchemeModule
  ],
  declarations: [
    ReservationCreateComponent,
  ],

  exports: [
    ReservationCreateComponent
  ],
  providers: [
    DatePipe
  ]
})
export class ReservationModule {
}
