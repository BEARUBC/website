import React, { useEffect, useRef } from "react";
import Image from "next/image";

// when adding new sponsors, make sure to import and also add to array

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

const sponsors = [
    asee,
    bionicsnetwork,
    digikey,
    ece,
    egbc,
    eus,
    ieee,
    mecheng,
    pololu,
    sbmeubc,
    starfish,
    ubcapplied,
    ubcmaterials,
];

const Scroller = () => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroll = () => {
            if (scrollerRef.current) {
                scrollerRef.current.scrollLeft += 1;

                if (scrollerRef.current.scrollLeft >= scrollerRef.current.scrollWidth / 2) {
                    scrollerRef.current.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(scroll, 15);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden whitespace-nowrap scrollbar-hidden pointer-events-none" ref={scrollerRef}>
            <div className="flex space-x-16">
                {sponsors.map((src, index) => (
                    <Image key={index} src={src} alt={`Sponsor ${index}`} height={60} />
                ))}
                {/* keep both of these, it's for the seamless scroll reset */}
                {sponsors.map((src, index) => (
                    <Image key={`dup-${index}`} src={src} alt={`Sponsor ${index}`} height={60} />
                ))}
            </div>
        </div>
    );
};

export default Scroller;