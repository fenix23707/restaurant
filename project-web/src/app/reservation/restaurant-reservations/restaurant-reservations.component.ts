import {Component, Input, OnInit} from '@angular/core';
import {ReservationService} from "../../core/services/reservation.service";
import {Reservation, UserService} from "../../core";
import {ReservationListConfig} from "../../core/models/reservation-list-config.model";

@Component({
  selector: 'app-restaurant-reservations',
  templateUrl: './restaurant-reservations.component.html',
  styleUrls: ['./restaurant-reservations.component.scss']
})
export class RestaurantReservationsComponent implements OnInit {

  constructor(
    private reservationService: ReservationService,
  ) { }

  private _restaurantId: number = 1;
  reservations: Reservation[] = []
  config: ReservationListConfig = {filters: {}, sort: {order: "desc", sortBy: "datetime_begin"}}

  ngOnInit(): void {
    this.reservationService.getAllByRestaurantId(this._restaurantId, this.config)
      .subscribe(value => {
        this.reservations = value;
      });
  }

  onCancel(reservation: Reservation) {
    console.log(reservation)
    // @ts-ignore
    this.reservationService.changeStatus(reservation.id, 2)
      .subscribe(value => {
        reservation.status = 2;
        console.log(value)
      })
  }

  getClassColor(reservation: Reservation) {
    let classColor: string = 'booking-active';
    if (reservation.status === 1) {
      classColor = 'booking-completed'
    } else if (reservation.status === 2) {
      classColor = 'booking-cancelled';
    }
    return classColor;
  }


  @Input()
  set restaurantId(value: number | undefined) {
    if (!value) {
      return;
    }
    this._restaurantId = value;
  }
}
