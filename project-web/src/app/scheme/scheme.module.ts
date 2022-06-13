import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchemeViewComponent} from "./scheme-view/scheme-view.component";



@NgModule({
  declarations: [
    SchemeViewComponent
  ],
  exports: [
    SchemeViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SchemeModule { }
