import { Html, Text, useScroll } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { TextureLoader } from "three"
import { Button3D } from "./button_3d"

const EventCard = (props) => {
    const cardRef = useRef()
    const texture = useLoader(TextureLoader, "./images/bg.png")
    const scroll = useScroll()


    return (
        <>
            <group ref={cardRef} position={props.cardPosition}>
                <mesh>
                    <planeGeometry args={[3, 4]} />
                    <meshBasicMaterial color={"white"} opacity={0.0} transparent />
                </mesh>

                <Text
                    textAlign="center"
                    fontSize={0.35}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                    anchorX={"center"}
                    anchorY={"middle"}
                    position={[0, 1.5, 0]}
                >
                    {props.data.eventName}
                </Text>

                <Text
                    textAlign="center"
                    fontSize={0.2}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                    anchorX={"center"}
                    anchorY={"middle"}
                    maxWidth={2.5}
                    position={[0, 0.7, 0]}
                    letterSpacing={0.1}
                    lineHeight={1.2}
                >
                    {props.data.desc}
                </Text>
                <Button3D label={'Know More'} position={[0, -0.3, 0]} />
            </group>
        </>
    )
}

export { EventCard }