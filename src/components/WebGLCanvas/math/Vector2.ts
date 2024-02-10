class Vector2 {
  static readonly Zero = new Vector2(0, 0);
  static readonly One = new Vector2(1, 1);

  constructor(
    public x: number,
    public y: number,
  ) {}

  *[Symbol.iterator]() {
    yield this.x;
    yield this.y;
  }

  get [0]() {
    return this.x;
  }
  get [1]() {
    return this.y;
  }

  set [0](val: number) {
    this.x = val;
  }
  set [1](val: number) {
    this.y = val;
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toGLSLType(): string {
    return `vec2(${this.x}, ${this.y})`;
  }
}

export { Vector2 };
