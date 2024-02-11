export function createProgram(
  gl: WebGL2RenderingContext,
  vertexSource: string,
  fragmentSource: string,
): WebGLProgram {
  const vertexShader = createShader(
    gl,
    WebGL2RenderingContext.VERTEX_SHADER,
    vertexSource,
  );
  const fragmentShader = createShader(
    gl,
    WebGL2RenderingContext.FRAGMENT_SHADER,
    fragmentSource,
  );

  const program = gl.createProgram()!;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);

  throw new Error('Program Error');
}

export function createShader(
  gl: WebGL2RenderingContext,
  type:
    | WebGL2RenderingContext['VERTEX_SHADER']
    | WebGL2RenderingContext['FRAGMENT_SHADER'],
  source: string,
): WebGLShader {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);

  throw new Error('Shader Error');
}
