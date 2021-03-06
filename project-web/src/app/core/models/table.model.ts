import {Scheme} from "./scheme.model";

export interface Table {
  id?: number;
  capacity: number
  width: number;
  height: number;
  x: number;
  y: number;
  scheme_id?: number;
  scheme?: Scheme
}
