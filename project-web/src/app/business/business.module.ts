import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list/business-list.component';
import {BusinessRoutingModule} from "./business-routing.module";
import {SharedModule} from "../shared";
import { BusinessAddComponent } from './business-add/business-add.component';



@NgModule({
  declarations: [
    BusinessListComponent,
    BusinessAddComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule
  ]
})
export class BusinessModule { }
