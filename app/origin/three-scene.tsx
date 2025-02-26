// components/ThreeScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <RigidBody colliders="ball">
          <Sphere args={[1, 32, 32]} position={[0, 5, 0]}>
            <meshStandardMaterial color="orange" />
          </Sphere>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh receiveShadow position={[0, -1, 0]}>
            <boxGeometry args={[10, 1, 10]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        </RigidBody>
      </Physics>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;