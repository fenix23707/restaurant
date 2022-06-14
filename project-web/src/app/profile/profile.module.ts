import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from "./profile-routing.module";
import { ProfileInfoComponent } from './profile-info/profile-info.component';


@NgModule({
  declarations: [
    ProfileInfoComponent
  ],
  imports: [
    ProfileRoutingModule,
    CommonModule
  ]
})
export class ProfileModule {
}
