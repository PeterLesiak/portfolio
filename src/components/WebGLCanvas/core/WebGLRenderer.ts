class WebGLRenderer {
  DOMElement: HTMLCanvasElement;

  private _gl: WebGL2RenderingContext;

  constructor(ref: HTMLCanvasElement | null) {
    if (!ref) throw new Error('Canvas element is null');

    this.DOMElement = ref;

    const gl = this.DOMElement.getContext('webgl2');

    if (!gl) throw new Error('WebGL2 unsupported');

    this._gl = gl;

    this._gl.clearColor(0.024, 0.024, 0.024, 1.0);
  }

  render(): void {
    this._gl.clear(this._gl.COLOR_BUFFER_BIT);
  }
}

export { WebGLRenderer };
