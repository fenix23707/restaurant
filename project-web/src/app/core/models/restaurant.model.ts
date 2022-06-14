import {Scheme} from "./scheme.model";

export interface Restaurant {
  id?: number,
  name: string,
  adres: string,
  avatar: string,
  user_id?: number
  scheme?: Scheme
}
