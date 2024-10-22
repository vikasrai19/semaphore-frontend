import { Text } from "@react-three/drei"

const SemaphoreTitle = () => {
    return (
        <>
            <group position={[0.1, -2, 0]}>
                <Text
                    textAlign="center"
                    fontSize={0.35}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                >
                    SEMAPHORE {'\n'} 2K24
                </Text>
            </group>
        </>
    )
}

export { SemaphoreTitle }