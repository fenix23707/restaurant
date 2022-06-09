import {User} from "./user.model";

export interface UserData {
  token: string,
  expireIn: number,
  user: User
}
