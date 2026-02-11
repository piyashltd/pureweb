// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // কোনো প্যাডিং নেই, একদম ফুল উইডথ
    <footer className="mt-auto w-full">
      
      {/* bg-[#030303]: ব্যাকগ্রাউন্ড কালার
         rounded-t-[50px]: শুধুমাত্র উপরের দুই কোণা গোল হবে
         overflow-hidden: যাতে গ্লো ইফেক্ট বাইরে না যায়
         pb-6 pt-8: ভেতরের কন্টেন্ট স্পেসিং
      */}
      <div className="bg-[#030303] rounded-t-[50px] relative overflow-hidden pb-6 pt-10">
        
        {/* === সেই লম্বা ঝলমলে লাইন (Top Glowing Line) === */}
        {/* এটি এখন একদম টপ বর্ডারের সাথে লেগে থাকবে */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-90 shadow-[0_0_20px_rgba(168,85,247,1)]"></div>
        
        {/* নিচের দিকে হালকা পার্পল আভা (Bottom Glow) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-purple-900/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          
          {/* ১. ব্র্যান্ড নাম: গ্রেডিয়েন্ট কালার */}
          <div className="mb-6">
            <h3 className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent font-extrabold text-2xl tracking-wide inline-block drop-shadow-lg">
              Binge
            </h3>
          </div>

          {/* ২. লিঙ্কগুলো */}
          <div className="flex justify-center gap-8 mb-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <Link 
                key={item}
                to="#" 
                className="text-[12px] text-gray-400 font-semibold tracking-widest uppercase hover:text-white transition relative group py-1"
              >
                {item}
                {/* লিঙ্কের নিচে ছোট এনিমেশন লাইন */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_purple]"></span>
              </Link>
            ))}
          </div>

          {/* ৩. কপিরাইট লাইন */}
          <div>
            <p className="text-[11px] text-gray-500 font-medium tracking-wide">
              © {new Date().getFullYear()} All rights reserved. Made for entertainment.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
