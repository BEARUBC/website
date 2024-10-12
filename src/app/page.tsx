"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
import title from "./assets/bionics-outline.png";
import Scroller from "./components/Scroller";
import teamphoto from "./assets/team-photo.png";

const FloatingDots = () => {
  const dotCount = 100;
  const dotsRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (dotsRef.current) {
      for (let i = 0; i < dotCount; i++) {
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.01, 16, 16),
          new THREE.MeshBasicMaterial({ color: 'white' })
        );
        dot.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
        dot.userData = { initialY: dot.position.y };
        dotsRef.current.add(dot);
      }
    }
  }, [dotsRef]);

  useFrame(() => {
    if (dotsRef.current) {
      dotsRef.current.children.forEach(dot => {
        dot.position.y = dot.userData.initialY + Math.sin(Date.now() * 0.001 + dot.position.x) * 0.5;
      });
    }
  });

  return <group ref={dotsRef} />;
};

const Model = () => {
  const { scene } = useGLTF("/assets/leticia.glb");
  const ref = useRef<THREE.Object3D>();

  useEffect(() => {
    let frameId: number;
    const rotateModel = () => {
      if (ref.current) {
        ref.current.rotation.x += 0.005;
        ref.current.rotation.y += 0.01;
      }
      frameId = requestAnimationFrame(rotateModel);
    };
    rotateModel();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return <primitive ref={ref} object={scene} scale={1.2} />;
};

const Home = () => {
  return (
    <main className="relative flex flex-col items-center justify-center">
      {/* Full-page section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-secondary text-white text-center pb-32">
        {/* Canvas for 3D model */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model />
            <FloatingDots />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Title */}
        <Image src={title} alt="Bionics" width={600} height={600} className="z-30" />
      </section>

      {/* Current Events: variable section */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center">
        <p className="text-xs text-secondary tracking-widest">CURRENT EVENTS</p>
        <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">Cybathlon 2024</h2>

        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        We are currently all-hands-on-deck for CYBATHLON 2024! 
        </p>
        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        Our team is building GRASP, a trans-radial smart bionic arm designed to improve the daily life of amputees.

        In late October, we'll be submitting GRASP to the Arm Prosthesis Race, one of the eight different discipline categories in the competition. Bionics will be meeting locally for the CYBATHLON between the 24th and the 26th in the Osborne Center, where University of Alberta's team BLINC will be competing as well.
        </p>
        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        Click here for more info on GRASP!
        </p>
      </section>

      {/* Scroller of sponsors */}
      <section className="w-full flex items-center justify-center pt-10 pb-20">
        <Scroller />
      </section>

      {/* About Us: permanent section */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center bg-gray-200">
        <p className="text-xs text-secondary tracking-widest">ABOUT US</p>
        <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">Innovating Bionics</h2>

        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        We are currently all-hands-on-deck for CYBATHLON 2024! 
        </p>
        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        Our team is building GRASP, a trans-radial smart bionic arm designed to improve the daily life of amputees.

        In late October, we'll be submitting GRASP to the Arm Prosthesis Race, one of the eight different discipline categories in the competition. Bionics will be meeting locally for the CYBATHLON between the 24th and the 26th in the Osborne Center, where University of Alberta's team BLINC will be competing as well.
        </p>
        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        Click here for more info on GRASP!
        </p>
      </section>


      
    </main>
  );
};

export default Home;
