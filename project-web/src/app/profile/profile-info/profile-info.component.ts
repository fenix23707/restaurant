import {Component, OnInit} from '@angular/core';
import {User, Userinfo, UserInfoService, UserService} from "../../core";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  constructor(
    private userinfoService: UserInfoService,
    private userService: UserService
  ) {
  }

  userinfo!: Userinfo;
  user: User = this.userService.getCurrentUser();

  ngOnInit(): void {
    const userId = this.userService.getCurrentUser().id;
    this.userinfoService.getUserInfoByUserId(userId, )
      .subscribe(value => {
        this.userinfo = value;
      })
  }

  onLogout() {
    this.userService.cleanAuth();
  }

  getRole() {
    if (this.user.role == 0) {
      return 'Пользователь';
    } else if (this.user.role == 1) {
      return 'Менеджер';
    } else {
      return 'Администратор';
    }
  }



}
