// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-[#050505] to-[#050505] pointer-events-none"></div>
      
      {/* উপরের উজ্জ্বল বর্ডার লাইন */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full absolute top-0 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* বাম পাশ: কপিরাইট */}
          <p className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()} <span className="text-purple-400">BengaliTvSerial.Net</span>. All rights reserved.
          </p>
          
          {/* ডান পাশ: লিঙ্কগুলো একটি ব্যাকগ্রাউন্ড কন্টেইনারে */}
          <div className="flex gap-1 bg-white/5 p-1 rounded-full backdrop-blur-sm border border-white/10">
            {['Privacy', 'Terms', 'Cookies'].map((item, index) => (
              <Link 
                key={index}
                to="#" 
                className="text-xs text-gray-400 hover:text-white px-4 py-1.5 rounded-full hover:bg-purple-600/20 transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
