// File: src/components/ContentSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LayoutGrid, ArrowRightCircle } from 'lucide-react';
import EpisodeCard from './EpisodeCard';
import ShowCard from './ShowCard';
import { motion, AnimatePresence } from 'framer-motion';

const ContentSection = ({ title, data, type }) => {
  // ১. ইউনিক কি (Key) তৈরি করছি টাইটেল দিয়ে (যেমন: section_Zee_Bangla)
  const storageKey = `section_view_${title.replace(/\s+/g, '_')}`;

  // ২. স্টেট ইনিশিয়ালাইজেশন: সেশন স্টোরেজ থেকে রিড করবে
  const [isGrid, setIsGrid] = useState(() => {
    const savedState = sessionStorage.getItem(storageKey);
    return savedState === 'true'; // যদি 'true' স্ট্রিং পায় তবে গ্রিড মোড অন হবে
  });

  // ৩. মোড চেঞ্জ হলে সেশনে সেভ করবে
  useEffect(() => {
    sessionStorage.setItem(storageKey, isGrid.toString());
  }, [isGrid, storageKey]);

  if (!data || data.length === 0) return null;

  // গ্রিড মোডে সব ডাটা দেখাবে, হরাইজন্টাল মোডে সর্বোচ্চ ১০টা
  const displayData = isGrid ? data : data.slice(0, 10);

  return (
    <div className="px-4 mb-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
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
          // --- GRID VIEW (More) ---
          <motion.div 
            key="grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
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
            {displayData.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[160px] md:w-[200px]">
                {type === 'episode' ? (
                  <EpisodeCard episode={item} />
                ) : (
                  <ShowCard show={item} />
                )}
              </div>
            ))}
            
            {/* View All Card at the end of scroll */}
            {data.length > 10 && (
               <button 
                 onClick={() => setIsGrid(true)}
                 className="flex-shrink-0 w-[100px] flex flex-col items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition group"
               >
                  <ArrowRightCircle size={32} className="text-gray-400 group-hover:text-brand-primary mb-2 transition" />
                  <span className="text-xs text-gray-400 font-medium">View All</span>
               </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentSection;
