// 'use client';
// import '@/app/ui/vision.css';
// import React from 'react';
// import dynamic from 'next/dynamic';

// import * as THREE from 'three'
// import { useRef, useReducer, useMemo } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Environment, Lightformer } from '@react-three/drei'
// import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
// import { easing } from 'maath'
// import { Effects } from '@/Effects.jsx'


// const accents = ['#ff4060', '#ffcc00', '#20ffa0', '#4060ff']
// const shuffle = (accent = 0) => [
//   { color: '#444', roughness: 0.1, metalness: 0.5 },
//   { color: '#444', roughness: 0.1, metalness: 0.5 },
//   { color: '#444', roughness: 0.1, metalness: 0.5 },
//   { color: 'white', roughness: 0.1, metalness: 0.1 },
//   { color: 'white', roughness: 0.1, metalness: 0.1 },
//   { color: 'white', roughness: 0.1, metalness: 0.1 },
//   { color: accents[accent], roughness: 0.1, accent: true },
//   { color: accents[accent], roughness: 0.1, accent: true },
//   { color: accents[accent], roughness: 0.1, accent: true },
//   { color: '#444', roughness: 0.1 },
//   { color: '#444', roughness: 0.3 },
//   { color: '#444', roughness: 0.3 },
//   { color: 'white', roughness: 0.1 },
//   { color: 'white', roughness: 0.2 },
//   { color: 'white', roughness: 0.1 },
//   { color: accents[accent], roughness: 0.1, accent: true, transparent: true, opacity: 0.5 },
//   { color: accents[accent], roughness: 0.3, accent: true },
//   { color: accents[accent], roughness: 0.1, accent: true }
// ]

// export default function Vision() {
//   const [accent, click] = useReducer((state) => ++state % accents.length, 0)
//   const connectors = useMemo(() => shuffle(accent), [accent])
//   return (
//     <Canvas flat shadows onClick={click} dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 0, 30], fov: 17.5, near: 10, far: 40 }} {...props}>
//       <color attach="background" args={['#141622']} />
//       <Physics /*debug*/ timeStep="vary" gravity={[0, 0, 0]}>
//         <Pointer />
//         {connectors.map((props, i) => (
//           <Sphere key={i} {...props} />
//         ))}
//       </Physics>
//       <Environment resolution={256}>
//         <group rotation={[-Math.PI / 3, 0, 1]}>
//           <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
//           <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
//           <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
//           <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
//           <Lightformer form="ring" color="#4060ff" intensity={80} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={10} />
//         </group>
//       </Environment>
//       <Effects />
//     </Canvas>
//   )
//   }