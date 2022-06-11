import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ListErrorsComponent} from './list-errors/list-errors.component';
import {SearchComponent} from "./search/search.component";

@NgModule({
  declarations: [
    SearchComponent,
    ListErrorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SearchComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent
  ],
})
export class SharedModule {
}
