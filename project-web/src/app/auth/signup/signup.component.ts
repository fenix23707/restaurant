import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

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
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      'login': ['', [Validators.required, Validators.maxLength(50)]],
      'password': ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      'email': ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    });
    console.log(this.signupForm.invalid)
  }


  signup() {
    const data = this.signupForm.value;
    this.errors = {errors: {}};

    this.authService.signup(data)
      .subscribe(
        user => {
          console.log(user)
          this.router.navigateByUrl('/')
        },
        error => {
          this.errors = error;
        })
  }
}
