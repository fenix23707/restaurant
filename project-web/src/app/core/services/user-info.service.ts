import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map} from "rxjs";

@Injectable()
export class UserInfoService {

  constructor(
    private apiService: ApiService
  ) { }

  getUserNameByUserId(userId: number) {
    return this.apiService.get('/userinfo/users/' + userId)
      .pipe(map(value => value.name));
  }
}
