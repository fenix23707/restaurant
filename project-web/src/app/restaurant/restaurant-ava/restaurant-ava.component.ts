import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-restaurant-ava',
  templateUrl: './restaurant-ava.component.html',
  styleUrls: ['./restaurant-ava.component.scss']
})
export class RestaurantAvaComponent {
  defaultImage = "assets/restaurants/default.png";

  private _avatarUrl: string = this.defaultImage;

  get avatarUrl(): string {
    return this._avatarUrl;
  }

  @Input()
  set avatarUrl(value: string) {
    console.log(value)
    if (!value) {
      this._avatarUrl = this.defaultImage;
    } else {
      this._avatarUrl = value;
    }
  }
}
