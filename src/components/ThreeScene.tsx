"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/contexts/ThemeContext";

const MouseParallax = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(({ pointer }) => {
    mouse.current.x += (pointer.x * viewport.width * 0.08 - mouse.current.x) * 0.05;
    mouse.current.y += (pointer.y * viewport.height * 0.08 - mouse.current.y) * 0.05;
    if (groupRef.current) {
      groupRef.current.position.x = mouse.current.x;
      groupRef.current.position.y = mouse.current.y;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

const LegendPlane = () => {
  const { theme } = useTheme();
  const texture = useLoader(THREE.TextureLoader, "/mm.png");
  const meshRef = useRef<THREE.Mesh>(null);

  const isDark = theme === "dark";

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[3.2, 4.5]} />
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={isDark ? 0.85 : 0.95}
          roughness={0.3}
          metalness={isDark ? 0.4 : 0.1}
          emissive={new THREE.Color("hsl(38, 80%, 55%)")}
          emissiveIntensity={isDark ? 0.15 : 0.05}
        />
      </mesh>
    </Float>
  );
};

const SmallOrbs = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const positions = useMemo(
    () =>
      Array.from({ length: 8 }, () => [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5 - 2,
      ] as [number, number, number]),
    []
  );

  return (
    <>
      {positions.map((pos, i) => (
        <Float key={i} speed={1.5 + i * 0.2} floatIntensity={1}>
          <mesh position={pos}>
            <sphereGeometry args={[0.06 + Math.random() * 0.08, 16, 16]} />
            <meshStandardMaterial
              color="hsl(38, 80%, 55%)"
              emissive="hsl(38, 80%, 55%)"
              emissiveIntensity={isDark ? 0.6 : 0.3}
              transparent
              opacity={isDark ? 0.5 : 0.3}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const SceneContent = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <ambientLight intensity={isDark ? 0.4 : 0.8} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={isDark ? 1.2 : 0.8}
        color={isDark ? "hsl(38, 60%, 70%)" : "white"}
      />
      <pointLight
        position={[-3, -2, 2]}
        intensity={isDark ? 0.8 : 0.4}
        color="hsl(38, 80%, 55%)"
      />
      <MouseParallax>
        <LegendPlane />
        <SmallOrbs />
      </MouseParallax>
    </>
  );
};

const ThreeScene = () => (
  <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <SceneContent />
    </Canvas>
  </div>
);

export default ThreeScene;
