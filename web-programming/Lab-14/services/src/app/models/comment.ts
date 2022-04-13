export class Comment {
  private readonly _id: number = Date.now();
  private _text: string;
  private _date: Date;
  private _postId: number;
  private _userId: number;

  constructor(text: string, postId: number, userId: number) {
    this._text = text;
    this._postId = postId;
    this._userId = userId;
    this._date = new Date();
  }


  get id(): number {
    return this._id;
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

  get postId(): number {
    return this._postId;
  }

  set postId(value: number) {
    this._postId = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }
}
