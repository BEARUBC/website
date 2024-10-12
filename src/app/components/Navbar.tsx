"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  }

  return (
    <header className="bg-primary text-background flex justify-between items-center p-2 px-8">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Image src={Logo} alt="Logo" className="w-16 h-16" />
        <Link href="/" className="text-2xl font-bold tracking-widest" onClick={closeMenu}>
          UBC BIONICS
        </Link>
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:flex space-x-4">
        <Link href="/">TEAMS</Link>
        <Link href="/about">PROJECTS</Link>
        <Link href="/contact">SPONSORS</Link>
        <Link href="/blog">CONTACT</Link>
      </nav>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {open ? <FiX /> : <FiMenu />} {/* menu icons from react-icons library */}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center space-y-4 p-8 md:hidden">
          <Link href="/" onClick={closeMenu}> TEAMS </Link>
          <Link href="/about" onClick={closeMenu}> PROJECTS </Link>
          <Link href="/contact" onClick={closeMenu}> SPONSORS </Link>
          <Link href="/blog" onClick={closeMenu}> CONTACT </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
