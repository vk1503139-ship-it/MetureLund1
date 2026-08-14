import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './assets/Logo.jpeg'; // Adjust the path according to your project structure

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 mt-16 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info with Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Maturelund Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-purple-500">MATURELUND</span>
            </Link>
            <p className="text-gray-300 text-sm text-center md:text-left leading-relaxed">
              Your premier destination for entertainment content and community engagement.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-blue-400">Navigation</h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <Link to="/" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Home</Link>
              <Link to="/mock-test" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Mock Test</Link>
              <Link to="/about" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">About</Link>
              <Link to="/contact" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Contact</Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-green-400">Support</h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <Link to="/help" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Help Center</Link>
              <Link to="/contact" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Contact Us</Link>
              <Link to="/faq" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">FAQ</Link>
              <Link to="/community" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Community</Link>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Legal</h3>
            <div className="flex flex-col space-y-3 text-center md:text-left">
              <Link to="/terms" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Terms of Service</Link>
              <Link to="/privacy" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link>
              <Link to="/content-policy" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Content Policy</Link>
              <Link to="/cookie-policy" onClick={scrollToTop} className="text-gray-300 hover:text-white transition duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 <span className="text-purple-400 font-semibold">Maturelund</span>. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
              <Link to="/privacy" onClick={scrollToTop} className="hover:text-white transition duration-300">Privacy</Link>
              <Link to="/terms" onClick={scrollToTop} className="hover:text-white transition duration-300">Terms</Link>
              <Link to="/safety" onClick={scrollToTop} className="hover:text-white transition duration-300">Safety</Link>
              <Link to="/contact" onClick={scrollToTop} className="hover:text-white transition duration-300">Support</Link>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition duration-300"
            >
              <FaArrowUp />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
