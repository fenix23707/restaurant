import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantModule} from "./restaurant/restaurant.module";

const routes: Routes = [
  {
    path: '', redirectTo: 'restaurants', pathMatch: 'full'
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
