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

@NgModule({
  declarations: [
    SearchComponent,
    ListErrorsComponent,
    ReviewListComponent,
    ReviewAddComponent,
    UserNameComponent,
    RatingComponent,
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
    RatingComponent
  ],
})
export class SharedModule {
}
