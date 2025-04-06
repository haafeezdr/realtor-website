import React from "react";
import { Home, Briefcase, Smile } from "lucide-react"; // Importing icons

const Achievements = () => {
  return (
    <section className="w-full h-[70vh] mx-auto px-4 py-16 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Property Sold */}
        <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <Home className="w-12 h-12 text-[#282623] mb-4" />
          <h3 className="text-3xl font-bold text-[#282623]">100+</h3>
          <p className="text-gray-600 mt-2">Properties Sold</p>
        </div>

        {/* Experience */}
        <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <Briefcase className="w-12 h-12 text-[#282623] mb-4" />
          <h3 className="text-3xl font-bold text-[#282623]">10+ Years</h3>
          <p className="text-gray-600 mt-2">Experience in Real Estate</p>
        </div>

        {/* Happy Clients */}
        <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <Smile className="w-12 h-12 text-[#282623] mb-4" />
          <h3 className="text-3xl font-bold text-[#282623]">95% Satisfaction</h3>
          <p className="text-gray-600 mt-2">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
