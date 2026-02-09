// File: src/pages/ShowDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shows, episodes } from '../data/dummyData';
import { ChevronRight, LayoutGrid, List } from 'lucide-react'; // Icons
import EpisodeCard from '../components/EpisodeCard';
import { motion, AnimatePresence } from 'framer-motion';

const ShowDetails = () => {
  const { id } = useParams();
  const [viewMode, setViewMode] = useState('horizontal'); // 'horizontal' or 'grid'

  const show = shows.find(s => s.id === id);
  const showEpisodes = episodes.filter(e => e.showId === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!show) return <div className="text-center p-10 text-white">Show not found</div>;

  return (
    <div className="pb-20">
      {/* Banner */}
      <div className="relative w-full h-[350px] sm:h-[400px]">
        <img src={show.poster} alt={show.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        <div className="absolute bottom-6 left-4 right-4">
            <h1 className="text-3xl font-bold text-white mb-2">{show.title}</h1>
            <p className="text-gray-300 text-sm mb-4 line-clamp-2 max-w-lg">{show.description}</p>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="px-4 py-4 mt-2">
        
        {/* Header with Toggle Logic */}
        <div className="flex justify-between items-center mb-5">
           <div className="flex items-center gap-2">
                {/* Dynamic Badge from JSON */}
                {show.badge && (
                    <span 
                        className="text-[10px] font-bold px-2 py-0.5 rounded text-white uppercase tracking-wider"
                        style={{ backgroundColor: show.badge.color }}
                    >
                        {show.badge.text}
                    </span>
                )}
                
                {/* Clickable Episode Count */}
                <button 
                    onClick={() => setViewMode('grid')}
                    className="flex items-center gap-1 text-white hover:text-brand-pink transition group"
                >
                    <span className="text-lg font-bold">{showEpisodes.length} Episodes</span>
                    <ChevronRight size={18} className={`transform transition-transform ${viewMode === 'grid' ? 'rotate-90' : ''} group-hover:translate-x-1`} />
                </button>
           </div>

           {/* View Toggle Icon (Visible only in grid mode to switch back) */}
           {viewMode === 'grid' && (
               <button 
                onClick={() => setViewMode('horizontal')}
                className="bg-gray-800 p-1.5 rounded-full text-white hover:bg-gray-700 transition"
               >
                   <List size={18} />
               </button>
           )}
        </div>
        
        {/* Content Area */}
        <AnimatePresence mode='wait'>
            {viewMode === 'horizontal' ? (
                // Horizontal Scroll View
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 overflow-x-auto no-scrollbar pb-4"
                >
                    {showEpisodes.map(ep => (
                        <div key={ep.id} className="flex-shrink-0">
                             <EpisodeCard episode={ep} />
                        </div>
                    ))}
                </motion.div>
            ) : (
                // Grid View
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                    {showEpisodes.map(ep => (
                        <div key={ep.id} className="w-full">
                             <EpisodeCard episode={ep} isGrid={true} />
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default ShowDetails;
