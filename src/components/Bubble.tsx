import { useRef, useState } from 'react';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface BubbleProps {
  position: [number, number, number];
  label: string;
}

export function Bubble({ position }: BubbleProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <mesh 
      position={position} 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        distort={0.25}
        transmission={1.05}
        thickness={-0.5}
        roughness={0}
        iridescence={1}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 1200]}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}