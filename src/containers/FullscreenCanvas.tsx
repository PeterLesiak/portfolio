'use client';

import { useRef, useEffect } from 'react';

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

function main(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ReinhardToneMapping;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const composer = new EffectComposer(renderer);

  // prettier-ignore
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const scene = new THREE.Scene();

  const cube = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3),
    new THREE.MeshBasicMaterial({ color: 0x344feb, wireframe: false }),
  );
  scene.add(cube);

  window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(
    new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 2, 0),
  );
  composer.addPass(new OutputPass());
  renderer.toneMappingExposure = 4;

  function update() {
    requestAnimationFrame(update);

    cube.rotation.x += 0.001;
    cube.rotation.y += 0.002;
    cube.rotation.z += 0.003;

    composer.render();
  }

  update();
}

const FullscreenCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    main(canvasRef.current!);
  }, []);

  return <canvas className="fixed h-full w-full" ref={canvasRef}></canvas>;
};

export default FullscreenCanvas;
