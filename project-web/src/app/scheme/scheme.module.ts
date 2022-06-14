import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchemeViewComponent} from "./scheme-view/scheme-view.component";
import { SchemeAddComponent } from './scheme-add/scheme-add.component';
import {SharedModule} from "../shared";



@NgModule({
  declarations: [
    SchemeViewComponent,
    SchemeAddComponent
  ],
  exports: [
    SchemeViewComponent,
    SchemeAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SchemeModule { }
