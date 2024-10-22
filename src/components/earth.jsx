import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Earth(props) {
    const { nodes, materials } = useGLTF('./models/earth.glb')
    const earthRef = useRef()

    useFrame(() => {
        earthRef.current.rotation.y += 0.0075
    })

    return (
        <group {...props} dispose={null} ref={earthRef}>
            <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
        </group>
    )
}

useGLTF.preload('./models/earth.glb')
