import { Component } from '@angular/core';
import {Post} from "./Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[];
  constructor() {
    this.posts = [
      new Post("name", "text"),
      new Post("name", "text1"),
      new Post("name", "text2"),
      new Post("name", "text3"),
    ];
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  onDelete(index: number) {
    console.log(this.posts);
    this.posts.splice(index, 1);
  }
}
