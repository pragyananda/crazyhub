import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import {CanvasLoader} from "./Loader";


export const ModelCanvas = ({ Model }) => {
    const model = useGLTF(Model[0]);
    console.log(Model);
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 20], fov: 5 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <mesh position={[0, -1, 0]}>
                    <hemisphereLight intensity={10} groundColor='black' />
                    {/* <pointLight intensity={1} position={[10, 180, 10]}/> */}
                    <primitive object={model.scene} />
                    <directionalLight color="white" position={[50, 180, 0]} />
                </mesh>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}