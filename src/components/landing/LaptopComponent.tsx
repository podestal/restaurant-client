import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three'; 
import laptop from '../../assets/models/laptop.glb';

const RotatingModel = () => {
    const modelRef = useRef<THREE.Group>(null);
  
    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; 
      }
    });
  
    return (
      <primitive 
        ref={modelRef} 
        object={useGLTF(laptop).scene} 
        scale={0.4} 
        position={[0, -0.5, 0]}
      />
    );
  };

const LaptopComponent = () => {
  return (
    <Canvas
        className="w-full h-screen"
        camera={{ position: [0, 1, 2], fov: 50 }}
    >
        <Suspense>
        <Stage
            adjustCamera={false} 
    
        >
            <RotatingModel />
        </Stage>
        </Suspense>
    </Canvas>
  )
}

export default LaptopComponent