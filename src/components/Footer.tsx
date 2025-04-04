import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#282623] w-full text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Dream Homes</h4>
            <p className="text-sm">
              Find your dream property with expert advice and a wide range of listings across various locations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/properties" className="hover:text-blue-400">Properties</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-blue-600" target="_blank">
                <i className="fab fa-facebook fa-lg"></i>
              </Link>
              <Link href="https://twitter.com" className="hover:text-blue-400" target="_blank">
                <i className="fab fa-twitter fa-lg"></i>
              </Link>
              <Link href="https://instagram.com" className="hover:text-pink-400" target="_blank">
                <i className="fab fa-instagram fa-lg"></i>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-700" target="_blank">
                <i className="fab fa-linkedin fa-lg"></i>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
            <ul className="text-sm">
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@dreamhomes.com</li>
              <li>Address: 123 Dream St, Dream City</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Dream Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
