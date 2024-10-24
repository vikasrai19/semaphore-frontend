import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Earth(props) {
    const { nodes, materials } = useGLTF('./models/earth2.glb')
    const earthRef = useRef()

    useFrame(() => {
        earthRef.current.rotation.y += 0.0075
    })

    return (

        <>
            <ambientLight intensity={1} />
            <directionalLight
                intensity={10}
                position={[5, 5, 5]}
                castShadow
            />
            <group {...props} dispose={null} ref={earthRef} scale={[0.001, 0.001, 0.001]} position={[-1.4, -2, 0]}>
                <mesh geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
            </group>

        </>
    )
}

useGLTF.preload('./models/earth2.glb')
