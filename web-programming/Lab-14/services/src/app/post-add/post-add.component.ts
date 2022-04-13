import {Component} from '@angular/core';
import {PostService} from "../posts/services/post.service";
import {Post} from "../posts/models/post";

@Component({
  selector: 'post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent {

  title: any
  text: any

  constructor(private postService: PostService) {
  }

  onSubmit(): void {
    this.postService.save(new Post(this.title, this.text))
    this.title = "";
    this.text = "";
  }
}
