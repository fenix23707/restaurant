import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Reservation} from "../models/reservation.model";

@Injectable()
export class ReservationService {

  constructor(
    private apiService: ApiService
  ) { }

  reserve(reservation: Reservation) {
    return this.apiService.post('/reservations', reservation);
  }
}
