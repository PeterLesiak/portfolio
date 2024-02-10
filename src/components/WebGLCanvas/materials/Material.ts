const DEFAULT_GLSL_SHADER = /*glsl*/ `#version 300 es
precision mediump float;

out vec4 fragColor;

void main() {
  fragColor = vec4(0.35, 0.45, 0.55, 1.0);
}
`;

class Material {
  protected fragmentShader = DEFAULT_GLSL_SHADER;

  get GLSLShaderSource() {
    return this.fragmentShader;
  }
}

export { Material };
