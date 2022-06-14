import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '', redirectTo: 'restaurants', pathMatch: 'full'
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then(m => m.BusinessModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
