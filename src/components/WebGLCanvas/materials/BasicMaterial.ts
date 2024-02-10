import { Vector4 } from '../math';
import { Material } from './Material';

class BasicMaterial extends Material {
  // TODO: Switch to math/Color
  constructor(color = new Vector4(0.35, 0.45, 0.55, 1.0)) {
    super();

    // temporary
    this.fragmentShader = `#version 300 es
    precision mediump float;
    
    out vec4 fragColor;
    
    void main() {
      fragColor = ${color.toGLSLType()};
    }
    `;
  }
}

export { BasicMaterial };
