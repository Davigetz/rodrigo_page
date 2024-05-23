import { useGSAP } from '@gsap/react';
import { Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import React, { Suspense, useRef, useState } from 'react';
import { Model } from '../utils/preload';
import './quehacemso.css';
import { Cloudinary } from '@cloudinary/url-gen';

import Modelview from '../components/modelview';

const Quehacemos = () => {
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1 });
    gsap.to('#heading', { y: 0, opacity: 1, duration: 2 });
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
            ¿Qué Hacemos?
          </p>
          <div className="md:w-10/12 w-9/12 max-w-[2000px] mt-5">
            <video className="pointer-events-none" autoPlay muted playsInline={true}>
              <source
                src={cld.video('rodrigo-video/hero-v1').quality('auto').toURL()}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <section className="flex justify-center mt-10">
        <div className="max-w-[1120px] relative">
          <p
            id="heading"
            className="text-[#ccba99] lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
          >
            Logo
          </p>
          <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[38vh] md:h-[40vh] lg:h-[30vh]overflow-hidden relative">
              <Modelview />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quehacemos;
