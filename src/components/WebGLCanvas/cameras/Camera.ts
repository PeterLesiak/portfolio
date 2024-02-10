import { Matrix4 } from '../math';

abstract class Camera {
  projectionMatrix = new Matrix4();

  protected abstract _updateProjectionMatrix(): void;
}

export { Camera };
