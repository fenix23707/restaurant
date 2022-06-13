import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ReservationCreateComponent} from "./reservation-create/reservation-create.component";
import {SchemeResolver} from "./reservation-create/scheme.resolver";

const routes: Routes = [

  {
    path: ':restaurantId',
    component: ReservationCreateComponent,
    resolve: {
      scheme: SchemeResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule {
}
