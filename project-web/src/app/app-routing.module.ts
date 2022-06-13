import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";
import {ReservationCreateComponent} from "./reservation/reservation-create/reservation-create.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'restaurants', pathMatch: 'full'
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
