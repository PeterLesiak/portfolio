import { Vector2, Vector3 } from '../math';
import { Geometry } from './Geometry';

class CubeGeometry extends Geometry {
  constructor(size: number) {
    super({
      // https://gist.github.com/MaikKlein/0b6d6bb58772c13593d0a0add6004c1c#file-cube-obj

      vertices: [
        new Vector3(size, -size, -size),
        new Vector3(size, -size, size),
        new Vector3(-size, -size, size),
        new Vector3(-size, -size, -size),
        new Vector3(size, size, -size),
        new Vector3(size, size, size),
        new Vector3(-size, size, size),
        new Vector3(-size, size, -size),
      ],
      textureCoords: [
        new Vector2(1.0, 0.3),
        new Vector2(1.0, 0.6),
        new Vector2(0.6, 0.6),
        new Vector2(0.6, 0.3),
        new Vector2(0.6, 0.0),
        new Vector2(0.0, 0.3),
        new Vector2(0.0, 0.0),
        new Vector2(0.3, 0.0),
        new Vector2(0.3, 1.0),
        new Vector2(0.0, 1.0),
        new Vector2(0.0, 0.6),
        new Vector2(0.3, 0.3),
        new Vector2(0.3, 0.6),
        new Vector2(1.0, 0.0),
      ],
      vertexNormals: [
        new Vector3(0.0, -1.0, 0.0),
        new Vector3(0.0, 1.0, 0.0),
        new Vector3(1.0, 0.0, 0.0),
        new Vector3(0.0, 0.0, 1.0),
        new Vector3(-1.0, -0.0, -0.0),
        new Vector3(0.0, 0.0, -1.0),
      ],
      indices: [
        [new Vector3(2, 1, 1), new Vector3(3, 2, 1), new Vector3(4, 3, 1)],
        [new Vector3(8, 1, 2), new Vector3(7, 4, 2), new Vector3(6, 5, 2)],
        [new Vector3(5, 6, 3), new Vector3(6, 7, 3), new Vector3(2, 8, 3)],
        [new Vector3(6, 8, 4), new Vector3(7, 5, 4), new Vector3(3, 4, 4)],
        [new Vector3(3, 9, 5), new Vector3(7, 10, 5), new Vector3(8, 11, 5)],
        [new Vector3(1, 12, 6), new Vector3(4, 13, 6), new Vector3(8, 11, 6)],
        [new Vector3(1, 4, 1), new Vector3(2, 1, 1), new Vector3(4, 3, 1)],
        [new Vector3(5, 14, 2), new Vector3(8, 1, 2), new Vector3(6, 5, 2)],
        [new Vector3(1, 12, 3), new Vector3(5, 6, 3), new Vector3(2, 8, 3)],
        [new Vector3(2, 12, 4), new Vector3(6, 8, 4), new Vector3(3, 4, 4)],
        [new Vector3(4, 13, 5), new Vector3(3, 9, 5), new Vector3(8, 11, 5)],
        [new Vector3(5, 6, 6), new Vector3(1, 12, 6), new Vector3(8, 11, 6)],
      ],
    });
  }
}

export { CubeGeometry };
