"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useTheme } from "next-themes";
import { useState, useRef, Suspense, useSyncExternalStore } from "react";
import type { Points as PointsType } from "three";

interface StarBackgroundProps extends Partial<PointsInstancesProps> {
  isLight?: boolean;
}

const generateSpherePositions = (count: number, radius: number): Float32Array => {
  const buffer = new Float32Array(count * 3);
  random.inSphere(buffer, { radius });
  for (let i = 0; i < buffer.length; i++) {
    if (isNaN(buffer[i])) {
      buffer[i] = (Math.random() - 0.5) * radius;
    }
  }
  return buffer;
};

export const StarBackground = ({ isLight = false, ...props }: StarBackgroundProps) => {
  const ref = useRef<PointsType | null>(null);
  const secondaryRef = useRef<PointsType | null>(null);

  const [sphere] = useState(() => generateSpherePositions(1700, 1.2));
  const [secondarySphere] = useState(() => generateSpherePositions(1000, 1.2));

  useFrame((_state, delta) => {
    if (ref.current) {
      // Primary flowing rotation
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
    if (secondaryRef.current) {
      // Secondary flowing drift for multi-depth parallax
      secondaryRef.current.rotation.x -= delta / 14;
      secondaryRef.current.rotation.y += delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Primary Starfield Layer */}
      <Points
        key={isLight ? "light-primary" : "dark-primary"}
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color={isLight ? "#7042f8" : "#ffffff"}
          size={isLight ? 0.0035 : 0.002}
          sizeAttenuation
          depthWrite={false}
          opacity={isLight ? 0.9 : 1}
        />
      </Points>

      {/* Secondary Flowing Star Layer */}
      <Points
        key={isLight ? "light-secondary" : "dark-secondary"}
        ref={secondaryRef}
        stride={3}
        positions={new Float32Array(secondarySphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color={isLight ? "#9333ea" : "#c4b5fd"}
          size={isLight ? 0.0026 : 0.0014}
          sizeAttenuation
          depthWrite={false}
          opacity={isLight ? 0.8 : 0.75}
        />
      </Points>
    </group>
  );
};

const emptySubscribe = () => () => {};

export const StarsCanvas = () => {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const isLight = mounted && resolvedTheme === "light";

  return (
    <div className="w-full h-full fixed inset-0 -z-10 pointer-events-none block">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground isLight={isLight} />
        </Suspense>
      </Canvas>
    </div>
  );
};

