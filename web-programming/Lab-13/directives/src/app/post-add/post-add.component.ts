import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../Post";

@Component({
  selector: 'post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

  title: any
  text: any

  @Output() newPostEvent = new EventEmitter<Post>();

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newPostEvent.emit(new Post(this.title, this.text));
    this.title = "";
    this.text = "";
  }
}
