import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh, Object3D } from 'three';

interface GLTFData {
  nodes: { [name: string]: Object3D };
  materials: { [name: string]: any };
}

export function Logo(props: any) {
  const { nodes, materials } = useGLTF('/logo.glb') as GLTFData;
  const OuterCircle = useRef<Mesh>(null);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.OuterCircle.geometry}
        ref={OuterCircle}
        material={materials['SVGMat.031']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.glass.geometry}
        material={materials['Material.001']}
        position={[3.19, -0.343, -3.174]}
        scale={3.064}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.I001.geometry}
        material={materials['SVGMat.047']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.dot1.geometry}
        material={materials['SVGMat.048']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.M.geometry}
        material={materials['SVGMat.049']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.dot2.geometry}
        material={materials['SVGMat.050']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.A001.geometry}
        material={materials['SVGMat.035']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.G001.geometry}
        material={materials['SVGMat.052']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.do4.geometry}
        material={materials['SVGMat.040']}
        scale={[73.013, 56.098, 73.013]}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.dot3.geometry}
        material={materials['SVGMat.051']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.E001.geometry}
        material={materials['SVGMat.053']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.R.geometry}
        material={materials['SVGMat.032']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.T.geometry}
        material={materials['SVGMat.038']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.Y.geometry}
        material={materials['SVGMat.037']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.O.geometry}
        material={materials['SVGMat.033']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.A.geometry}
        material={materials['SVGMat.034']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.C.geometry}
        material={materials['SVGMat.039']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.F.geometry}
        material={materials['SVGMat.041']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.S.geometry}
        material={materials['SVGMat.029']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.I.geometry}
        material={materials['SVGMat.029']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.E.geometry}
        material={materials['SVGMat.029']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.D.geometry}
        material={materials['SVGMat.029']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.G.geometry}
        material={materials['SVGMat.029']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.N.geometry}
        material={materials['SVGMat.029']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.rw1.geometry}
        material={materials['SVGMat.054']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.rw2.geometry}
        material={materials['SVGMat.057']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.rw3.geometry}
        material={materials['SVGMat.056']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.rw4.geometry}
        material={materials['SVGMat.055']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.rw5.geometry}
        material={materials['SVGMat.036']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.lw1.geometry}
        material={materials['SVGMat.042']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.lw2.geometry}
        material={materials['SVGMat.043']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.lw3.geometry}
        material={materials['SVGMat.046']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.lw4.geometry}
        material={materials['SVGMat.045']}
        scale={73.013}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.lw5.geometry}
        material={materials['SVGMat.044']}
        scale={73.013}
      />
    </group>
  );
}

useGLTF.preload('/logo.glb');
