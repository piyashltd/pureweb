import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, Tv, Film, PlayCircle, LogIn, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          
          {/* Sidebar Menu */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-[280px] bg-[#0f0518] z-50 shadow-2xl flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-white/10">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              <Link to="/" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg bg-purple-900/30 text-purple-300">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <Link to="/shows" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-300">
                <Tv size={20} />
                <span>TV Shows</span>
              </Link>
              <Link to="/movies" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-300">
                <Film size={20} />
                <span>Movies</span>
              </Link>
              <Link to="/webseries" onClick={onClose} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 text-gray-300">
                <PlayCircle size={20} />
                <span>Web Series</span>
              </Link>
            </nav>

            <div className="p-4 border-t border-white/10 space-y-3">
              <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded bg-[#2a1b3d] text-sm font-semibold hover:bg-opacity-80 transition">
                      LOGIN
                  </button>
                  <button className="flex-1 py-2.5 rounded bg-brand-yellow text-black text-sm font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition">
                      <ShoppingCart size={16} />
                      BUY PLAN
                  </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
