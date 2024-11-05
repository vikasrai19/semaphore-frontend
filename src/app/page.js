'use client'

import { LandingScene } from "@/components/landing_scene";
import { RocketLoader } from "@/components/model_components/rocket_loader";
import { Stars } from "@/components/stars";
import { useQueryConfig } from "@/config/useQuery.config";
import { useGetData } from "@/hooks/useGetData";
import { Html, ScrollControls, useScroll } from "@react-three/drei";
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
    // <Suspense fallback={<> <Html position={[0, -2, 0]}> <p className="text-[100px] text-white font-funkrocker"> Loading</p> </Html></>} >
    <Suspense fallback={<><div className="w-screen h-screen border bg-black flex flex-col items-center justify-center">
      <p className="text-[30px] lg:text-[50px] font-funkrocker text-white">Loading .. Please wait </p>
    </div> </>} >
      <Canvas>
        <ScrollControls pages={10} >

          <LandingScene eventsData={eventsData} />
          <Stars />
        </ScrollControls>
      </Canvas >
    </Suspense>
  );
}
