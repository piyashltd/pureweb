import React, { useState, useEffect } from 'react';
import { ChevronRight, LayoutGrid, LayoutList } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EpisodeCard from './EpisodeCard';
import ShowCard from './ShowCard';

const ContentSection = ({ title, data, type }) => {
  // ডাটা না থাকলে কিছুই দেখাবে না
  if (!data || data.length === 0) return null;

  // সেশন স্টোরেজ কি তৈরি করার জন্য টাইটেল ব্যবহার করা
  const storageKey = `section_view_${title.replace(/\s+/g, '_')}`;

  // সেশন স্টোরেজ থেকে স্টেট রিড করা (ডিফল্ট false)
  const [isGrid, setIsGrid] = useState(() => {
    try {
      const savedState = sessionStorage.getItem(storageKey);
      return savedState === 'true';
    } catch (e) {
      return false;
    }
  });

  // স্টেট পরিবর্তন হলে সেশন স্টোরেজে সেভ করা
  useEffect(() => {
    sessionStorage.setItem(storageKey, isGrid.toString());
  }, [isGrid, storageKey]);

  // ✅ ফিক্স: কার্ডের সাইজ এবং রেসপন্সিভ উইথ (Width)
  // Episode হলে একটু চওড়া, Show (Poster) হলে সরু
  const horizontalCardWidth = type === 'episode' 
    ? "w-[200px] sm:w-[260px]"  // Episode: মোবাইলে ২০০px, পিসিতে ২৬০px
    : "w-[120px] sm:w-[160px]"; // Show: মোবাইলে ১২০px, পিসিতে ১৬০px

  return (
    <div className="mb-8">
      
      {/* ---------- HEADER SECTION ---------- */}
      <div className="flex justify-between items-end px-4 mb-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide border-l-4 border-red-600 pl-3 leading-none">
            {title}
          </h2>
        </div>

        <button 
          onClick={() => setIsGrid(!isGrid)}
          className="group flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10"
        >
          {isGrid ? (
            <>
              <LayoutList size={14} />
              <span>Scroll View</span>
            </>
          ) : (
            <>
              <span>View All</span>
              <LayoutGrid size={14} className="group-hover:text-red-500 transition-colors"/>
            </>
          )}
        </button>
      </div>

      {/* ---------- CONTENT SECTION ---------- */}
      <AnimatePresence mode="wait">
        
        {isGrid ? (
          // ==========================
          // 🔴 GRID VIEW (VIEW ALL)
          // ==========================
          <motion.div 
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="px-4"
          >
            <div className={`grid gap-3 sm:gap-4 ${
                type === 'episode' 
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5' // Episode Grid
                : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7' // Poster Grid
            }`}>
              {data.map((item, index) => (
                <div key={item.id || index} className="w-full">
                  {type === 'episode' ? (
                    <EpisodeCard episode={item} />
                  ) : (
                    <ShowCard show={item} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        ) : (
          // ==========================
          // 🔵 HORIZONTAL SCROLL VIEW
          // ==========================
          <motion.div 
            key="horizontal"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            
            // ✅ gap-3 এবং padding ফিক্স
            className="flex gap-3 overflow-x-auto pb-4 px-4 scrollbar-hide snap-x snap-mandatory"
          >
            {data.map((item, index) => (
              // ✅ flex-shrink-0: যাতে কার্ডগুলো চেপে না যায়
              <div 
                key={item.id || index} 
                className={`flex-shrink-0 snap-start ${horizontalCardWidth}`}
              >
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
