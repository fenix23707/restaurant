import {Injectable} from '@angular/core';
import {PostsModule} from "../posts.module";
import {Comment} from "../models/comment";
import {Post} from "../models/post";

@Injectable({
  providedIn: PostsModule
})
export class CommentService {

  comments: Comment[] = [];

  constructor() {
    this.comments = [];
  }

  getAll(): Comment[] {
    return this.comments;
  }

  getAllByPostId(postId: number): Comment[] {
    let result = this.comments.filter(value => value.post.id === postId);
    result.forEach((value, index, array) => console.log(index + ":" + value))
    return result;
  }

  save(comment: Comment) {
    this.comments.push(comment);
  }

}
