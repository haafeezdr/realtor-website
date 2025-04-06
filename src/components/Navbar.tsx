import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full bg-white shadow fixed z-50 top-0'>
        <div className='flex items-center justify-evenly m-4'>
            <Link href={'/'} className='flex items-center gap-2'>
                <div className='w-12 h-12 bg-[#282623] rounded-full flex justify-center items-center text-white text-2xl font-bold'>
                    RB
                </div>
                <h1 className='md:text-2xl font-bold'>Realtor Bello</h1>
            </Link>
            <div className='flex items-center gap-4 md:text-2xl'>
                <Link href={'#about'} >About</Link>
                <Link href={'#properties'} >Properties</Link>
                <Link href={'#about'} >Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar