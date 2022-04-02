import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../Post";

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];
  @Output() onDelete = new EventEmitter<number>();

  ngOnInit(): void {
  }

  onDeleteClick(index: number) {
    this.onDelete.emit(index);
  }

}
