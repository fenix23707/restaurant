import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorOpacityDirective } from './directives/color-opacity.directive';
import { WhileDirective } from './directives/while.directive';
import {AppRoutingModule} from "./app-routing.module";
import {PostAddComponent} from "./post-add/post-add.component";
import {PostListComponent} from "./post-list/post-list.component";
import {FormsModule} from "@angular/forms";
import { TrackByDirective } from './directives/track-by.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorOpacityDirective,
    WhileDirective,
    PostAddComponent,
    PostListComponent,
    TrackByDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
