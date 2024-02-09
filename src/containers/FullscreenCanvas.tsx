'use client';

import { useRef, useEffect } from 'react';

import * as GFX from '@/components/WebGLCanvas';

const FullscreenCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const renderer = new GFX.WebGLRenderer(canvasRef.current);

    function update() {
      renderer.render();

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, []);

  return <canvas className="fixed h-full w-full" ref={canvasRef}></canvas>;
};

export default FullscreenCanvas;
