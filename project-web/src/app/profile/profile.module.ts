import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from "./profile-routing.module";
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import {SharedModule} from "../shared";


@NgModule({
  declarations: [
    ProfileInfoComponent
  ],
    imports: [
        ProfileRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class ProfileModule {
}
