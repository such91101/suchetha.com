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
      scale={hovered ? 0.9 : 0.8}
    >
      <sphereGeometry args={[1.2, 128, 128]} />
      <MeshDistortMaterial
        distort={0.25}
        speed={5}
        transmission={1}
        thickness={-2}
        roughness={0}
        metalness={0.1}
        iridescence={1}
        iridescenceIOR={1.8}
        iridescenceThicknessRange={[0, 1500]}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={2.5}
        toneMapped={false}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
}