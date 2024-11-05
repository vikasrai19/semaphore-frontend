'use client';


import { Float, PerspectiveCamera, Text, useScroll } from '@react-three/drei';
import { Moon } from './moon';
import { Mars } from './mars';
import { useFrame, useThree } from '@react-three/fiber';
import { SpaceShuttle } from './space_shuttle';
import { Suspense, useMemo, useRef, useState } from 'react';
import * as THREE from "three"
import { Earth } from './earth';
import { SemaphoreTitle } from './semaphore_title';
import { EventCard } from './event_card';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';
import { Button3D } from './button_3d';
import { toast } from 'react-toastify';
import { ModelLoading } from './event_details_component';
import { RocketLoader } from './model_components/rocket_loader';

const LINE_NB_POINTS = 2000;

const LandingScene = ({ eventsData }) => {
    const router = useRouter()
    const cameraGroup = useRef(null)
    const scroll = useScroll()
    const cardGroupRef = useRef()
    const isMobile = useMediaQuery({ maxWidth: 768 })


    const curve = useMemo(() => {
        if (scroll.offset > 0.2) {
            airplane.current.opacity = 1;
        }
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, -2, 0),
            new THREE.Vector3(0.5, -2, -25),
            new THREE.Vector3(-1, -2, -50),
            new THREE.Vector3(1.5, -2, -75),
            new THREE.Vector3(-1, -2, -100),
            new THREE.Vector3(1, -2, -125),
            new THREE.Vector3(-1, -2, -150),
            new THREE.Vector3(1, -2, -175),
            new THREE.Vector3(-1, -2, -200),
            new THREE.Vector3(1, -2, -225),
            new THREE.Vector3(-1, -2, -250),
            new THREE.Vector3(-1, -2, -275),
            new THREE.Vector3(-1, -2, -300),
        ],
            false,
            "catmullrom",
            0.5,
        )
    }, [])

    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_NB_POINTS)
    }, [curve])

    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, -0.2);
        shape.lineTo(0, 0.2);

        return shape;
    }, [curve]);

    useFrame((_state, delta) => {
        if (scroll.offset > 0.014 && scroll.offset < 0.985) {
            setSpaceShuttleScale([0.3, 0.3, 0.3])
            setCardGroupScale([1, 1, 1])
        } else {
            setSpaceShuttleScale([0, 0, 0])
            setCardGroupScale([0, 0, 0])
        }
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length - 1
        )
        const curPoint = linePoints[curPointIndex];


        const pointHead = linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];
        if (curPoint) {

            const xDisplacement = (pointHead.x - curPoint.x) * 80;

            const angleRotation = (xDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(xDisplacement), Math.PI / 3);
            const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
                new THREE.Euler(
                    airplane.current.rotation.x,
                    airplane.current.rotation.y,
                    angleRotation,
                )
            )
            airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2)
            cameraGroup.current.position.lerp(curPoint, delta * 24)
        }

    })

    const airplane = useRef()
    const spaceShuttleRef = useRef()
    const [spaceShuttleScale, setSpaceShuttleScale] = useState([0, 0, 0])
    const [cardGroupScale, setCardGroupScale] = useState([0, 0, 0])

    return (
        <>
            <ambientLight intensity={1} />

            <Suspense fallback={<RocketLoader scale={[isMobile ? 0.15 : 0.35, isMobile ? 0.15 : 0.35, isMobile ? 0.15 : 0.35]} position={[isMobile ? -0.25 : -1.2, isMobile ? -2 : -2, 0]} />}>

                <Earth />
            </Suspense>
            <Suspense fallback={<></>}>
                <Moon />
            </Suspense>
            <SemaphoreTitle />
            <Button3D label={'Login'} position={[isMobile ? 0.6 : 4.3, isMobile ? 0.3 : 0.7, -6]} scale={[1, 1, 1]} onClick={() => {
                toast.info("Loading Login Page .. please wait")
                router.push(`/login`)
            }} />
            <Button3D label={'Register Now'} position={[-1, isMobile ? -1.2 : -1.6, -300]} onClick={() => {
                toast.info("Loading Register Page .. please wait")
                router.push(`/register`)
            }} />
            <Suspense fallback={<ModelLoading />}>

                <Mars position={[-1, -5, -300]} />
            </Suspense>
            <group position={[0, isMobile ? -3.7 : -3.9, -6]}>
                <Text
                    textAlign="center"
                    fontSize={isMobile ? 0.09 : 0.1}
                    font={'./fonts/funkrocker.ttf'}
                    color={"white"}
                    anchorX={"center"}
                    anchorY={"middle"}
                    maxWidth={isMobile ? 1.3 : 4}
                    position={[0, 0, 0]}
                    letterSpacing={0.1}
                    lineHeight={1.2}
                >
                    Start Scrolling to navigate through the website
                </Text>
            </group>
            <group ref={cardGroupRef} scale={cardGroupScale}>

                {eventsData?.map((ele, index) => {
                    return (
                        <EventCard key={index} data={ele} index={index} cardPosition={[index % 2 == 0 ? isMobile ? 2 : 5.0 : isMobile ? -2 : -5, -3, -27 * (index + 1)]} />
                    )
                })}
            </group>
            <group ref={cameraGroup}>
                <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
                <group ref={airplane}>
                    <Suspense fallback={<></>}>

                        <Float intensity={1} speed={1}>

                            <SpaceShuttle
                                ref={spaceShuttleRef}
                                rotation-y={-Math.PI / 2}
                                scale={spaceShuttleScale}
                                position-y={-0.15}
                                position-x={0}
                            />

                        </Float>
                    </Suspense>
                </group>
            </group>
            <group position-y={-2}>
                <mesh >
                    <extrudeGeometry
                        args={[
                            shape,
                            {
                                steps: LINE_NB_POINTS,
                                bevelEnabled: false,
                                extrudePath: curve,

                            },
                        ]}
                    />
                    <meshStandardMaterial color={"white"} opacity={0} transparent />
                </mesh>
            </group>
        </>
    )
}

export { LandingScene }