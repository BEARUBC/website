import React from "react";
import * as THREE from 'three';
//import { OrbitControls } from "react-three/drei/OrbitalControls";
//import { GLTFLoader } from "three/examples/jsm/Addons.js";
//import { NodeMaterial } from "three/examples/js/nodes/THREE.Nodes.js";
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import hand5 from './Hand5.js';
import { Canvas, useFrame } from '@react-three/fiber'
import "./App.css";
import { Layout } from "./components/Layout";
import hand from "./Photos/hand.png";
import mission from "./Photos/mission.png";
import vision from "./Photos/vision.png";
import research from "./Photos/research.png";
import announcement from "./Photos/announcement.png";
import { extend } from '@react-three/fiber'
extend(hand5);

//3D animations done with Blender and Three.js

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

function Box(props) {
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
  }

export const Home = () => {
  return (
    <Layout>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <hand5 position={[1.2, 0, 0]} />
      </Canvas>


     

      {/* <div class="row partTwo">
        <span className="headerWhite">OUR MISSION</span>
        <p className="infoBlock">
          Our team aims to foster an environment that is readily accessible to
          students and provide a space for them to apply, strengthen, and hone
          their technical skills. We take pride in providing a very hands-on
          learning experience for all of our members, with support and guidance
          from senior leads. It is our utmost priority to ensure that our team
          members are equipped with the necessary skills to succeed both within
          and outside of the team. As such, we integrate many research
          opportunities into the team that pertain to our main tasks, as well as
          projects that are conducted under our collaboration with the Bionics
          Network at UBC.
        </p>
        <span className="headerWhite">OUR VISION</span>
        <br />
        <p className="infoBlock">
          Our ultimate goal as a team is to create solutions that can replace
          human physiology. With so many resources available to us, and
          extensive knowledge at our fingertips, we strive to push the bounds of
          technology.
        </p>
        <span className="headerWhite">NEW RESEARCH TEAM</span> <br />
        <p className="infoBlock">
          We are delighted to announce the recent addition of a brand new
          research team to the UBC Bionics Team. This research team will
          collaborate on a collection of smaller group projects with UBC
          professors and graduate students, that will help members develop
          skills to aid to the advancement of our current project, GRASP. For
          more details, view our FAQ section under the Join Us page!
        </p>
      </div>
      <div class="py-4" /> */}
      {/* <div class="headerBlue text-center">PROJECT GOALS</div>
      <div class="py-2" />
      <p className="graspText">
        Currently, we have undertaken two main projects; our pilot project,
        GRASP, which is a smart bionic arm designed to enhance daily life for
        amputees. Recently, we have also initiated the design of a
        brain-computer interface, NERV. We hope to submit both of our projects
        to the leading global bionics competition, CYBATHLON 2024.{" "}
      </p> */}
    </Layout>
  );
};
