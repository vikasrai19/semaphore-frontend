/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/neptune.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/neptune.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Neptune.geometry} material={materials['Default OBJ.001']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/neptune.glb')
