import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {AboutRoutingModule} from "./about-routing.module";
import { InfoComponent } from './info/info.component';
import { AchivmentsComponent } from './achivments/achivments.component';



@NgModule({
  declarations: [
    MainComponent,
    InfoComponent,
    AchivmentsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
