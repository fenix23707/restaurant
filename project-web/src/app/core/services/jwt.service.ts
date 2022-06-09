import {Injectable} from "@angular/core";

@Injectable()
export class JwtService {
  private readonly _jwtKey = "jwtToken";

  getToken() {
    return window.localStorage[this._jwtKey];
  }

  saveToken(token: String) {
    window.localStorage[this._jwtKey] = token;
  }

  destroyToken() {
    window.localStorage.removeItem(this._jwtKey);
  }
}
