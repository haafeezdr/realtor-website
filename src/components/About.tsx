import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const About = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-6 text-[#282623]">Realtor Bello</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/bello.jpg"
            alt="Realtor Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-left">
          <p className="text-lg text-[#282623] mb-4">
            With over 10 years of experience in real estate, we have helped hundreds
            of families find their dream homes. Our commitment is to provide the best
            service and guidance to our clients.
          </p>
          <Button className="bg-[#282623] text-white px-6 py-3">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}

export default About