export class Person {
  private _name: string

  public get name() {
    return this._name
  }

  constructor(name: string) {
    this._name = name
  }

  public sayMyName() {
    return this._name
  }
}
