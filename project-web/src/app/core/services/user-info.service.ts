import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map} from "rxjs";
import {Userinfo} from "../models";

@Injectable()
export class UserInfoService {

  constructor(
    private apiService: ApiService
  ) { }

  save(userinfoId: number,userinfo: Userinfo) {
    const data =  Object.fromEntries(Object.entries(userinfo).filter(([_, v]) => v));
    console.log(data)
    return this.apiService.put('/userinfo/' + userinfoId, data);
  }

  getUserInfoByUserId(userId: number) {
    return this.apiService.get('/userinfo/' + userId);
  }

  getUserNameByUserId(userId: number) {
    return this.apiService.get('/userinfo/users/' + userId)
      .pipe(map(value => value.name));
  }
}
