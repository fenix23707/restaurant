import {Injectable} from '@angular/core';
import {PostsModule} from "../posts.module";
import {Post} from "../models/post";

@Injectable({
  providedIn: PostsModule
})
export class PostService {
  posts: Post[] = [
    new Post("name", "text"),
    new Post("name1", "text1"),
    new Post("name2", "text2"),
    new Post("name3", "text3"),
  ];

  constructor() {
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
