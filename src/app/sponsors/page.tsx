"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

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

const Sponsors = () => {
  const images = [fraservalley, victoria, pentland];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // interval for slideshow

    return () => clearInterval(interval);
  }, [images.length]);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="relative flex flex-col items-center justify-center">
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center">
        <p className="text-xs text-secondary tracking-widest">♡ THANK YOU ♡</p>
        <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">Our Sponsors</h2>
      </section>

      {/* Gold tier */}
      <h2 className="text-xl md:text-2xl tracking-tight pt-16">GOLD TIER</h2>
      <hr className="w-5/6 border-1 pb-4" />

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-24 mb-4">
        <Image src={bionicsnetwork} alt="Bionics Network" height={100} />
        <Image src={sbmeubc} alt="SBME UBC" height={100} />
        <Image src={ece} alt="ECE" height={100} />
        <Image src={ubcapplied} alt="Applied Science" height={100} />
      </div>

      {/* Silver tier */}
      <h2 className="text-xl md:text-2xl tracking-tight pt-16">SILVER TIER</h2>
      <hr className="w-5/6 border-1 pb-4" />

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-24 mb-4">
        <Image src={starfish} alt="Starfish Medical" height={100} />
        <Image src={egbc} alt="EGBC" height={100} />
      </div>

      {/* Bronze tier */}
      <h2 className="text-xl md:text-2xl tracking-tight pt-16">BRONZE TIER</h2>
      <hr className="w-5/6 border-1 pb-4" />

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-24 mb-4">
        <Image src={mecheng} alt="Mechanical Engineering" height={100} />
        <Image src={ubcmaterials} alt="Materials Engineering" height={100} />
        <Image src={ieee} alt="IEEE" height={100} />
      </div>

      {/* Supporters */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center pt-32">
        <p className="text-xs text-secondary tracking-widest">♡ THANK YOU ♡</p>
        <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">Supporting Organizations</h2>
      </section>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-24 mb-4">
        <Image src={asee} alt="ASEE" height={100} />
        <Image src={digikey} alt="Digikey" height={100} />
        <Image src={pololu} alt="Pololu" height={100} />
        <Image src={eus} alt="EUS" height={100} />
      </div>

      {/* Image carousel */}
      <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center">
        <div className="relative w-full max-w-2xl flex items-center justify-center">
          {/* Image display */}
          <Image
            src={images[currentIndex]}
            alt={`Thank You ${currentIndex}`}
            height={500}
            width={800}
            className="transition-opacity duration-1000"
          />

            {/* Previous button */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-secondary rounded-full p-2"
            >
                <FaAngleLeft />
            </button>

            {/* Next button */}
            <button
                onClick={next}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-secondary rounded-full p-2"
            >
                <FaAngleRight />
            </button>
        </div>
      </section>
    </main>
  );
};

export default Sponsors;