import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

  private _rating: number | string = 0;


  get rating(): number | string {
    return this._rating;
  }

  @Input()
  set rating(value: number | string) {
    this._rating = value;
  }
}
