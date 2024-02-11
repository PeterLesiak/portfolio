'use client';

import { useRef, useEffect } from 'react';

import * as GL from '@/components/WebGL';

const VERTEX_SOURCE = /*glsl*/ `#version 300 es
in vec4 a_position;

void main() {
  gl_Position = a_position;
}`;

const FRAGMENT_SOURCE = /*glsl*/ `#version 300 es
precision mediump float;

out vec4 fragColor;

uniform vec2 iResolution;
uniform float iTime;

// Shader from https://www.shadertoy.com/view/Xd3SDs

vec3 hash33(vec3 p){ 
  float n = sin(dot(p, vec3(7, 157, 113)));    
  return fract(vec3(2097152, 262144, 32768)*n); 
}

float map(vec3 p){
  vec2 c;
  p = abs(fract(p/3.)*3.-1.5);
  c.x = min(max(p.x, p.y),min(max(p.y, p.z),max(p.x, p.z)))-0.75;
  p = abs(fract(p*4./3.)*.75 - 0.375);
  c.y = min(p.x,min(p.y,p.z)); // EQN 1
  return max(abs(c.x), abs(c.y))*.75 + length(c)*.25 - .1;
}

vec3 calcNormal(in vec3 p, float d) {
  const vec2 e = vec2(0.01, 0);
  return normalize(vec3(d - map(p - e.xyy), d - map(p - e.yxy),	d - map(p - e.yyx)));
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
	vec2 uv = (fragCoord.xy - iResolution.xy*.5 )/iResolution.y;
  vec3 rd = normalize(vec3(uv, (1.-dot(uv, uv)*.5)*.5));
  vec3 ro = vec3(0., 0., iTime*1.5), col=vec3(0), sp, sn, lp, ld, rnd;
  vec2 a = sin(vec2(1.5707963, 0) + iTime*0.375);
  rd.xz = mat2(a, -a.y, a.x)*rd.xz;    
  rd.xy = mat2(a, -a.y, a.x)*rd.xy; 
  lp = vec3(0, 1, 4);
  lp.xz = mat2(a, -a.y, a.x)*lp.xz;    
  lp.xy = mat2(a, -a.y, a.x)*lp.xy; 
  lp += ro;
  rnd = hash33(rd+311.);
  float t = length(rnd)*.2, layers = 0., d, aD;
  float lDist, s, l;
  float thD = .0125;
  for(float i=0.; i<64.; i++)	{
    if(layers>31. || dot(col, vec3(.299, .587, .114)) > 1. || t>16.) break;
    sp = ro+rd*t;
    d = map(sp);
    aD = (thD-abs(d)*31./32.)/thD;
    if(aD>0.) {   
      sn = calcNormal(sp, d)*sign(d);
      ld = (lp - sp);
      lDist = max(length(ld), .001);
      ld /= lDist;
      s = pow(max(dot(reflect(-ld, sn), -rd), 0.), 8.);
      l = max(dot(ld, sn), 0.);
      col += ((l + .1) + vec3(.5, .7, 1)*s)*aD/(1. + lDist*0.25 + lDist*lDist*0.05)*.2;
      layers++;
    }
    t += max(abs(d)*.75, thD*.25);
  }
  t = min(t, 16.);
  col = mix(col, vec3(0), 1.-exp(-0.025*t*t));
  uv = abs(fragCoord.xy/iResolution.xy - .5);
  col = mix(col, pow(min(vec3(1, 1.2, 1)*col.x, 1.), vec3(2.5, 1, 12)),
  min( dot(pow(uv, vec2(4.)), vec2(1))*8., 1.));
  col = mix(col, col.zxy, dot(sin(rd*5.), vec3(.166)) + 0.166);
  fragColor = vec4( sqrt(clamp(col, 0., 1.)), 1.0 );
}`;

const FullscreenCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;

    const gl = canvas.getContext('webgl2');
    if (!gl) throw new Error('webgl2 unsupported');

    const program = GL.createProgram(gl, VERTEX_SOURCE, FRAGMENT_SOURCE);

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');

    const resolutionUniformLocation = gl.getUniformLocation(program, 'iResolution');
    const timeUniformLocation = gl.getUniformLocation(program, 'iTime');

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [
      -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const startTime = new Date();

    const update = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      gl.clearColor(0.026, 0.026, 0.026, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      gl.uniform2fv(resolutionUniformLocation, [canvas.width, canvas.height]);
      gl.uniform1f(
        timeUniformLocation,
        (new Date().getTime() - startTime.getTime()) / 1000,
      );

      gl.bindVertexArray(vao);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, []);

  return <canvas className="fixed h-full w-full" ref={canvasRef}></canvas>;
};

export default FullscreenCanvas;
