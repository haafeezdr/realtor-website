"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false); // Close menu when link is clicked

  return (
    <div className="w-full bg-white shadow fixed z-50 top-0">
      <div className="flex items-center justify-between px-4 py-3 md:px-12">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <div className="w-12 h-12 bg-[#282623] rounded-full flex justify-center items-center text-white text-2xl font-bold">
            RB
          </div>
          <h1 className="text-xl md:text-2xl font-bold">Realtor Bello</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 md:text-xl">
          <Link href={"#about"}>About</Link>
          <Link href={"#properties"}>Properties</Link>
          <Link href={"#about"}>Contact</Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-inner text-lg">
          <Link href={"#about"} onClick={closeMenu}>About</Link>
          <Link href={"#properties"} onClick={closeMenu}>Properties</Link>
          <Link href={"#about"} onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
