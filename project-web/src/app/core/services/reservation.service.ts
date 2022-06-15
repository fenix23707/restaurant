import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Reservation} from "../models/reservation.model";
import {ReservationListConfig} from "../models/reservation-list-config.model";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ReservationService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getAllByUserId(userId: number, config: ReservationListConfig) {
    const params = {};

    Object.keys(config.sort)
      .forEach(key => {
        // @ts-ignore
        params[key] = config.sort[key];
      })
    return this.apiService.get('/reservations/users/' + userId, new HttpParams({fromObject: params}));
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
