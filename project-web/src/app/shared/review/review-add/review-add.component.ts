import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AlertifyService, Review, ReviewService, User, UserService} from "../../../core";

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss']
})
export class ReviewAddComponent implements OnInit {
  rates = Array.from({length: 10}, (_, i) => i + 1);
  reviewForm!: FormGroup
  private _restaurantId: number = 1;
  review: Review = {rate: 10, restaurant_id: this._restaurantId, review: "", user_id: 0}

  constructor(
    private alertifyService: AlertifyService,
    private userService: UserService,
    private reviewService: ReviewService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initForm();

    const user = this.userService.getCurrentUser();
    this.reviewService.getByUserAndRestaurant(user.id, this.restaurantId)
      .subscribe(value => {
        if (value) {
          this.review = value;
          this.reviewForm.patchValue({
            review: this.review.review
          })
        }
      })
  }

  initForm() {
    this.reviewForm = this.fb.group(
      {
        rate: [this.review.rate, Validators.required],
        review: [this.review.review],
      }
    )
  }

  onSubmit() {
    const data = this.reviewForm.value
    this.review = {
      id: this.review.id,
      rate: data.rate,
      review: data.review,
      restaurant_id: this.restaurantId,
      user_id: this.userService.getCurrentUser().id
    }

    this.reviewService.save(this.review).subscribe(value => {
      if (value.id) {
        this.review.id = value.id;
      }
      this.alertifyService.success('комментарий сохранен');
      window.location.reload();
    });

  }

  isSelected(rate: number) {
    return rate === this.review.rate;
  }

  @Input()
  set restaurantId(value: number | undefined) {
    if (!value) {
      return;
    }
    this._restaurantId = value;
  }

  get restaurantId(): number {
    return this._restaurantId;
  }
}
