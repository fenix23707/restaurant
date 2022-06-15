import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertifyService, Restaurant, RestaurantService, Scheme, SchemeElement} from "../../core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-business-add',
  templateUrl: './business-add.component.html',
  styleUrls: ['./business-add.component.scss']
})
export class BusinessAddComponent implements OnInit {

  constructor(
    private restaurantService: RestaurantService,
    private fb: FormBuilder,
    private router: Router,
    private alertifyService: AlertifyService
  ) {
  }

  restaurantForm!: FormGroup
  schemeElement!: SchemeElement

  ngOnInit(): void {
    this.restaurantForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      adres: new FormControl('', [Validators.required,/* Validators.pattern(/^([^,^0-9]+, ){3}\d{1,3}$/)*/]),
      avatar: new FormControl(''),
    })
  }

  onSubmit() {
    if (this.restaurantForm.invalid) {
      this.formErrorHandling();
      return
    }
    const data = this.restaurantForm.value;
    const restaurant = {
      name: data.name,
      adres: data.adres,
      avatar: data.avatar,
      scheme: this.schemeElement?.getScheme() || {width: 800, height: 300, tables: []},
    }
    console.log(restaurant)
    this.restaurantService.create(restaurant)
      .subscribe(value => {
          this.alertifyService.success('Ресторан сохранен');
          this.router.navigateByUrl('/business');
        },
        error => {
          this.alertifyService.error(error.message());
        }
      );
  }

  onSchemeChanged(schemeElement: SchemeElement) {
    this.schemeElement = schemeElement;
  }

  formErrorHandling() {
    const controls = this.restaurantForm.controls;
    if (controls['name'].invalid) {
      this.alertifyService.error('Имя введено не верно')
    }
    if (controls['adres'].invalid) {
      this.alertifyService.error('Адрес введен не верно.')
    }
  }
}
