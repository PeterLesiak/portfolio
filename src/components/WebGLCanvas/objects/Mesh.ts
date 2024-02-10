import { Material } from '../materials';
import { Geometry } from '../geometries';

class Mesh {
  constructor(
    public geometry: Geometry,
    public material: Material,
  ) {}
}

export { Mesh };
