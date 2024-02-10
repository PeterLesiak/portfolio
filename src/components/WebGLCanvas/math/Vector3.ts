class Vector3 {
  static readonly Zero = new Vector3(0, 0, 0);
  static readonly One = new Vector3(1, 1, 1);

  constructor(
    public x: number,
    public y: number,
    public z: number,
  ) {}

  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
    yield this.z;
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

  set [0](val: number) {
    this.x = val;
  }
  set [1](val: number) {
    this.y = val;
  }
  set [2](val: number) {
    this.z = val;
  }

  set(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toGLSLType(): string {
    return `vec3(${this.x}, ${this.y}, ${this.z})`;
  }
}

export { Vector3 };
