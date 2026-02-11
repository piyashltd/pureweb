import React, { useState, useEffect } from 'react';
import { ChevronRight, LayoutGrid } from 'lucide-react';
import EpisodeCard from './EpisodeCard';
import ShowCard from './ShowCard';
import { motion, AnimatePresence } from 'framer-motion';

const ContentSection = ({ title, data, type }) => {
  // ১. ইউনিক কি (Key) তৈরি করছি টাইটেল দিয়ে
  const storageKey = `section_view_${title.replace(/\s+/g, '_')}`;

  // ২. স্টেট ইনিশিয়ালাইজেশন: সেশন স্টোরেজ থেকে রিড করবে
  const [isGrid, setIsGrid] = useState(() => {
    const savedState = sessionStorage.getItem(storageKey);
    return savedState === 'true'; 
  });

  // ৩. মোড চেঞ্জ হলে সেশনে সেভ করবে
  useEffect(() => {
    sessionStorage.setItem(storageKey, isGrid.toString());
  }, [isGrid, storageKey]);

  if (!data || data.length === 0) return null;

  // ✅ ফিক্স ১: ১০টার লিমিট তুলে দেওয়া হয়েছে, এখন সব ডাটা দেখাবে
  const displayData = data; 

  // ✅ ফিক্স ২: কার্ডের সাইজ ঠিক করা (Episode এর জন্য চওড়া, Show এর জন্য চিকন)
  const cardWidthClass = type === 'episode' 
    ? "w-[240px] sm:w-[280px]"  // Episode (Landscape) এর জন্য বেশি জায়গা
    : "w-[140px] sm:w-[160px]"; // Show (Portrait) এর জন্য কম জায়গা

  return (
    <div className="px-4 mb-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
        <h2 className="text-lg font-bold text-white tracking-wide border-l-4 border-brand-primary pl-3">
          {title}
        </h2>

        {/* More / Less Button */}
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
          // --- GRID VIEW (More) ---
          <motion.div 
            key="grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-3 ${type === 'episode' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'}`}
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
          // --- HORIZONTAL SCROLL (Less) ---
          <motion.div 
            key="horizontal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex gap-3 overflow-x-auto no-scrollbar pb-2"
          >
            {/* ✅ ফিক্স ৩: 'View All' বাটন সরানো হয়েছে, এখন সব আইটেম এখানেই স্ক্রল হবে */}
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
