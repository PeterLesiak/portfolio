'use client';

import { useRef, useEffect } from 'react';

import * as GFX from '@/components/WebGLCanvas';

const FullscreenCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderer = new GFX.WebGLRenderer(canvasRef.current);
    const camera = new GFX.PerspectiveCamera();

    const cube = new GFX.Mesh(new GFX.CubeGeometry(), new GFX.BasicMaterial());

    function update() {
      renderer.render(cube, camera);

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, []);

  return <canvas className="fixed h-full w-full" ref={canvasRef}></canvas>;
};

export default FullscreenCanvas;
