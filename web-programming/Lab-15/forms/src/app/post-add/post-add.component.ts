import {Component, OnInit} from '@angular/core';
import {PostService} from "../posts/services/post.service";
import {Post} from "../posts/models/post";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit{

  // @ts-ignore
  postForm: FormGroup;

  constructor(private fb: FormBuilder,private postService: PostService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.postForm = this.fb.group({
      title: '',
      text: ''
    });
  }



  onSubmit(): void {
    let post = new Post(this.postForm?.value.title, this.postForm?.value.text);
    this.postService.save(post);
  }
}
