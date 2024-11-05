'use client'

import { LandingScene } from "@/components/landing_scene";
import { RocketLoader } from "@/components/model_components/rocket_loader";
import { Stars } from "@/components/stars";
import { useQueryConfig } from "@/config/useQuery.config";
import { useGetData } from "@/hooks/useGetData";
import { ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";


export default function Home() {

  const isMobile = useMediaQuery({ maxWidth: 768 })

  const { data: eventsData, isLoading: isEventsLoading } = useGetData(
    'eventsList',
    `${process.env.NEXT_PUBLIC_URL}/web/api/events/v1/FindAll`,
    useQueryConfig,
  );
  return (
    <Canvas>
      <ScrollControls pages={10} >
        <Suspense fallback={<RocketLoader />} >

          <LandingScene eventsData={eventsData} />
        </Suspense>
        <Stars />
      </ScrollControls>
    </Canvas >
  );
}
