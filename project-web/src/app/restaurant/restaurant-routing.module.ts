import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RestaurantListComponent} from "./restaurant-list/restaurant-list.component";
import {RestaurantResolver} from "./restaurant-resolver";

const routes: Routes = [
  {
    path: '',
    component: RestaurantListComponent,
    /*resolve: {
      restaurant: RestaurantResolver
    }*/
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {
}
