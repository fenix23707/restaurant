import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from "./auth-routing.module";
import { SignupComponent } from './signup/signup.component';
import {SharedModule} from "../shared";



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule { }
