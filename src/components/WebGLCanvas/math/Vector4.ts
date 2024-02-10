class Vector4 {
  static readonly Zero = new Vector4(0, 0, 0, 0);
  static readonly One = new Vector4(1, 1, 1, 1);

  constructor(
    public x: number,
    public y: number,
    public z: number,
    public w: number,
  ) {}

  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
    yield this.w;
  }

  get [0]() {
    return this.x;
  }
  get [1]() {
    return this.y;
  }
  get [2]() {
    return this.z;
  }
  get [3]() {
    return this.w;
  }

  set [0](val: number) {
    this.x = val;
  }
  set [1](val: number) {
    this.y = val;
  }
  set [2](val: number) {
    this.z = val;
  }
  set [3](val: number) {
    this.w = val;
  }

  set(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  toGLSLType(): string {
    return `vec4(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
  }
}

export { Vector4 };
