import React, { useState, useEffect } from 'react';
import { ChevronRight, LayoutGrid } from 'lucide-react';
import EpisodeCard from './EpisodeCard';
import ShowCard from './ShowCard';
import { motion, AnimatePresence } from 'framer-motion';

const ContentSection = ({ title, data, type }) => {
  const storageKey = `section_view_${title.replace(/\s+/g, '_')}`;

  const [isGrid, setIsGrid] = useState(() => {
    const savedState = sessionStorage.getItem(storageKey);
    return savedState === 'true'; 
  });

  useEffect(() => {
    sessionStorage.setItem(storageKey, isGrid.toString());
  }, [isGrid, storageKey]);

  if (!data || data.length === 0) return null;

  const displayData = data; 

  // ✅ ফিক্স ১: সাইজ একটু কমিয়ে আনা হয়েছে যাতে "দূরে দূরে" মনে না হয়
  const cardWidthClass = type === 'episode' 
    ? "w-[200px] sm:w-[240px]"  // Episode (Landscape): আগে ছিল 240px, এখন 200px
    : "w-[120px] sm:w-[140px]"; // Show (Portrait): আগে ছিল 140px, এখন 120px

  return (
    <div className="px-4 mb-6"> {/* margin-bottom একটু কমানো হয়েছে (mb-8 -> mb-6) */}
      
      {/* Header */}
      <div className="flex justify-between items-center mb-3 border-b border-white/5 pb-2">
        <h2 className="text-lg font-bold text-white tracking-wide border-l-4 border-brand-primary pl-3">
          {title}
        </h2>

        <button 
          onClick={() => setIsGrid(!isGrid)}
          className="flex items-center gap-1.5 text-xs font-medium text-brand-primary hover:text-white transition bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:bg-white/10"
        >
          {isGrid ? (
            <>
              <LayoutGrid size={14} />
              <span>Show Less</span>
            </>
          ) : (
            <>
              <span>More</span>
              <ChevronRight size={14} />
            </>
          )}
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {isGrid ? (
          // --- GRID VIEW ---
          // এখানেও গ্যাপ কমানো হয়েছে (gap-3 -> gap-2)
          <motion.div 
            key="grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-2 sm:gap-3 ${type === 'episode' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'}`}
          >
            {displayData.map((item) => (
              <div key={item.id}>
                {type === 'episode' ? (
                  <EpisodeCard episode={item} isGrid={true} />
                ) : (
                  <ShowCard show={item} isGrid={true} />
                )}
              </div>
            ))}
          </motion.div>
        ) : (
          // --- HORIZONTAL SCROLL ---
          // ✅ ফিক্স ২: gap-3 থেকে কমিয়ে gap-2.5 করা হয়েছে (কাছাকাছি দেখাবে)
          <motion.div 
            key="horizontal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2"
          >
            {displayData.map((item) => (
              <div key={item.id} className={`flex-shrink-0 ${cardWidthClass}`}>
                {type === 'episode' ? (
                  <EpisodeCard episode={item} />
                ) : (
                  <ShowCard show={item} />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentSection;
