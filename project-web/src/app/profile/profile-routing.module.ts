import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProfileInfoComponent} from "./profile-info/profile-info.component";
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ProfileInfoComponent
  },

  {
    path: 'edit',
    component: ProfileEditComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
