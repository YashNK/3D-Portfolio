import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Room = ({ isMobile }) => {
  const room = useGLTF("./room/room.gltf");

  return (
    <mesh>
      
      <hemisphereLight intensity={1} groundColor='black' />
      <spotLight
        color={"blue"}
        position={isMobile ? [50, 20, 1] : [20, 20, 20]}
        penumbra={2.1}
        intensity={10}
        angle={17}
        
      />
      <pointLight color={"blue"} intensity={10} />
      <primitive
      penumbra={5}
      
        object={room.scene}
        scale={isMobile ? 1.3 : 1.5}
        position={isMobile ? [1, -2.5, -1.5] : [0.6, -4, -0.3]}
        rotation={[0, 2.8, -0.6]}
      />
    </mesh>
  );
};

const RoomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 10, 10], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          
          autoRotateSpeed={1}
          enableZoom={false}
          enableRotate={true}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
          // maxAzimuthAngle={Math.PI / 2}
        />
        <Room isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;