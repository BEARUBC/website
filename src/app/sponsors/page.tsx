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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Gold Tier */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">GOLD TIER</h2>
            <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-yellow-500 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center justify-items-center">
            <Image src={bionicsnetwork} alt="Bionics Network" height={100} className="hover:scale-105 transition-transform duration-300" />
            <Image src={sbmeubc} alt="SBME UBC" height={100} className="hover:scale-105 transition-transform duration-300" />
            <Image src={ece} alt="ECE" height={100} className="hover:scale-105 transition-transform duration-300" />
            <Image src={ubcapplied} alt="Applied Science" height={100} className="hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Silver Tier */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700">SILVER TIER</h2>
            <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-gray-700 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
            <Image src={starfish} alt="Starfish Medical" height={100} className="hover:scale-105 transition-transform duration-300" />
            <Image src={egbc} alt="EGBC" height={100} className="hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Bronze Tier */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#CD7F32]">BRONZE TIER</h2>
            <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#CD7F32] to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
            <Image src={mecheng} alt="Mechanical Engineering" height={100} className="hover:scale-105 transition-transform duration-300" />
            <Image src={ubcmaterials} alt="Materials Engineering" height={100} className="hover:scale-105 transition-transform duration-300" />
            <Image src={ieee} alt="IEEE" height={100} className="hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Supporting Organizations */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">SUPPORTING ORGANIZATIONS</h2>
            <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-secondary to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center justify-items-center">
            <Image src={asee} alt="ASEE" height={100} className="hover:scale-105 transition-transform duration-300" />
            <Image src={digikey} alt="Digikey" height={100} className="hover:scale-105 transition-transform duration-300" />
            <Image src={pololu} alt="Pololu" height={100} className="hover:scale-105 transition-transform duration-300" />
            <Image src={eus} alt="EUS" height={100} className="hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

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