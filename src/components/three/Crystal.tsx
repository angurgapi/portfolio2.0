import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { isMobile } from "react-device-detect";

import Loader from "../Loader";

const Crystal = () => {
  const crystal = useGLTF("./crystal/scene.gltf");
  const mobCrystal = useGLTF("./crystal/mobScene.gltf");

  const crystalScene = useRef<any>(null);

  useEffect(() => {
    if (isMobile && crystalScene.current) {
      let currentRotation = 0;
      let targetRotation = 0;

      const handleTouchStart = () => {
        targetRotation += 0.02;
      };

      const updateRotation = () => {
        const deltaRotation = targetRotation - currentRotation;
        currentRotation += deltaRotation * 0.1;
        crystalScene.current!.rotation.y = currentRotation;

        requestAnimationFrame(updateRotation);
      };

      window.addEventListener("scroll", handleTouchStart);
      requestAnimationFrame(updateRotation);

      return () => {
        window.removeEventListener("scroll", handleTouchStart);
      };
    }
  }, []);
  return (
    <primitive
      object={isMobile ? mobCrystal.scene : crystal.scene}
      scale={0.15}
      position-y={-3}
      ref={crystalScene}
      // position-x={-15}
      rotation-y={0}
    />
  );
};

const CrystalCanvas = React.memo(() => {
  // const orbitControlsRef = useRef<any>(null);
  const [rotate, setRotate] = useState(false);

  return (
    <Canvas
      shadows
      frameloop={isMobile ? "always" : "demand"}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-8, 1, -4],
      }}
    >
      <directionalLight castShadow position={[4, 13, 6]} color={0xfffade} />
      {/* <pointLight position={[-14, 3, 6]} /> */}
      <ambientLight color={0x0909ab} />
      <Suspense
        fallback={
          <Loader
            onLoaderComplete={() => {
              setTimeout(() => {
                setRotate(true);
              }, 1000);
            }}
          />
        }
      >
        <Crystal />
        {!isMobile && (
          <OrbitControls
            // ref={orbitControlsRef}
            autoRotate={rotate}
            rotateSpeed={isMobile ? 0.3 : 0.5}
            enableDamping={true}
            dampingFactor={0.05}
            enableZoom={false}
            enablePan={false}
            // enableRotate={false}
          />
        )}
        <Preload all />
      </Suspense>
    </Canvas>
  );
});

export default CrystalCanvas;
