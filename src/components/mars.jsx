import React, { useEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Mars(props) {
    const { nodes, materials } = useGLTF('./models/mars.glb')

    return (
        <group {...props} dispose={null} >
            <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
        </group>
    )
}

useGLTF.preload('./models/mars.glb')
