import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../core/services/reservation.service";
import {Reservation, UserService} from "../../core";
import {ReservationListConfig} from "../../core/models/reservation-list-config.model";

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.scss']
})
export class UserReservationsComponent implements OnInit {

  constructor(
    private reservationService: ReservationService,
    private userService: UserService
  ) { }

  reservations: Reservation[] = []
  config: ReservationListConfig = {filters: {}, sort: {order: "desc", sortBy: "datetime_begin"}}

  ngOnInit(): void {
    const userId = this.userService.getCurrentUser().id
    this.reservationService.getAllByUserId(userId, this.config)
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
}
