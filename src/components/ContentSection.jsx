// File: src/components/ContentSection.jsx
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import ShowCard from './ShowCard';
import EpisodeCard from './EpisodeCard'; // We will create this below
import { motion } from 'framer-motion';

const ContentSection = ({ title, data, type = 'show' }) => {
  const [isGrid, setIsGrid] = useState(false);

  // Toggle function
  const toggleView = () => setIsGrid(!isGrid);

  return (
    <section className="mt-6 mb-4">
      {/* Section Header */}
      <div className="flex justify-between items-center px-4 mb-3">
        <h2 className="text-lg font-bold text-white uppercase border-l-4 border-brand-pink pl-2">
          {title}
        </h2>
        <button 
          onClick={toggleView}
          className="text-xs text-brand-primary font-semibold flex items-center gap-1 hover:text-white transition-colors"
        >
          {isGrid ? 'Show Less' : 'More'} 
          {isGrid ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>
      </div>

      {/* Content Container */}
      <motion.div 
        layout 
        className={`px-4 ${isGrid ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3' : 'flex gap-3 overflow-x-auto no-scrollbar pb-2'}`}
      >
        {data.map((item) => (
          <div key={item.id} className={isGrid ? 'w-full' : 'flex-shrink-0'}>
            {type === 'episode' ? (
              // For "Latest Free Episodes" (Landscape view)
              <EpisodeCard episode={item} isGrid={isGrid} />
            ) : (
              // For "TV Shows / Serials" (Portrait view)
              <ShowCard show={item} isLandscape={false} isGrid={isGrid} />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ContentSection;
