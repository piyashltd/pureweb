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

  // ✅ ফিক্স: 'w-' এর বদলে 'min-w-' ব্যবহার করা হয়েছে।
  // এতে কার্ডগুলো আর চ্যাপ্টা হবে না, সম্পূর্ণ সাইজেই থাকবে।
  const horizontalCardWidth = type === 'episode' 
    ? "min-w-[220px] sm:min-w-[260px]"  // Episode Card: ফিক্সড বড় সাইজ
    : "min-w-[110px] sm:min-w-[140px]"; // Show Card: ফিক্সড ছোট সাইজ

  return (
    <div className="px-4 mb-6">
      
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
          // ==========================
          // 🔴 GRID VIEW (MORE)
          // ==========================
          <motion.div 
            key="grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-3 ${
                type === 'episode' 
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5' 
                : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6' 
            }`}
          >
            {data.map((item) => (
              <div key={item.id} className="w-full">
                {type === 'episode' ? (
                  <EpisodeCard episode={item} isGrid={true} />
                ) : (
                  <ShowCard show={item} isGrid={true} />
                )}
              </div>
            ))}
          </motion.div>
        ) : (
          // ==========================
          // 🔵 HORIZONTAL VIEW (LESS)
          // ==========================
          <motion.div 
            key="horizontal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-3 overflow-x-auto no-scrollbar pb-2"
          >
            {data.map((item) => (
              // ✅ min-w থাকার কারণে ব্রাউজার আর এটাকে চেপে ছোট করবে না
              <div key={item.id} className={`flex-shrink-0 ${horizontalCardWidth}`}>
                {type === 'episode' ? (
                  <EpisodeCard episode={item} isGrid={false} />
                ) : (
                  <ShowCard show={item} isGrid={false} />
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
