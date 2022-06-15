import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertifyService, AuthService} from "../../core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  errors = { errors: {} };

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private alertifyService: AlertifyService
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      'login': ['', [Validators.required, Validators.maxLength(50)]],
      'password': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      'email': ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    });
  }


  signup() {
    if (this.signupForm.invalid) {
      this.errorHandling();
      return;
    }

      const data = this.signupForm.value;

    this.authService.signup(data)
      .subscribe(
        user => {
          console.log(user)
          this.router.navigateByUrl('/')
        },
        error => {
          this.alertifyService.error(error.message || 'что-то пошло не так');
        })
  }

  errorHandling() {
    const controls = this.signupForm.controls;
    if (controls['login'].invalid) {
      this.alertifyService.error('Логин введен не верно');
    }
    if (controls['password'].invalid) {
      this.alertifyService.error('Пароль введен не верно');
    }
    if (controls['email'].invalid) {
      this.alertifyService.error('Email введен не верно');
    }
  }
}
