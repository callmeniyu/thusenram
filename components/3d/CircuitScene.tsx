'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars, Trail } from '@react-three/drei';
import * as THREE from 'three';

function ElectrifyingParticles(props: any) {
  const ref = useRef<any>();
  const [sphere] = useState(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const r = 10 * Math.cbrt(Math.random()); 
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#FFD700"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingHardware() {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
    }
  });

  return (
    <group ref={ref}>
      {/* Central Core representing the 'brain' or main hub */}
      <mesh>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          wireframe 
          emissive="#FFD700" 
          emissiveIntensity={0.5} 
        />
      </mesh>
      
      {/* Inner solid core */}
      <mesh>
        <dodecahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color="#FFD700" roughnes={0.2} metalness={0.8} />
      </mesh>

      {/* Orbiting Elements */}
      <group rotation={[1, 0, 0]}>
        <mesh position={[2.5, 0, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color="#ffffff" emissive="#FFD700" emissiveIntensity={2} />
        </mesh>
      </group>
      <group rotation={[0, 1, 0]}>
        <mesh position={[0, 2.5, 0]}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#ffffff" emissive="#FFD700" emissiveIntensity={2} />
        </mesh>
      </group>
    </group>
  );
}

export default function CircuitScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <fog attach="fog" args={['#000', 5, 20]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#FFD700" intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <FloatingHardware />
        </Float>
        
        <ElectrifyingParticles />
      </Canvas>
    </div>
  );
}
