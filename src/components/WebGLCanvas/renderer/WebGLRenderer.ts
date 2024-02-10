import { Mesh } from '../objects';
import { Camera } from '../cameras';
import { Material } from '../materials';

// temporary
const DEFAULT_VERTEX_SHADER = /*glsl*/ `#version 300 es
layout(location = 0) in vec4 aPosition;

void main() {
  gl_Position = aPosition;
}
`;

class WebGLRenderer {
  DOMElement: HTMLCanvasElement;

  private _gl: WebGL2RenderingContext;

  private _vertices: Float32Array;

  constructor(ref: HTMLCanvasElement | null = document.createElement('canvas')) {
    if (!ref) throw new Error('HMTLCanvasElement is null');

    this.DOMElement = ref;

    const gl = this.DOMElement.getContext('webgl2');

    if (!gl) throw new Error('WebGL2 unsupported');

    this._gl = gl;

    this._gl.clearColor(0.024, 0.024, 0.024, 1.0);

    const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShader, DEFAULT_VERTEX_SHADER);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShader, new Material().GLSLShaderSource);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    gl.useProgram(program);

    this._vertices = new Float32Array([0, 0, 0, 0.5, 0.7, 0]);
    const positionBuffer = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this._vertices, gl.STATIC_DRAW);

    const vao = gl.createVertexArray()!;
    gl.bindVertexArray(vao);

    gl.enableVertexAttribArray(0);

    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    this.resizeCanvasToViewport();

    gl.clear(gl.COLOR_BUFFER_BIT);

    //gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  private resizeCanvasToViewport() {
    this.DOMElement.width = window.innerWidth;
    this.DOMElement.height = window.innerHeight;

    this._gl.viewport(0, 0, this._gl.canvas.width, this._gl.canvas.height);
  }

  render(mesh: Mesh, camera: Camera): void {}
}

export { WebGLRenderer };
