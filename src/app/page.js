'use client'

import { LandingScene } from "@/components/landing_scene";
import { Stars } from "@/components/stars";
import { ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";


export default function Home() {

  return (
    <Canvas>
      <ScrollControls pages={10} >
        <LandingScene />
        <Stars />
      </ScrollControls>
    </Canvas >
  );
}
