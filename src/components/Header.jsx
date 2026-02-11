// File: src/components/Header.jsx
import React, { useState } from 'react';
import { Menu, Search, Bell, PlayCircle } from 'lucide-react';

const Header = ({ onMenuClick, onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* === ১. লোগো সেকশন (Text + Icon) === */}
        <div className="flex items-center gap-2 cursor-pointer group">
          {/* লোগো আইকন */}
          <PlayCircle className="text-purple-500 fill-purple-500/20 group-hover:scale-110 transition-transform duration-300" size={28} />
          
          {/* লোগো টেক্সট (Gradient) */}
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-gray-400 bg-clip-text text-transparent">
              Bengali
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ml-1">
              TvSerial
            </span>
          </h1>
        </div>

        {/* === ২. সার্চ বার এবং অ্যাকশন বাটন === */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Desktop Search Bar */}
          <div className="hidden md:flex relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-500 group-focus-within:text-purple-500 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search movies, serials..." 
              className="bg-[#1a1a1a] text-sm text-white border border-white/10 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          {/* Mobile Search Icon */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white bg-white/5 rounded-full"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search size={20} />
          </button>

          {/* Notification / Count Badge */}
          <button className="relative p-2 text-gray-300 hover:text-white transition group">
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-600 text-[10px] font-bold text-white h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#050505]">
              27
            </div>
            <Bell size={22} className="group-hover:rotate-12 transition-transform" />
          </button>

          {/* Menu Button */}
          <button 
            onClick={onMenuClick}
            className="p-2 text-white bg-gradient-to-br from-purple-600/80 to-purple-800/80 rounded-lg hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 active:scale-95 border border-white/10"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* === Mobile Search Field (Expandable) === */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 animate-in slide-in-from-top-2 fade-in duration-200">
          <input 
            type="text" 
            autoFocus
            placeholder="Search here..." 
            className="w-full bg-[#1a1a1a] text-white border border-white/10 rounded-lg py-2.5 px-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
