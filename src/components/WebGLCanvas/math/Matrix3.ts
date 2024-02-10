// prettier-ignore
type Matrix3Array = [
  number, number, number,
  number, number, number,
  number, number, number,
]

class Matrix3 {
  // prettier-ignore
  static readonly Identity = new Matrix3([
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
  ]);

  constructor(public m: Matrix3Array = Matrix3.Identity.m) {}

  *[Symbol.iterator]() {
    for (const val of this.m) yield val;
  }

  get [0]() {
    return this.m[0];
  }
  get [1]() {
    return this.m[1];
  }
  get [2]() {
    return this.m[2];
  }
  get [3]() {
    return this.m[3];
  }
  get [4]() {
    return this.m[4];
  }
  get [5]() {
    return this.m[5];
  }
  get [6]() {
    return this.m[6];
  }
  get [7]() {
    return this.m[7];
  }
  get [8]() {
    return this.m[8];
  }

  set [0](val: number) {
    this.m[0] = val;
  }
  set [1](val: number) {
    this.m[1] = val;
  }
  set [2](val: number) {
    this.m[2] = val;
  }
  set [3](val: number) {
    this.m[3] = val;
  }
  set [4](val: number) {
    this.m[4] = val;
  }
  set [5](val: number) {
    this.m[5] = val;
  }
  set [6](val: number) {
    this.m[6] = val;
  }
  set [7](val: number) {
    this.m[7] = val;
  }
  set [8](val: number) {
    this.m[8] = val;
  }

  set(m: Matrix3Array): void {
    this.m = m;
  }
}

export { Matrix3, type Matrix3Array };
