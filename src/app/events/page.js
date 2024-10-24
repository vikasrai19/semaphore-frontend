'use client'

import { LandingScene } from "@/components/landing_scene";
import { Stars } from "@/components/stars";
import { Sun } from "@/components/sun";
import { ScrollControls, Text, useScroll, Html } from "@react-three/drei";
import { Canvas, useFrame, } from "@react-three/fiber";

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
                <EventDetails title={'Stratagem'} desc={`Strategize, Lead , Conquer`} rules={rules} />
            </Canvas>
        </>
    )
}

const EventDetails = ({ title, desc, rules }) => {

    return (
        <>
            <Html position={[0, 0, 0]}>
                <p className="text-white text-[30px]"> Hello</p>

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