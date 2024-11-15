import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from '../components/Loader'

const PcModel = () => {
    // this is 3d model for pc
    // one more thing where the hell this mesh is coming from ?

    const computer = useGLTF('../../public/matilda/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='white' />
            <hemisphereLight intensity={2.5} />
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={0.04}
                position={[-0.8, -4, 0]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const Matilda = () => {
    return (
        <div className='w-full h-screen relative grid place-items-center bg-black py-[5%]'>
            <h1 className='text-center font-bold text-3xl text-white'>Matilda</h1>
            <Canvas
                frameloop='demand'
                shadows
                camera={{ position: [20, 3, 5], fov: 25 }}
                gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        enableZoom={true}
                        maxPolarAngle={Math.PI}
                    // minPolarAngle={Math.PI}
                    />
                    <PcModel />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default Matilda