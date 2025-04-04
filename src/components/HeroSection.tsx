import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find Your Dream Home
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Discover the best properties for sale and rent with expert guidance.
        </p>

        <div className="mt-6">
          <Button className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 transition-all shadow-lg">
            <Link href="/properties">Browse Listings</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
