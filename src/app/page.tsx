"use client";

// Modules
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";

// Assets
import title from "./assets/bionics-outline.png";
import teamphoto from "./assets/team-photo.png";
import holdmug from "./assets/hold-mug.png";
import bionicarm from "./assets/bionic-arm.png";

// Components
import Scroller from "./components/Scroller";
import Card from "./components/Card";
import Accordion from "./components/Accordion";

// FAQ stuff
const FAQ = [
  {
    question: "When can I apply?",
    answer: "The best time to apply is during our recruitment season, which occurs at the start of every winter session semester, between late August and early September! However, our email inbox remains open throughout the year.", 
  },
  {
    question: "Will I be considered if I do not have prior experience being on a design team?",
    answer: "Yes! We encourage all candidates interested in joining the team to send in an application, regardless of what your experience you may have. We are ultimately looking for those who are willing to dedicate the time and energy to learn and further the goals of our team.",
  },
  {
    question: "What sub-team should I apply for?",
    answer: "The final choice that you list on your application is up to you! All we ask is that you have an idea of which sub-team(s) aligns best with your own interests or studies, to better help us decide what the best fit is for you.",
  },
  {
    question: "How do I join the research team?",
    answer: "The research team is a new addition to our team as a whole, and requires membership on one of our sub-teams to be eligible for consideration. Recommendation from your sub-team lead is also required to apply for a position on the research team. All applications will be reviewed by the executive team and the professor/graduate student in charge.",
  },
];

// This is all for the render
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

import { useThree } from "@react-three/fiber";

const Model = () => {
  const { scene } = useGLTF("/assets/3d.glb");
  const ref = useRef<THREE.Object3D>();
  const { invalidate } = useThree();

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

  useEffect(() => {
    // Invalidate the canvas to force re-render when model is loaded
    if (scene) {
      invalidate();
    }
  }, [scene, invalidate]);

  return <primitive ref={ref} object={scene} scale={1.2} />;
};

const Home = () => {
  return (
    <main className="relative flex flex-col items-center justify-center">
      {/* Full-page section */}
      <section className="relative w-full h-screen flex items-center justify-center text-white text-center pb-32 bg-radial-gradient">
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
        <Image src={title} alt="Bionics" width={600} height={600} className="z-30 select-none" />
      </section>

      {/* Current Events */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center">
        <p className="text-xs text-secondary tracking-widest">CURRENT EVENTS</p>
        <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">Cybathlon 2024</h2>

        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        We are currently all-hands-on-deck for CYBATHLON 2024! 
        </p>
        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        Our team is building GRASP, a trans-radial smart bionic arm designed to improve the daily life of amputees.

        In late October, we&apos;ll be submitting GRASP to the Arm Prosthesis Race, one of the eight different discipline categories in the competition. Bionics will be meeting locally for the CYBATHLON between the 24th and the 26th in the Osborne Center, where University of Alberta&apos;s team BLINC will be competing as well.
        </p>
        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        Click here for more info on GRASP!
        </p>
        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
        We also recently announced the addition of a brand new research team to UBC Bionics. This research team will collaborate on a collection of smaller group projects with UBC professors and graduate students, that will help members develop skills to aid to the advancement of our current project, GRASP.
        </p>
      </section>

      {/* Scroller of sponsors */}
      <section className="w-full flex items-center justify-center pt-10 pb-20">
        <Scroller />
      </section>

      {/* About Us */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center bg-gray-200">
        <p className="text-xs text-secondary tracking-widest">ABOUT US</p>
        <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">Innovating Bionics</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Who are we?" description="We are a team of students from the University of British Columbia who are passionate about bionics and its applications." imagePath={teamphoto} />
          <Card title="Our Mission" description="Our mission is to develop bionic technologies that improve the quality of life for individuals with disabilities." imagePath={holdmug} />
          <Card title="Our Vision" description="Our ultimate goal is to build solutions that can replace human physiology. With the vast resources and knowledge at our fingertips, we strive to push the bounds of technology." imagePath={bionicarm} />
        </div>
      </section>

      {/* Join Us */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center">
        <p className="text-xs text-secondary tracking-widest">JOIN US</p>
        <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">Get Involved</h2>

        <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
          UBC Bionics is always looking for passionate and dedicated students to join our team. If you are interested in bionics, robotics, or engineering, we would love to have you on board! 
        </p>

        {/* FAQ */}
        <Accordion items={FAQ} />
      </section>

    </main>
  );
};

export default Home;