import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BusinessListComponent} from "./business-list/business-list.component";
import {BusinessAddComponent} from "./business-add/business-add.component";
import {BusinessInfoComponent} from "./business-info/business-info.component";
import {BusinessInfoResolver} from "./business-info/business-info.resolver";

const routes: Routes = [
  {
    path: '',
    component: BusinessListComponent,
  },
  {
    path: 'add',
    component: BusinessAddComponent,
  },

  {
    path: ':restaurantId',
    component: BusinessInfoComponent,
    resolve: {
      restaurant: BusinessInfoResolver
    }
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule {
}
