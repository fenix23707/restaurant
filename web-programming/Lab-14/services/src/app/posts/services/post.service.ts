import {Injectable} from '@angular/core';
import {PostsModule} from "../posts.module";
import {Post} from "../models/post";

@Injectable({
  providedIn: PostsModule
})
export class PostService {
  posts: Post[];
  constructor() {
    this.posts = [
      new Post("name", "text"),
      new Post("name", "text1"),
      new Post("name", "text2"),
      new Post("name", "text3"),
    ];
  }

  getAll(): Post[] {
    return this.posts;
  }

  save(post: Post) {
    this.posts.push(post);
  }

  delete(id: number) {
    const index = this.posts.findIndex(value => value.id === id);

    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
