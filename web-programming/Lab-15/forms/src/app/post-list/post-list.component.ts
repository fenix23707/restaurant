import {Component, OnInit} from '@angular/core';
import {PostService} from "../posts/services/post.service";
import {Post} from "../posts/models/post";

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.posts = this.postService.getAll();
  }

  onDeleteClick(id: number) {
    this.postService.delete(id);
  }

}
