import {Injectable} from '@angular/core';
import {PostsModule} from "../posts.module";

@Injectable({
  providedIn: PostsModule
})
export class CommentService {

  constructor() { }
}
