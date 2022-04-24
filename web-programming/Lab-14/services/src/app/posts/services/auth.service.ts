import {Injectable} from '@angular/core';
import {PostsModule} from "../posts.module";
import {User} from "../models/user";

@Injectable({
  providedIn: PostsModule
})
export class AuthService {
  private _user: User = new User("Vlad");

  constructor() { }

  getUser(): User {
    return this._user;
  }
}
