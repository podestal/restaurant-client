import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three'; // Import THREE for types
import cheese from '../../assets/models/cheese.glb';

const RotatingModel = () => {
  const modelRef = useRef<THREE.Group>(null);

  // Rotate the model inside the Canvas context
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the speed of rotation
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={useGLTF(cheese).scene} 
      scale={0.3} 
      position={[0, -0.5, 0]} // Slightly lower the model to center it
    />
  );
};

const My3DModel = () => {
  return (
    <Canvas
      className="w-full h-screen"
      camera={{ position: [0, 1, 2], fov: 50 }} // Adjust camera position and field of view
    >
      <Suspense>
        <Stage
          adjustCamera={false} // Prevent Stage from overriding the camera position

        >
          {/* Render the RotatingModel component inside the Canvas */}
          <RotatingModel />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

export default My3DModel;
