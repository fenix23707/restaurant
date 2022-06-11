import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  errors = {errors: {}};

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'login': ['', [Validators.required, Validators.maxLength(50)]],
      'password': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    });
  }

  login() {
    const data = this.loginForm.value;
    this.errors = {errors: {}};

    this.authService.login(data)
      .subscribe(
        user => {
          this.router.navigateByUrl('/')
        },
        error => {
          console.log(error);
          this.errors = error;
        })
  }
}
