import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Earth2(props) {
    const { nodes, materials } = useGLTF('./models/earth2.glb')
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
        </group>
    )
}

useGLTF.preload('./models/earth2.glb')
