import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentComponent} from "./comment/comment.component";
import {PostListComponent} from "./post-list/post-list.component";
import {CommentResolverService} from "./comment/comment-resolver.service";
import {PostAddComponent} from "./post-add/post-add.component";

const routes: Routes = [
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'posts/create',
    component: PostAddComponent
  },
  {
    path: 'comments/:post-id',
    component: CommentComponent,
    resolve: {comments: CommentResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
