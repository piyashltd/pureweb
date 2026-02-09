import React from 'react';
import { Menu, Search, Calendar, MoreVertical, Plus } from 'lucide-react';

const Header = ({ onMenuClick, onSearch }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#12081f] px-4 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        {/* Logo Text */}
        <h1 className="text-xl font-bold text-white tracking-tight">
          Bengalitvserial24
        </h1>
      </div>

      <div className="flex items-center gap-3">
         {/* Search Bar - Hidden on small mobile, visible on larger */}
        <div className="hidden sm:flex relative items-center bg-[#2a1b3d] rounded-full px-3 py-1.5">
          <Search size={16} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for Movies" 
            className="bg-transparent border-none outline-none text-sm text-white px-2 w-48"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        
        <button className="sm:hidden text-gray-300">
            <Search size={22} />
        </button>

        <button className="text-gray-300 border border-gray-600 rounded-md p-1">
            <span className="text-xs font-bold px-1">27</span>
        </button>

        <button 
            onClick={onMenuClick}
            className="text-white bg-[#2a1b3d] p-2 rounded-full hover:bg-white/10 transition"
        >
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
