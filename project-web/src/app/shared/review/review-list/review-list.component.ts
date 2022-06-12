import {Component, Input, OnInit} from '@angular/core';
import {Review, ReviewService} from "../../../core";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss']
})
export class ReviewListComponent implements OnInit {
  constructor(
    private reviewService: ReviewService
  ) { }

  private _restaurantId: number = 0;
  reviews: Review[] = [];

  get restaurantId(): number {
    return this._restaurantId;
  }

  @Input()
  set restaurantId(value: number) {
    this._restaurantId = value;
  }

  ngOnInit(): void {
    this.reviewService.getAllByRestaurantId(this.restaurantId)
      .subscribe(value => {
        this.reviews = value;
      })
  }

}
