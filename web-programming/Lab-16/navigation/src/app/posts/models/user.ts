export class User {
  private readonly _id: number = Date.now();
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
