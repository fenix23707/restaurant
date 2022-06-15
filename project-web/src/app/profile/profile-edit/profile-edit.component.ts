import {Component, OnInit} from '@angular/core';
import {AlertifyService, Userinfo, UserInfoService, UserService} from "../../core";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  constructor(
    private userinfoService: UserInfoService,
    private userService: UserService,
    private alertifyService: AlertifyService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }


  userinfo!: Userinfo
  userinfoForm!: FormGroup

  ngOnInit(): void {
    const userId = this.userService.getCurrentUser().id
    this.userinfoService.getUserInfoByUserId(userId).subscribe(value => {
        this.userinfo = value;
        this.initForm();
        console.log(value)
      }, error => {
        this.alertifyService.error(error.message || 'Что-то пошлло не так')
        this.router.navigateByUrl('/profile');
      }
    );

  }

  initForm() {
    this.userinfoForm = this.fb.group({
      name: new FormControl(this.userinfo.name, [Validators.pattern('^[^0-9\\s]+ [^0-9\\s]+$')]),
      birthday: new FormControl(this.userinfo.birthday, []),
      avatar: new FormControl(this.userinfo.avatar, []),
      phone: new FormControl(this.userinfo.phone, []),
      email: new FormControl(this.userinfo.email, [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.userinfoForm.invalid) {
      this.errorHandling();
      return;
    }
    if (!this.userinfo.id) {
      return;
    }
    const data = this.userinfoForm.value;
    console.log(data);
    this.userinfoService.save(this.userinfo.id, data)
      .subscribe(value => {
        this.router.navigateByUrl('/profile')
      }, error => {
        this.alertifyService.error(error.message || 'Что-то пошлло не так')
      })
  }

  errorHandling() {
    const controls = this.userinfoForm.controls;
    if (controls['name'].invalid) {
      this.alertifyService.error('Имя введено не верно. Пример: Имя Фамилия')
    }
    if (controls['adres'].invalid) {
      this.alertifyService.error('Адрес введен не верно.')
    }
  }
}
