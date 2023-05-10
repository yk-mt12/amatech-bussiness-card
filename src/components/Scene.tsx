import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./AmatechLogo";
import { Suspense } from "react";
const Scene = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
    >
      <directionalLight position={[1, 1, 1]} intensity={0.8} />
      <ambientLight args={[0xffffff]} intensity={0.2} />
      <OrbitControls enablePan={false} />
      <Suspense fallback={null}>
        <Model />
        <Environment preset="sunset" background />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
