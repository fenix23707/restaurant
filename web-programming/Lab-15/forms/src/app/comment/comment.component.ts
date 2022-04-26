import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../posts/services/post.service";
import {Post} from "../posts/models/post";
import {CommentService} from "../posts/services/comment.service";
import {Comment} from "../posts/models/comment";
import {AuthService} from "../posts/services/auth.service";
import {User} from "../posts/models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() _postId: number = -1;

  commentForm: FormGroup;

  comments: Comment[] = [];

  constructor(private fb: FormBuilder,
              private commentService: CommentService, private authService: AuthService) {
    this.commentForm = fb.group({
      text: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.comments = this.commentService.getAllByPostId(this._postId);
  }

  onSubmit(): void {
    let user: User = this.authService.getUser();
    let comment: Comment = new Comment(this.commentForm.value.text, new Post("", "", this._postId), user);
    this.commentService.save(comment)
    this.comments = this.commentService.getAllByPostId(this._postId);
  }

  get text() {
    return this.commentForm.get('text');
  }
}
