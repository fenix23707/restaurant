import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BusinessListComponent} from "./business-list/business-list.component";
import {BusinessAddComponent} from "./business-add/business-add.component";

const routes: Routes = [
  {
    path: '',
    component: BusinessListComponent,
  },
  {
    path: 'add',
    component: BusinessAddComponent,
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule {
}
