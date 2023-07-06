import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from "../Loader";

const Crystal = () => {
  const crystal = useGLTF("./crystal/scene.gltf");

  return (
    <primitive
      object={crystal.scene}
      scale={0.15}
      position-y={-3}
      // position-x={-15}
      // rotation-y={-10}
    />
  );
};

const CrystalCanvas = () => {
  const orbitControlsRef = useRef<any>(null);

  useEffect(() => {
    // Start auto-rotation on component mount
    if (orbitControlsRef.current) {
      orbitControlsRef.current.autoRotate = true;
    }
  }, [orbitControlsRef.current]);
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-7, 3, 6],
      }}
    >
      <directionalLight castShadow position={[4, 13, 6]} color={0xfffade} />
      {/* <pointLight position={[-14, 3, 6]} /> */}
      <ambientLight color={0x0909ab} />
      <Suspense fallback={<Loader />}>
        <OrbitControls
          ref={orbitControlsRef}
          autoRotate={false}
          rotateSpeed={0.8}
          // enableDamping={false}
        />
        <Crystal />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CrystalCanvas;
