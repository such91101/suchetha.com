import { Canvas } from '@react-three/fiber';
import { Environment, Shadow, OrbitControls, Float } from '@react-three/drei';
import { Bubble } from './Bubble';
import * as THREE from 'three';

const bubbleData = [
  { position: [-6, 2, -2] as [number, number, number], label: "Projects" },
  { position: [-3, -1, 2] as [number, number, number], label: "Blog" },
  { position: [0, 1.5, -3] as [number, number, number], label: "Art" },
  { position: [3, -1, 2] as [number, number, number], label: "Music" },
  { position: [6, 2, -2] as [number, number, number], label: "Photos" },
];

export function BubbleScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 10], fov: 45 }} 
      style={{ background: 'transparent' }}
      gl={{ 
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding
      }}
    >
      {bubbleData.map((bubble, index) => (
        <Float key={index} floatIntensity={2} speed={2} rotationIntensity={2}>
          <Bubble {...bubble} />
          <Shadow 
            scale={3} 
            position={[bubble.position[0], -2, bubble.position[2]]} 
            opacity={0.2} 
          />
        </Float>
      ))}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <Environment preset="apartment" />
    </Canvas>
  );
}