import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from "./profile-routing.module";
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import {SharedModule} from "../shared";
import {ReservationModule} from "../reservation/reservation.module";
import { ProfileEditComponent } from './profile-edit/profile-edit.component';


@NgModule({
  declarations: [
    ProfileInfoComponent,
    ProfileEditComponent
  ],
    imports: [
        ProfileRoutingModule,
        CommonModule,
        SharedModule,
        ReservationModule
    ]
})
export class ProfileModule {
}
