import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import icons

const Footer = () => {
  return (
    <>
      <div className=' bg-[#282623] w-full flex flex-col justify-around items-start'>
        <div className='flex flex-col md:flex-row flex-1 container justify-around py-10'>
          <div className='p-5'>
            <ul className='flex flex-col gap-10'>
              <Link href={'/'}>
                <div className='flex gap-4 items-center  text-2xl font-bold text-white '>
                  Realtor Bello
                </div>
              </Link>
              <div className='flex  gap-6 pb-5 text-white'>
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="w-6 h-6 hover:text-blue-600" />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="w-6 h-6 hover:text-blue-400" />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="w-6 h-6 hover:text-pink-400" />
                </Link>
                {/* <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="w-6 h-6 hover:text-blue-700" />
                </Link> */}
              </div>
            </ul>
          </div>
          <div className='p-5'>
            <ul>
              <p className='text-white font-bold text-2xl pb-4'>Links</p>
              <li className=' text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Home
              </li>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                About Us
              </li>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Our Process
              </li>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Services
              </li>
            </ul>
          </div>
          {/* <div className='p-5'>
            <ul>
              <p className='text-white font-bold text-2xl pb-4'>Community</p>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Go Premium
              </li>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                team Plans
              </li>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Refer a Friend
              </li>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Gift Cards
              </li>
            </ul>
          </div>
          <div className='p-5'>
            <ul>
              <p className='text-white font-bold text-2xl pb-4'>Resources</p>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Support
              </li>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Latest Updates
              </li>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Updates Newsletter
              </li>
              <li className='text-white opacity-70 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>
                Flow Management
              </li>
            </ul>
          </div> */}
        </div>

        <div className='w-full flex flex-col  border-t-2 border-[#464037]  py-6 '>
          <h1 className='text-white opacity-70 font-semibold text-center '>
            Copyright Realtor Bello 2025 All right Reserved{' '}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
