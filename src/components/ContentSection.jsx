// File: src/components/ContentSection.jsx
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import ShowCard from './ShowCard';
import EpisodeCard from './EpisodeCard';
import { motion } from 'framer-motion';

const ContentSection = ({ title, data, type = 'show' }) => {
  const [isGrid, setIsGrid] = useState(false);

  const toggleView = () => setIsGrid(!isGrid);

  return (
    <section className="mt-6 mb-4">
      {/* Section Header - Clean Style */}
      <div className="flex justify-between items-end px-4 mb-3">
        {/* Title: Normal Case (Not Uppercase), No colored border */}
        <h2 className="text-lg font-bold text-white leading-none">
          {title}
        </h2>
        
        {/* More Button */}
        <button 
          onClick={toggleView}
          className="text-sm text-gray-400 flex items-center gap-0.5 hover:text-white transition-colors"
        >
          {isGrid ? 'Less' : 'More'} 
          <ChevronRight size={16} className={`transform transition-transform ${isGrid ? 'rotate-90' : ''}`} />
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
              <EpisodeCard episode={item} isGrid={isGrid} />
            ) : (
              <ShowCard show={item} isLandscape={false} isGrid={isGrid} />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ContentSection;
