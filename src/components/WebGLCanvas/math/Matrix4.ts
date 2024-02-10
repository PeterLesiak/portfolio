// prettier-ignore
type Matrix4Array = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
]

class Matrix4 {
  // prettier-ignore
  static readonly Identity = new Matrix4([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
  ]);

  constructor(public m: Matrix4Array = Matrix4.Identity.m) {}

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
  get [9]() {
    return this.m[9];
  }
  get [10]() {
    return this.m[10];
  }
  get [11]() {
    return this.m[11];
  }
  get [12]() {
    return this.m[12];
  }
  get [13]() {
    return this.m[13];
  }
  get [14]() {
    return this.m[14];
  }
  get [15]() {
    return this.m[15];
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
  set [9](val: number) {
    this.m[9] = val;
  }
  set [10](val: number) {
    this.m[10] = val;
  }
  set [11](val: number) {
    this.m[11] = val;
  }
  set [12](val: number) {
    this.m[12] = val;
  }
  set [13](val: number) {
    this.m[13] = val;
  }
  set [14](val: number) {
    this.m[14] = val;
  }
  set [15](val: number) {
    this.m[15] = val;
  }

  set(m: Matrix4Array): void {
    this.m = m;
  }
}

export { Matrix4, type Matrix4Array };
