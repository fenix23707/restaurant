import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-ava',
  templateUrl: './personal-ava.component.html',
  styleUrls: ['./personal-ava.component.scss']
})
export class PersonalAvaComponent {

  defaultImage = "assets/personal/person-avatar.jpg";

  private _avatarUrl: string = this.defaultImage;

  get avatarUrl(): string {
    return this._avatarUrl;
  }

  @Input()
  set avatarUrl(value: string) {
    if (!value) {
      this._avatarUrl = this.defaultImage;
    } else {
      this._avatarUrl = value;
    }
  }
}
