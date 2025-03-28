import { Canvas } from '@react-three/fiber';
import { Environment, Shadow, OrbitControls, Float, Text } from '@react-three/drei';
import { Bubble } from './Bubble';
import { useEffect } from 'react';

const bubbleData: Array<{ position: [number, number, number]; label: string }> = [
  { position: [-4, 0, 0], label: "Projects" },
  { position: [-2, 0, 2], label: "Blog" },
  { position: [0, 0, -2], label: "Art" },
  { position: [2, 0, 2], label: "Music" },
  { position: [4, 0, 0], label: "Photos" },
];

export function BubbleScene() {
  useEffect(() => {
    console.log('BubbleScene mounted');
  }, []);

  return (
    <Canvas camera={{ position: [0, 5, 15], fov: 65 }}>
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      {bubbleData.map((bubble, index) => (
        <Float key={index} floatIntensity={1.5} speed={0.5}>
          <Bubble position={bubble.position} label={bubble.label} />
          <Text
            position={[bubble.position[0], bubble.position[1] - 2, bubble.position[2]]}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {bubble.label}
          </Text>
          <Shadow scale={2} position={[bubble.position[0], -1.35, bubble.position[2]]} opacity={0.15} />
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