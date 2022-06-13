import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReservationCreateComponent} from "./reservation-create/reservation-create.component";

const routes: Routes = [

  {
    path: ':restaurantId',
    component: ReservationCreateComponent,
  /*  resolve: {
      restaurant: RestaurantInfoResolver
    }*/
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule {
}
