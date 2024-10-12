"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
import title from "./assets/bionics-outline.png";

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
    <main className="relative flex flex-col items-center justify-center gap-16">
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
        <Image src={title} alt="Bionics" width={600} height={600} className="z-50" />
      </section>

      {/* About Bionics: permanent section, centered */}
      <section className="w-full px-6 md:px-20 py-10 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4 text-secondary">About Bionics</h2>
        <p className="text-md md:text-lg text-foreground px-4 md:w-5/6">
          Bionics is a student-led organization at the University of California, San Diego. We are dedicated to providing students with opportunities to learn about the intersection of biology and technology.
        </p>
      </section>

      {/* Current Events: variable section, centered */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center bg-gray-200">
        <p className="text-xs text-ternary">CURRENT EVENTS</p>
        <h2 className="text-3xl font-semibold mb-4 text-secondary">CYBATHLON 2024</h2>
        <p className="text-md md:text-lg text-foreground px-4 md:w-5/6">
        We are currently all-hands-on-deck for CYBATHLON 2024! Our team is building GRASP, a trans-radial smart bionic arm designed to improve the daily life of amputees.

        In late October, we'll be submitting GRASP to the Arm Prosthesis Race, one of the eight different discipline categories in the competition. Bionics will be meeting locally for the CYBATHLON between the 24th and the 26th in the Osborne Center, where University of Alberta's team BLINC will be competing as well.

        Click here for more info on GRASP!
        </p>
      </section>

      {/* Our Mission: left text, right image */}
      <section className="w-full px-6 md:px-20 py-10 flex flex-col md:flex-row items-center px-4 md:w-5/6">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">Section 1</h2>
          <p className="text-md md:text-lg text-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nisi enim. Mauris auctor vehicula lorem, vitae fermentum sapien.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className="h-96 w-96 bg-gray-300 flex items-center justify-center">
            Image 1
          </div>
        </div>
      </section>

      {/* Our Vision: left image, right text */}
      <section className="w-full px-6 md:px-20 py-10 flex flex-col md:flex-row-reverse items-center px-4 md:w-5/6">
        <div className="w-full md:w-1/2 text-right">
          <h2 className="text-3xl font-semibold mb-4 text-secondary">Section 2</h2>
          <p className="text-md md:text-lg text-foreground">
            Nulla facilisi. Nam cursus, erat in auctor egestas, nulla massa consectetur felis, non sodales urna mi vel purus.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className="h-96 w-96 bg-gray-300 flex items-center justify-center">
            Image 2
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
