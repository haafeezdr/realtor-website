import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import icons

const Footer = () => {
  return (
    // <footer className="bg-[#282623] w-full h-[80vh] text-white py-6 mt-10">
    //   <div className="flex flex-col justify-center items-center mx-auto px-4">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {/* Company Info */}
    //       <div>
    //         <h4 className="text-xl font-semibold mb-3">Dream Homes</h4>
    //         <p className="text-sm">
    //           Find your dream property with expert advice and a wide range of listings across various locations.
    //         </p>
    //       </div>

    //       {/* Quick Links */}
    //       <div>
    //         <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
    //         <ul className="text-sm">
    //           <li><Link href="/properties" className="hover:text-blue-400">Properties</Link></li>
    //           <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
    //           <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
    //         </ul>
    //       </div>

    //       {/* Social Media */}
    //       <div>
    //         <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
    //         <div className="flex space-x-4">
    //           <Link href="https://facebook.com" target="_blank">
    //             <Facebook className="w-6 h-6 hover:text-blue-600" />
    //           </Link>
    //           <Link href="https://twitter.com" target="_blank">
    //             <Twitter className="w-6 h-6 hover:text-blue-400" />
    //           </Link>
    //           <Link href="https://instagram.com" target="_blank">
    //             <Instagram className="w-6 h-6 hover:text-pink-400" />
    //           </Link>
    //           <Link href="https://linkedin.com" target="_blank">
    //             <Linkedin className="w-6 h-6 hover:text-blue-700" />
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Contact Info */}
    //       <div>
    //         <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
    //         <ul className="text-sm">
    //           <li>Phone: (123) 456-7890</li>
    //           <li>Email: info@dreamhomes.com</li>
    //           <li>Address: 123 Dream St, Dream City</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="mt-10 border-t border-gray-700 pt-6 text-center">
    //       <p className="text-sm">&copy; {new Date().getFullYear()} Dream Homes. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>


    <>
      <div className=' bg-[#282623] w-full flex flex-col justify-around items-start'>
        <div className='flex flex-col lg:flex-row flex-1 container justify-between py-10'>
          <div className='p-5'>
            <ul className='flex flex-col gap-6'>
              <Link href={'/'}>
                <div className='flex gap-4 items-center  text-2xl font-bold text-white '>
                  Realtor Bello
                </div>
              </Link>
              <div className='flex gap-6 pb-5 text-white'>
                <Link href="https://facebook.com" target="_blank">
                  <Facebook className="w-6 h-6 hover:text-blue-600" />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Twitter className="w-6 h-6 hover:text-blue-400" />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="w-6 h-6 hover:text-pink-400" />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="w-6 h-6 hover:text-blue-700" />
                </Link>
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
          <div className='p-5'>
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
          </div>
        </div>

        <div className='w-full flex flex-col  border-t-2 border-[#464037]  py-6 '>
          <h1 className='text-white opacity-70 font-semibold text-center '>
            Copyright Mymakaranta 2023 All right Reserved{' '}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
