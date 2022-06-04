import {Component, OnInit} from '@angular/core';
import {PostService} from "../posts/services/post.service";
import {Post} from "../posts/models/post";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit{

  // @ts-ignore
  postForm: FormGroup;

  constructor(private fb: FormBuilder,
              private postService: PostService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.postForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      text: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    let post = new Post(this.postForm?.value.title, this.postForm?.value.text);
    this.postService.save(post);
    this.router.navigate(['/posts'])
  }

  get title() {
    return this.postForm.get('title');
  }

  get text() {
    return this.postForm.get('text');
  }
}
