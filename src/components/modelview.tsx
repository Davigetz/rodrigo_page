import { Canvas } from '@react-three/fiber';
import React, { LegacyRef, Suspense, useRef, useState } from 'react';
import { Model } from '../utils/preload';
import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Modelview() {
  // camara para el modelo
  const cameraControlLogo = useRef<any | undefined>();

  // modelo
  const logo = useRef(new THREE.Group());

  // rotacion
  const [rotacion, setRotacion] = useState(0);
  return (
    <Canvas>
      <Suspense
        fallback={
          <Html>
            <div>Loading</div>
          </Html>
        }
      >
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />

        <Model />
        <OrbitControls
          makeDefault
          ref={cameraControlLogo}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setRotacion(cameraControlLogo.current.getAzimuthalAngle())}
        />

        <directionalLight intensity={4} position={[0, 1, 3]} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}

export default Modelview;
