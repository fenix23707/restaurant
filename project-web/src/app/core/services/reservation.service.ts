import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Reservation} from "../models/reservation.model";

@Injectable()
export class ReservationService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getAllByUserId(userId: number) {
    return this.apiService.get('/reservations/users/' + userId);
  }

  changeStatus(reservationId: number, status: number) {
    const body = {
      status: status
    }
    return this.apiService.patch('/reservations/status/' + reservationId, body);
  }

  reserve(reservation: Reservation) {
    return this.apiService.post('/reservations', reservation);
  }
}
