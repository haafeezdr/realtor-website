import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-white'>
        <div className='flex items-center justify-evenly m-4'>
            <div className='flex items-center gap-2'>
                <div className='w-12 h-12 bg-[#464403] rounded-full flex justify-center items-center text-white text-2xl font-bold'>
                    RM
                </div>
                <h1 className='text-2xl font-bold'>Realtor Bello</h1>
            </div>
            <div className='flex items-center gap-4 text-2xl'>
                <p>About</p>
                <p>Services</p>
                <p>Contact</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar