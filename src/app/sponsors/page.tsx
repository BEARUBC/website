"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';

import asee from "../assets/sponsors/asee.png";
import bionicsnetwork from "../assets/sponsors/bionicsnetwork.png";
import digikey from "../assets/sponsors/digikey.png";
import ece from "../assets/sponsors/ece.png";
import egbc from "../assets/sponsors/egbc.jpg";
import eus from "../assets/sponsors/eus.jpeg";
import ieee from "../assets/sponsors/ieee.png";
import mecheng from "../assets/sponsors/mecheng.jpeg";
import pololu from "../assets/sponsors/pololu.png";
import sbmeubc from "../assets/sponsors/sbmeubc.jpeg";
import starfish from "../assets/sponsors/starfish.png";
import ubcapplied from "../assets/sponsors/ubcapplied.png";
import ubcmaterials from "../assets/sponsors/ubcmaterials.jpg";

import fraservalley from '../assets/thankyou/fraservalley.png';
import victoria from '../assets/thankyou/vhp1.png';
import pentland from '../assets/thankyou/pentland.png';

const Slideshow: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
    const slides = [
      { src: fraservalley, alt: 'Fraser Valley Prosthetics' },
      { src: victoria, alt: 'Victoria Hand Project' },
      { src: pentland, alt: 'Pentland Prosthetics & Orthotics' },
    ];
  
    const delay = 4000;
  
    const numberSlides = slides.length;
  
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % numberSlides);
      }, delay);
  
      return () => {
        resetTimeout();
      };
    }, [numberSlides]);
  
    return (
        <div className="relative">
            <div className="slideshow-container relative w-full h-auto">
            {slides.map((slide, index) => (
                <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === slideIndex ? 'opacity-100' : 'opacity-0'
                }`}
                >
                <Image
                    src={slide.src}
                    alt={slide.alt}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                />
                </div>
            ))}
            </div>
            <div className="dot-container flex justify-center mt-4">
            {slides.map((_, index) => (
                <span
                key={index}
                className={`dot w-3 h-3 rounded-full mx-1 cursor-pointer ${
                    index === slideIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setSlideIndex(index)}
                ></span>
            ))}
            </div>
        </div>
    );
};  

const Sponsors = () => {
    return (
        <main className="relative flex flex-col items-center justify-center">
            <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center">
                <p className="text-xs text-secondary tracking-widest">♡ THANK YOU ♡</p>
                <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">OUR SPONSORS</h2>
            </section>

            {/* Gold tier */}
            <h2 className="text-xl md:text-2xl tracking-tight pt-16">GOLD TIER</h2>
            <hr className="w-5/6 border-1 pb-4" />

            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-24 mb-4 space-y-4 md:space-y-0">
                <Image src={bionicsnetwork} alt="Bionics Network" height={100} />
                <Image src={sbmeubc} alt="SBME UBC" height={100} />
                <Image src={ece} alt="ECE" height={100} />
                <Image src={ubcapplied} alt="Applied Science" height={100} />
            </div>

            {/* Silver tier */}
            <h2 className="text-xl md:text-2xl tracking-tight pt-16">SILVER TIER</h2>
            <hr className="w-5/6 border-1 pb-4" />

            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-24 mb-4 space-y-4 md:space-y-0">
                <Image src={starfish} alt="Starfish Medical" height={100} />
                <Image src={egbc} alt="EGBC" height={100} />
            </div>

            {/* Bronze tier */}
            <h2 className="text-xl md:text-2xl tracking-tight pt-16">BRONZE TIER</h2>
            <hr className="w-5/6 border-1 pb-4" />

            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-24 mb-4 space-y-4 md:space-y-0">
                <Image src={mecheng} alt="Mechanical Engineering" height={100} />
                <Image src={ubcmaterials} alt="Materials Engineering" height={100} />
                <Image src={ieee} alt="IEEE" height={100} />
            </div>

            {/* Supporters */}
            <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center pt-32">
                <p className="text-xs text-secondary tracking-widest">♡ THANK YOU ♡</p>
                <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">SUPPORTING ORGANIZATIONS</h2>
            </section>

            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-24 mb-4 space-y-4 md:space-y-0">
                <Image src={asee} alt="ASEE" height={100} />
                <Image src={digikey} alt="Digikey" height={100} />
                <Image src={pololu} alt="Pololu" height={100} />
                <Image src={eus} alt="EUS" height={100} />
            </div>

            <Slideshow />
        </main>
    );
};

export default Sponsors;