export class Post {
  private readonly _id: number = Date.now()
  private _title: String;
  private _text: String;
  private _date: Date;

  constructor(title: String, text: String) {
    this._title = title;
    this._text = text;
    this._date = new Date();
  }

  get id(): number {
    return this._id;
  }

  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get text(): String {
    return this._text;
  }

  set text(value: String) {
    this._text = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
