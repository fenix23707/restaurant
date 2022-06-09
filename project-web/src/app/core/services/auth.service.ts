import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {JwtService} from "./jwt.service";
import {User, UserData} from "../models";
import {map, Observable} from "rxjs";

@Injectable()
export class AuthService {
  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
  ) { }

  signup(data: Object): Observable<User> {
    return this.apiService.post('/signup', data)
      .pipe(map(data => {
        this.auth(data);
        return data.user;
      }))
  }

  login(credentials: Object): Observable<User> {
    return this.apiService.post('/login', credentials)
      .pipe(map(data => {
        this.auth(data);
        return data.user;
      }))
  }



  private auth(userData: UserData) {
    this.jwtService.saveToken(userData.token);
    //TODO save user in variable
  }
}