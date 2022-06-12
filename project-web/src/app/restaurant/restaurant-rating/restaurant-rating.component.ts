import {Component, Input, OnInit} from '@angular/core';
import {ReviewService} from "../../core";

@Component({
  selector: 'app-restaurant-rating',
  templateUrl: './restaurant-rating.component.html',
})
export class RestaurantRatingComponent implements OnInit {

  constructor(
    private reviewService: ReviewService
  ) { }

  private _restaurantId: number = 0;
  rating = NaN


  get restaurantId(): number {
    return this._restaurantId;
  }

  @Input()
  set restaurantId(value: number) {
    this._restaurantId = value;
  }

  ngOnInit(): void {
    this.reviewService.getRating(this._restaurantId)
      .subscribe(rating => {
        this.rating = rating;
      })
  }

}
