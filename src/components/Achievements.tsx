import React from 'react'

const Achievements = () => {
  return (
    <section className="w-full mx-auto px-4 py-16 text-center bg-gray-100">
    <h2 className="text-4xl font-bold mb-6 text-[#282623]">Our Achievements</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-bold text-blue-600">100+</h3>
        <p className="text-[#282623]">Properties Sold</p>
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-bold text-blue-600">10+ Years</h3>
        <p className="text-[#282623]">Experience in Real Estate</p>
      </div>
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-bold text-blue-600">95% Satisfaction</h3>
        <p className="text-[#282623]">Happy Clients</p>
      </div>
    </div>
  </section>
  )
}

export default Achievements