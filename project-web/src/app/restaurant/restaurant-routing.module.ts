import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantListComponent} from "./restaurant-list/restaurant-list.component";
import {RestaurantInfoComponent} from "./restaurant-info/restaurant-info.component";
import {RestaurantInfoResolver} from "./restaurant-info/restaurant-info.resolver";

const routes: Routes = [
  {
    path: '',
    component: RestaurantListComponent,
  },
  {
    path: ':restaurantId',
    component: RestaurantInfoComponent,
    resolve: {
      restaurant: RestaurantInfoResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {
}
