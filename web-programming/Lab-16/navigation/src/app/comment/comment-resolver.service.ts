import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Comment} from "../posts/models/comment";
import {CommentService} from "../posts/services/comment.service";
import {EMPTY, NEVER, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CommentResolverService implements Resolve<Comment[]> {
  constructor(private cs: CommentService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Comment[] {
    const postId = Number(route.paramMap.get('post-id')!);

    let comment = this.cs.getAllByPostId(postId);
    return comment;

  }
}
