import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {JwtService} from "./jwt.service";
import {BehaviorSubject, distinctUntilChanged, map, ReplaySubject} from "rxjs";
import {User} from "../models";
import jwt_decode from 'jwt-decode';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
  ) {}

  setAuth(user: User) {
    this.currentUserSubject.next(user);
    console.log(this.getCurrentUser())
    this.isAuthenticatedSubject.next(true);
  }

  cleanAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): User {
    // @ts-ignore
    return jwt_decode(this.jwtService.getToken()).user;
  }
}
