import { Camera } from './Camera';

class PerspectiveCamera extends Camera {
  constructor(
    private _fov = 50,
    private _near = 0.1,
    private _far = 2000,
  ) {
    super();
  }

  get fov() {
    return this._fov;
  }
  get near() {
    return this._near;
  }
  get far() {
    return this._far;
  }

  set fov(val: number) {
    this._fov = val;
    this._updateProjectionMatrix();
  }
  set near(val: number) {
    this._near = val;
    this._updateProjectionMatrix();
  }
  set far(val: number) {
    this._far = val;
    this._updateProjectionMatrix();
  }

  // TODO: Find and fill the projectionMatrix formula
  protected _updateProjectionMatrix(): void {}
}

export { PerspectiveCamera };
