import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ListErrorsComponent} from './list-errors/list-errors.component';
import {SearchComponent} from "./search/search.component";
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewAddComponent } from './review/review-add/review-add.component';
import { UserNameComponent } from './details/user-name/user-name.component';
import { RatingComponent } from './details/rating/rating.component';
import { FreeTableCountComponent } from './details/free-table-count/free-table-count.component';
import {RestaurantAvaComponent} from "./details/restaurant-ava/restaurant-ava.component";
import { TableAddComponent } from './table/table-add/table-add.component';
import { PersonalAvaComponent } from './details/personal-ava/personal-ava.component';

@NgModule({
  declarations: [
    SearchComponent,
    ListErrorsComponent,
    ReviewListComponent,
    ReviewAddComponent,
    UserNameComponent,
    RatingComponent,
    FreeTableCountComponent,
    RestaurantAvaComponent,
    TableAddComponent,
    PersonalAvaComponent
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
    ListErrorsComponent,
    ReviewListComponent,
    RatingComponent,
    FreeTableCountComponent,
    ReviewAddComponent,
    RestaurantAvaComponent,
    TableAddComponent,
    PersonalAvaComponent
  ],
})
export class SharedModule {
}
