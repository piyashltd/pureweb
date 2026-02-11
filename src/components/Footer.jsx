// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#030303] mt-auto py-8 relative">
       {/* একটি খুব হালকা পার্পল আভা নিচের দিকে */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-purple-600/50 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* ব্র্যান্ড নাম ছোট করে */}
        <h3 className="text-purple-500 font-bold tracking-wider mb-4 uppercase text-sm opacity-80">
          BengaliTvSerial.Net
        </h3>

        {/* লিঙ্কগুলো মাঝখানে */}
        <div className="flex justify-center gap-8 mb-6 text-xs text-gray-400 font-medium tracking-wide uppercase">
          <Link to="#" className="hover:text-purple-400 transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all">Privacy</Link>
          <Link to="#" className="hover:text-purple-400 transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all">Terms</Link>
          <Link to="#" className="hover:text-purple-400 transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all">Cookies</Link>
        </div>

        {/* কপিরাইট লাইন */}
        <p className="text-[11px] text-gray-600 border-t border-white/5 pt-4 inline-block px-8">
          © {new Date().getFullYear()} All rights reserved. Made for entertainment.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
