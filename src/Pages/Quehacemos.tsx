import { useGSAP } from '@gsap/react';
import { Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { Suspense, useRef, useState } from 'react';
import { Model } from '../utils/preload';
import './quehacemso.css';
import { Cloudinary } from '@cloudinary/url-gen';
const Quehacemos = () => {
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 });
  }, []);

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'davigetz',
    },
  });
  return (
    <div className="que-container">
      <div className="flex">
        <div className="h-5/6 w-full flex flex-col justify-center items-center">
          <p id="hero" className="hero-title">
            Qué Hacemos
          </p>
          <div className="md:w-10/12 w-9/12 max-w-[2000px] mt-5">
            <video className="pointer-events-none" autoPlay muted playsInline={true}>
              <source
                src={cld.video('rodrigo-video/hero').quality('auto').toURL()}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center' }}>
        <Canvas>
          <Suspense fallback={null}>
            <Model />
            <directionalLight intensity={2} position={[0, 2, 3]} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Quehacemos;
