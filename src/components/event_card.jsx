import { Text } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { TextureLoader } from "three"

const EventCard = (props) => {
    const cardRef = useRef()
    const texture = useLoader(TextureLoader, "./images/bg.png")



    return (
        <>
            <group ref={cardRef} position={props.cardPosition}>
                <mesh>
                    <planeGeometry args={[3, 4]} />
                    <meshBasicMaterial color={"white"} opacity={0.0} transparent />
                </mesh>

                {/* <mesh position={[-4, -1.5, -20]} scale={[1.5, 1.5, 1.5]}>
                    <planeGeometry args={[2.5, 1.5]} />
                    <meshBasicMaterial map={texture} />
                </mesh> */}

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
            </group>
        </>
    )
}

export { EventCard }