import {Component} from '@angular/core';
import {Post} from "./Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  condition = true;
  index = 0;
  public posts: Post[] = [
    new Post("title", "text"),
    new Post("title", "text"),
    new Post("title", "text"),

  ];
}
