import { useGSAP } from '@gsap/react';
import { Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { Suspense, useRef, useState } from 'react';
import { Logo } from '../utils/preload';
import './quehacemso.css';
const Quehacemos = () => {
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 });
  }, []);
  return (
    <div className="que-container">
      <div className="flex">
        <div className="h-5/6 w-full flex flex-col justify-center items-center">
          <p id="hero" className="hero-title">
            Que Hacemos
          </p>
          <div className="md:w-10/12 w-9/12 max-w-[2000px] mt-5">
            <video className="pointer-events-none" autoPlay muted playsInline={true}>
              <source src={'/assets/videos/hero.mp4'} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center' }}>
        <Canvas>
          <Suspense fallback={null}>
            <Logo />
            <directionalLight intensity={2} position={[0, 2, 3]} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Quehacemos;
