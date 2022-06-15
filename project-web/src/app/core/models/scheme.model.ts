import {Table} from "./table.model";
import {Restaurant} from "./restaurant.model";

export interface Scheme {
  id?: number
  width: number;
  height: number;
  tables: Table[];
  restaurant_id?: number;
  restaurant?: Restaurant
}
