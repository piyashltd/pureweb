// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#030303] mt-auto py-8 relative overflow-hidden">
       {/* নিচের দিকে হালকা পার্পল আভা (Glow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-purple-600/40 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* আপডেট করা ব্র্যান্ড নাম: গ্রেডিয়েন্ট কালার */}
        <div className="mb-6">
          <h3 className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent font-extrabold text-xl tracking-wide inline-block">
            BingeError.Net
          </h3>
        </div>

        {/* লিঙ্কগুলো */}
        <div className="flex justify-center gap-8 mb-6 text-[11px] text-gray-400 font-semibold tracking-widest uppercase">
          {['Privacy', 'Terms', 'Cookies'].map((item) => (
            <Link 
              key={item}
              to="#" 
              className="hover:text-white transition relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* কপিরাইট লাইন */}
        <div className="relative inline-block px-8 pt-4">
            {/* উপরের ছোট বর্ডার লাইন */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-white/10"></div>
            <p className="text-[10px] text-gray-600 font-medium">
              © {new Date().getFullYear()} All rights reserved. Made for entertainment.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
