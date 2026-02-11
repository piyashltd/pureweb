// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-400 mt-auto relative">
      {/* উপরের সরু বর্ডার */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute top-0"></div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Only Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} BengaliTvSerial.Net. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="#" className="hover:text-white transition">Privacy</Link>
            <Link to="#" className="hover:text-white transition">Terms</Link>
            <Link to="#" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>

      {/* নিচের সরু বর্ডার */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent w-full absolute bottom-0"></div>
    </footer>
  );
};

export default Footer;
