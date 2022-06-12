import {Component, Input, OnInit} from '@angular/core';
import {UserInfoService} from "../../../core/services/user-info.service";

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {

  constructor(
    private userinfoService: UserInfoService
  ) { }

  private _userId: number = 1;
  name: string = "";

  get userId(): number {
    return this._userId;
  }

  @Input()
  set userId(value: number) {
    this._userId = value;
  }

  ngOnInit(): void {
    this.userinfoService.getUserNameByUserId(this.userId)
      .subscribe(value => {
        this.name = value
      })
  }

}
