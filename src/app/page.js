'use client'

import { LandingScene } from "@/components/landing_scene";
import { Stars } from "@/components/stars";
import { useQueryConfig } from "@/config/useQuery.config";
import { useGetData } from "@/hooks/useGetData";
import { ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";


export default function Home() {

  const { data: eventsData, isLoading: isEventsLoading } = useGetData(
    'eventsList',
    `${process.env.NEXT_PUBLIC_URL}/web/api/events/v1/FindAll`,
    useQueryConfig,
  );
  return (
    <Canvas>
      <ScrollControls pages={10} >
        <LandingScene eventsData={eventsData} />
        <Stars />
      </ScrollControls>
    </Canvas >
  );
}
