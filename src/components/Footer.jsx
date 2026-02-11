// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // mt-auto keeps it at bottom. px-3 adds outer spacing if needed
    <div className="mt-auto px-3 pb-3">
      <footer className="bg-[#050505] rounded-t-[35px] rounded-b-[35px] relative overflow-hidden border border-white/5 shadow-2xl">
        
        {/* উপরের গ্লো ইফেক্ট - এখন বর্ডারের ভেতরে থাকবে */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-purple-500 blur-md"></div>

        <div className="max-w-7xl mx-auto px-4 py-8 text-center relative z-10">
          
          {/* ১. ব্র্যান্ড নেম (Gradient) */}
          <div className="mb-5">
            <h3 className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-bold text-lg tracking-wide inline-block">
              BengaliTvSerial.Net
            </h3>
          </div>

          {/* ২. লিঙ্কস */}
          <div className="flex justify-center gap-6 mb-5 text-[11px] text-gray-400 font-medium tracking-wider uppercase">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <Link 
                key={item}
                to="#" 
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* ৩. কপিরাইট - খুবই হালকা কালার */}
          <p className="text-[10px] text-gray-600 font-medium border-t border-white/5 pt-4 inline-block px-6">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
