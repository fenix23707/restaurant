import {Table} from "./table.model";

export interface Reservation {
  id? : number
  datetime_begin: Date;
  datetime_end: Date;
  capacity: number;
  status?: number;
  table_id: number;
  user_id?: number
  table?: Table
}
