import React, { useEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Moon(props) {
    const { nodes, materials } = useGLTF('./models/moon2.glb')
    const moonRef = useRef()

    useFrame(() => {
        moonRef.current.rotation.y += 0.01
    })

    return (
        <>
            <group castShadow {...props} ref={moonRef} dispose={null} position={[0.95, -2, 2]} scale={[0.0005, 0.0005, 0.0005]}>
                <mesh geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} />
            </group>

            {/* <group castShadow {...props} ref={moonRef} dispose={null} position={[0.95, -2, 2]} scale={[0.25, 0.25, 0.25]} >
                <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
            </group> */}
        </>
    )
}

useGLTF.preload('./models/moon2.glb')
