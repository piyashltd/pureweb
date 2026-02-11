// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto w-full px-4 pb-4">
      {/* bg-[#030303]: ব্যাকগ্রাউন্ড কালার
        rounded-t-[40px] rounded-b-[40px]: পুরো ফুটারটি ক্যাপসুলের মতো গোল হবে
        overflow-hidden: গ্লো ইফেক্ট যেন রাউন্ডের বাইরে না যায়
        relative: পজিশনিং এর জন্য
      */}
      <div className="bg-[#030303] rounded-[40px] py-8 relative overflow-hidden border border-white/5">
        
        {/* === এই সেই ঝলমলে লাইন (Top Glowing Line) === */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
        
        {/* নিচের দিকে হালকা পার্পল আভা (Bottom Glow) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-purple-600/40 blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          
          {/* ১. ব্র্যান্ড নাম: গ্রেডিয়েন্ট কালার */}
          <div className="mb-6">
            <h3 className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent font-extrabold text-xl tracking-wide inline-block">
              BengaliTvSerial.Net
            </h3>
          </div>

          {/* ২. লিঙ্কগুলো */}
          <div className="flex justify-center gap-8 mb-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <Link 
                key={item}
                to="#" 
                className="text-[11px] text-gray-400 font-semibold tracking-widest uppercase hover:text-white transition relative group py-1"
              >
                {item}
                {/* লিঙ্কের নিচে ছোট এনিমেশন লাইন */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* ৩. কপিরাইট লাইন */}
          <div>
            <p className="text-[10px] text-gray-600 font-medium">
              © {new Date().getFullYear()} All rights reserved. Made for entertainment.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
