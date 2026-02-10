// File: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-400 border-t border-white/5 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* 1. Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Bengali<span className="text-brand-primary">Serial24</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6 text-gray-500">
              Watch your favorite Bengali TV serials, Natok, and movies anytime, anywhere. 
              The ultimate destination for entertainment.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" color="hover:bg-blue-600" />
              <SocialIcon icon={<Twitter size={18} />} href="#" color="hover:bg-sky-500" />
              <SocialIcon icon={<Instagram size={18} />} href="#" color="hover:bg-pink-600" />
              <SocialIcon icon={<Youtube size={18} />} href="#" color="hover:bg-red-600" />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-pink transition">Home</Link></li>
              <li><Link to="/movies" className="hover:text-brand-pink transition">Movies</Link></li>
              <li><Link to="/shows" className="hover:text-brand-pink transition">TV Shows</Link></li>
              <li><Link to="/webseries" className="hover:text-brand-pink transition">Web Series</Link></li>
            </ul>
          </div>

          {/* 3. Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-brand-pink transition">FAQ</Link></li>
              <li><Link to="#" className="hover:text-brand-pink transition">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-brand-pink transition">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-brand-pink transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-primary" />
                <span>support@bengaliserial24.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-primary" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-primary" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} BengaliTVSerial24. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="#" className="hover:text-white transition">Privacy</Link>
            <Link to="#" className="hover:text-white transition">Terms</Link>
            <Link to="#" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for Social Icons
const SocialIcon = ({ icon, href, color }) => {
  return (
    <a 
      href={href} 
      className={`w-9 h-9 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 transition-all duration-300 ${color} hover:text-white hover:-translate-y-1`}
    >
      {icon}
    </a>
  );
};

export default Footer;
