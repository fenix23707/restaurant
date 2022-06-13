import {Table} from "./table.model";

export interface Scheme {
  width: number;
  height: number;
  restaurant_id: number;
  tables: Table[];
}
