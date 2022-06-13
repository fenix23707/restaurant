import {Table} from "./table.model";

export interface Scheme {
  id?: number
  width: number;
  height: number;
  tables: Table[];
  restaurant_id?: number;
}
