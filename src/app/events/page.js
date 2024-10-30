'use client'

import { LandingScene } from "@/components/landing_scene";
import { Stars } from "@/components/stars";
import { Sun } from "@/components/sun";
import { ScrollControls, Text, useScroll, Html } from "@react-three/drei";
import { Canvas, useFrame, } from "@react-three/fiber";
import { useEffect } from "react";

export default function Events() {

    const rules = [
        `⁠Participants must attempt all the tasks within the given time frame for each round.`,
        `Any form of communication between participants during engaged rounds are not allowed.`,
        `⁠Any attempt to cheat, violate the rules, or failure to comply with instructions will result in immediate disqualification.`,
        `⁠Judges’ decisions regarding the quality of performances are final and binding.`,
        `⁠Participants enrolling in this event cannot participate in any other event.`
    ]

    return (
        <>
            <Canvas>
                <ambientLight intensity={0.5} />
                <Stars />
                <Sun scale={[0.002, 0.0023, 0.002]} position={[-3, 0, 0]} />
                <EventDetails title={'Stratagem'} event={'IT Manager'} desc={`Strategize, Lead , Conquer`} rules={rules} />
            </Canvas>
        </>
    )
}

const EventDetails = ({ title, event, desc, rules }) => {

    return (
        <>
            <Html position={[0, 3, 0]} className="w-[40vw]">
                <div className="p-8 border border-slate-300 w-full flex flex-col space-y-6 justify-center items-center rounded-xl">
                    <div className="flex flex-col space-y-2 items-center">
                        <h3 className="text-white text-[60px] font-dosisBold"> {title} </h3>
                        <p className="text-white text-[20px] font-dosisMedium"> {event}</p>
                    </div>
                    <p className="text-white text-[30px] font-dosisMedium w-full"> Rules : </p>
                    <div className="flex flex-col space-y-2">
                        {rules?.map((ele, index) => {
                            return (
                                <>
                                    <p className="text-slate-100 text-[22px] font-dosisRegular w-full">
                                        {index + 1}. {ele}
                                    </p>
                                </>
                            )
                        })}
                    </div>
                    <p className="text-white text-[30px] font-dosisMedium w-full text-center"> Event Heads : </p>
                    <div className="flex flex-row space-x-3 text-white justify-around w-full font-dosisMedium text-[20px]">
                        <div className="flex flex-col space-y-1">
                            <p>Vikas Rai</p>
                            <p>9448046877</p>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p>Vikas Rai</p>
                            <p>9448046877</p>
                        </div>
                    </div>
                </div>

            </Html>
            {/* <group position={[2, 0, 0]}>
                <Text
                    position={[0, 1.3, 0]}
                    textAlign="center"
                    fontSize={0.8}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                >
                    {title}
                </Text>

                <Text
                    position={[0, 0.6, 0]}
                    textAlign="center"
                    fontSize={0.2}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                >
                    {desc}
                </Text>

                <Text
                    position={[-1.2, 0, 0]}
                    textAlign="center"
                    fontSize={0.4}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                >
                    Rules
                </Text>
                <Text
                    position={[0, -1, 0]}
                    textAlign="center"
                    fontSize={0.2}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                >
                    Participants must attempt all the tasks within the given time frame for each round
                </Text>
                <Text
                    position={[0, -1.5, 0]}
                    textAlign="center"
                    fontSize={0.2}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                >
                    Any form of communication between participants during engaged rounds are not allowed.
                </Text>
                <Text
                    position={[0, -2, 0]}
                    textAlign="center"
                    fontSize={0.2}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                >
                    Any attempt to cheat, violate the rules, or failure to comply with instructions will result in immediate disqualification
                </Text>
            </group> */}

        </>
    )
}