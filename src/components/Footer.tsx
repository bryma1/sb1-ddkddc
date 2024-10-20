import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">FarmFresh</h3>
            <p>Connecting farmers and consumers for a sustainable future.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="/about" className="hover:text-green-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-green-300">Contact</a></li>
              <li><a href="/faq" className="hover:text-green-300">FAQ</a></li>
              <li><a href="/terms" className="hover:text-green-300">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-green-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300"><Facebook /></a>
              <a href="#" className="hover:text-green-300"><Twitter /></a>
              <a href="#" className="hover:text-green-300"><Instagram /></a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 FarmFresh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;