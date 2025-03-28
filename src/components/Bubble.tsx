import { useRef, useState } from 'react';
import * as THREE from 'three';

interface BubbleProps {
  position: [number, number, number];
  label: string;
}

export function Bubble({ position, label }: BubbleProps) {
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
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={hovered ? "#ff0000" : "#0088ff"} />
    </mesh>
  );
}