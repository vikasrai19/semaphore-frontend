import { Edges, Text } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

const Button3D = ({ label, onClick, position }) => {
    const buttonRef = useRef()

    // Animation: scale button slightly when hovered
    const handlePointerOver = () => {
        buttonRef.current.scale.set(1.1, 1.1, 1.1)
    }

    const handlePointerOut = () => {
        buttonRef.current.scale.set(1, 1, 1)
    }

    return (
        <group ref={buttonRef} position={position}>
            {/* Button Base */}
            <mesh
                onClick={onClick}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                position={[0, 0, 0]}
            >
                <boxGeometry args={[1.5, 0.5, 0.1]} />
                <meshBasicMaterial color={"transparent"} opacity={0} transparent />
                <Edges color={"white"} />
                {/* <meshStandardMaterial color="royalblue" /> */}
            </mesh>

            {/* Button Label */}
            <Text
                fontSize={0.15}
                color="white"
                anchorX="center"
                anchorY="middle"
                font={'./fonts/funkrocker.ttf'}
                position={[0, 0, 0.06]} // Slightly above the button to avoid z-fighting
            >
                {label}
            </Text>
        </group>
    )
}

export { Button3D }
