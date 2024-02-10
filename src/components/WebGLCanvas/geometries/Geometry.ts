import { Vector2, Vector3 } from '../math';

abstract class Geometry {
  protected _vertices: Vector3[];
  protected _textureCoords: Vector2[];
  protected _vertexNormals: Vector3[];
  protected _indices: [Vector3, Vector3, Vector3][];

  constructor(model: {
    vertices: Vector3[];
    textureCoords: Vector2[];
    vertexNormals: Vector3[];
    indices: [Vector3, Vector3, Vector3][];
  }) {
    this._vertices = model.vertices;
    this._textureCoords = model.textureCoords;
    this._vertexNormals = model.vertexNormals;
    this._indices = model.indices;
  }

  getFloat32Array(): Float32Array {
    const buffer = new Float32Array(this._vertices.length * 3);
    for (let i = 0; i < this._vertices.length; i++) {
      buffer[i + 0] = this._vertices[i].x;
      buffer[i + 1] = this._vertices[i].y;
      buffer[i + 2] = this._vertices[i].z;
    }

    return buffer;
  }
}

export { Geometry };
