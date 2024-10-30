/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/mercury.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/mercury.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} />
    </group>
  )
}

useGLTF.preload('/mercury.glb')
