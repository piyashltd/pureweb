// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // mt-auto: ফুটারকে নিচে ঠেলে দেয়
    <footer className="mt-auto w-full">
      {/* bg-[#050505]: ব্যাকগ্রাউন্ড কালার
         rounded-t-[40px]: শুধুমাত্র উপরের দুই কোণা গোল হবে
         border-t border-white/5: উপরে হালকা বর্ডার
         pb-6 pt-8: ভেতরের স্পেসিং
      */}
      <div className="bg-[#050505] rounded-t-[40px] border-t border-white/10 relative overflow-hidden pb-6 pt-8">
        
        {/* টপ গ্লো ইফেক্ট (ঐচ্ছিক - সৌন্দর্যের জন্য) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          
          {/* ব্র্যান্ড নেম */}
          <h3 className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent font-bold text-lg tracking-wide inline-block mb-4">
            BengaliTvSerial.Net
          </h3>

          {/* লিঙ্ক সমূহ */}
          <div className="flex justify-center gap-6 mb-4 text-[11px] text-gray-400 font-medium tracking-wider uppercase">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <Link 
                key={item}
                to="#" 
                className="hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* কপিরাইট */}
          <p className="text-[10px] text-gray-600 font-medium">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
