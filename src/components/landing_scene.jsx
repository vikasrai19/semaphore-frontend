'use client';


import { Float, OrbitControls, PerspectiveCamera, ScrollControls, Text, useScroll } from '@react-three/drei';
import { Moon } from './moon';
import { Mars } from './mars';
import { useFrame, useThree } from '@react-three/fiber';
import { SpaceShuttle } from './space_shuttle';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from "three"
import { GlowingMoon } from './glowing_moon';
import { Earth } from './earth';
import { SemaphoreTitle } from './semaphore_title';
import { EventCard } from './event_card';
import { Earth2 } from './model_components/earth';

const LINE_NB_POINTS = 2000;

const eventData = [
    { title: 'IT MANAGER', eventName: 'IT MANAGER EVENT', desc: 'The king of all  .. win all the rounds and take home a beautiful trophy', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
    { title: 'CODING', eventName: 'Stellar Syntax', desc: 'This is a coding competition where you will be tested to your core', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
    { title: 'WEB DESIGNING', eventName: 'WEB DESIGNING EVENT', desc: 'Design and develop portfolios for various companies and take home lots of cash', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
    { title: 'IT MANAGER', eventName: 'IT MANAGER EVENT', desc: 'The king of all  .. win all the rounds and take home a beautiful trophy', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
    { title: 'CODING', eventName: 'Stellar Syntax', desc: 'This is a coding competition where you will be tested to your core', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
    { title: 'WEB DESIGNING', eventName: 'WEB DESIGNING EVENT', desc: 'Design and develop portfolios for various companies and take home lots of cash', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
    { title: 'IT MANAGER', eventName: 'IT MANAGER EVENT', desc: 'The king of all  .. win all the rounds and take home a beautiful trophy', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
    { title: 'CODING', eventName: 'Stellar Syntax', desc: 'This is a coding competition where you will be tested to your core', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
    { title: 'WEB DESIGNING', eventName: 'WEB DESIGNING EVENT', desc: 'Design and develop portfolios for various companies and take home lots of cash', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
    { title: 'WEB DESIGNING', eventName: 'WEB DESIGNING EVENT', desc: 'Design and develop portfolios for various companies and take home lots of cash', img: '', head1: 'Vikas', head2: '', head1Contact: '1234', head2Contact: '2234' },
]

const LandingScene = () => {

    const cameraGroup = useRef(null)
    const scroll = useScroll()
    const cardGroupRef = useRef()


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
            <Earth />
            <Moon />
            <SemaphoreTitle />
            <Mars position={[-1, -5, -300]} />
            <group ref={cardGroupRef} scale={cardGroupScale}>

                {eventData?.map((ele, index) => {
                    return (
                        <EventCard key={index} data={ele} index={index} cardPosition={[index % 2 == 0 ? 4 : -4, -2, -25 * (index + 2)]} />
                    )
                })}
            </group>
            <group ref={cameraGroup}>
                <PerspectiveCamera position={[0, 0, 5]} fov={30} makeDefault />
                <group ref={airplane}>
                    <Float intensity={1} speed={1}>

                        <SpaceShuttle
                            ref={spaceShuttleRef}
                            rotation-y={-Math.PI / 2}
                            scale={spaceShuttleScale}
                            position-y={-0.15}
                            position-x={0}
                        />

                    </Float>
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

    // const { camera } = useThree()
    // const scroll = useScroll()
    // const minFov = 30;
    // const maxFov = 70;

    // useFrame(() => {
    //     if (scroll) {
    //         const zoomFactor = 20; // Adjust this for zoom sensitivity
    //         let newFov = 50 - (scroll.offset * zoomFactor); // Decrease FOV as scroll increases (zoom in)
    //         newFov = Math.min(Math.max(newFov, minFov), maxFov);
    //         // Apply the new FOV directly to the camera
    //         camera.fov = newFov;
    //         camera.updateProjectionMatrix(); // Update the camera's projection matrix after changing FOV

    //     }
    // })
    // return (
    //     <>
    //         <ambientLight intensity={1} />
    //         <OrbitControls
    //             enablePan={false}
    //             enableRotate={false}
    //         />
    //         <ScrollControls damping={0.25} >
    //             <Rocket />
    //             <Moon />
    //             <Mars />
    //         </ScrollControls>
    //     </>
    // )
}

export { LandingScene }