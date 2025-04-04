import React from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

const About = () => {
  return (

    <div id='about' className=' flex flex-col md:flex-row w-full m-8 '>
      <div className=' flex md:w-1/2 w-full  items-center justify-center'>
        <div className=' flex flex-col gap-4 w-[500px] items-center text-center lg:items-start lg:text-start'>
          <h1 className=' text-4xl lg:text-6xl font-bold'>
            Realtor Bello Properties and Consult.
          </h1>
          <p className='font-normal text-[#667660]'>
          With over 10 years of experience in real estate, we have helped hundreds
         of families find their dream homes. Our commitment is to provide the best
         service and guidance to our clients.
          </p>
        <Dialog>
            <DialogTrigger className='flex justify-center items-center py-3 text-lg font-semibold  text-white cursor-pointer shadow-md  bg-[#282623] w-52'>Contact Us</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Send Us A Mail Or Contact Us On WhatsApp On 08102729491</DialogTitle>
                <DialogDescription className='p-4 w-full h-full text-center items-center justify-center mt-3'>
                    <form
                    target="_blank"
                    action="https://formsubmit.co/60e5dbb42f27d8a256702d40a220f009"
                    method="POST"
                    className="w-full h-full flex flex-col justify-center items-center"
                    >
                        <div className="w-full md:w-[70%] h-full flex flex-col gap-4 text-black">
                            <input
                            type="text"
                            name="name"
                            className="w-full h-full p-4 rounded-md border border-black"
                            placeholder="Your Name"
                            required
                            />
                            <input
                            type="email"
                            name="email"
                            className="w-full h-full p-4 rounded-md border border-black"
                            placeholder="Your Email"
                            required
                            />
                            <textarea
                            placeholder="What Spark Your Interest To Contact Us?"
                            className="w-full h-full p-4 rounded-md border border-black"
                            name="message"
                            required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="gradient2 p-2 rounded-md bg-[#282623] hover:bg-[#3a3734] mt-4 text-white"
                        >
                            Submit Form
                        </button>
                    </form>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
`       </Dialog>
        </div>
      </div>
      <div className='flex md:w-1/2 w-full justify-center items-center h-[500px] lg:h-[700px]'>
        <div className='flex relative w-[450px] h-[400px] lg:w-[450px] lg:h-[500px] p-6'>
          <Image src={'/bello.jpg'} alt='image' fill  className='rounded' />
        </div>
      </div>
    </div>
  )
}

export default About
