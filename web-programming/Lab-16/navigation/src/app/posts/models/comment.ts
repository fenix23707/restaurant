import {Post} from "./post";
import {User} from "./user";

export class Comment {
  private readonly _id: number = Date.now();
  private _text: string;
  private _date: Date;
  private _post: Post;
  private _user: User;


  constructor(text: string, post: Post, user: User) {
    this._text = text;
    this._post = post;
    this._user = user;
    this._date = new Date();
  }


  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get post(): Post {
    return this._post;
  }

  set post(value: Post) {
    this._post = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
