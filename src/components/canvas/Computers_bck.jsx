import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./BinariStatue/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.50} groundColor='black' />
     
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.3 : 2.20}
        position={isMobile ? [0, -8, -2.2] : [-1.5, -11.25, -0.4]}
        rotation={[-12.4, -5, -6.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  

   useEffect(() => {
     // Add a listener for changes to the screen size
     const mediaQuery = window.matchMedia("(max-width: 500px)");

     // Set the initial value of the `isMobile` state variable
     setIsMobile(mediaQuery.matches);

     // Define a callback function to handle changes to the media query
     const handleMediaQueryChange = (event) => {
       setIsMobile(event.matches);
     };

     // Add the callback function as a listener for changes to the media query
     mediaQuery.addEventListener("change", handleMediaQueryChange);

     // Remove the listener when the component is unmounted
     return () => {
       mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
   }, []);

  
 
  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 0, 15], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={true} 
          enableRotate={true}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
