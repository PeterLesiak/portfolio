// prettier-ignore
type Matrix2Array = [
  number, number,
  number, number,
]

class Matrix2 {
  // prettier-ignore
  static readonly Identity = new Matrix2([
    1, 0,
    0, 1,
  ]);

  constructor(public m: Matrix2Array = Matrix2.Identity.m) {}

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

  set(m: Matrix2Array): void {
    this.m = m;
  }
}

export { Matrix2, type Matrix2Array };
