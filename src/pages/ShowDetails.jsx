// File: src/pages/ShowDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shows, episodes } from '../data/dummyData';
import { ChevronRight, LayoutGrid } from 'lucide-react'; 
import EpisodeCard from '../components/EpisodeCard';
import { motion, AnimatePresence } from 'framer-motion';

const ShowDetails = () => {
  const { id } = useParams();
  const [viewMode, setViewMode] = useState('horizontal'); 

  const show = shows.find(s => s.id === id);
  const showEpisodes = episodes.filter(e => e.showId === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!show) return <div className="text-center p-10 text-white">Show not found</div>;

  return (
    <div className="pb-20 min-h-screen bg-[#0a0a0a]">
      {/* Top Poster Section (Centered Layout) */}
      <div className="flex flex-col items-center pt-6 pb-4 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        
        {/* Main Poster Image */}
        <div className="w-[140px] h-[210px] rounded-lg overflow-hidden shadow-2xl mb-4 border border-white/10">
            <img src={show.poster} alt={show.title} className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-white text-center mb-3 leading-tight">
            {show.title}
        </h1>

        {/* Dynamic Badge Section (JSON Controlled) */}
        {show.badge && (
            <div className="mb-2">
                <span 
                    className="text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
                    style={{ 
                        backgroundColor: show.badge.color,     // JSON থেকে ব্যাকগ্রাউন্ড কালার
                        color: show.badge.textColor || '#fff'  // JSON থেকে টেক্সট কালার (ডিফল্ট সাদা)
                    }}
                >
                    {show.badge.text}
                </span>
            </div>
        )}

        {/* Total Episodes Text */}
        <p className="text-gray-400 text-xs font-medium">
            Total Episodes: {showEpisodes.length}
        </p>
      </div>

      {/* Episodes Section */}
      <div className="px-4 mt-2">
        
        {/* Episodes Header Row */}
        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
           <h3 className="text-lg font-bold text-white">Episodes</h3>

           {/* Toggle Logic */}
           {viewMode === 'horizontal' ? (
               <button 
                onClick={() => setViewMode('grid')}
                className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition"
               >
                   <span>{showEpisodes.length} episodes</span>
                   <ChevronRight size={16} />
               </button>
           ) : (
               <button 
                onClick={() => setViewMode('horizontal')}
                className="flex items-center gap-2 bg-[#1e1e1e] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-white hover:bg-white/10 transition"
               >
                   <LayoutGrid size={14} />
                   <span>Carousel View</span>
               </button>
           )}
        </div>
        
        {/* Content Area */}
        <AnimatePresence mode='wait'>
            {viewMode === 'horizontal' ? (
                <motion.div 
                    key="horizontal"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-3 overflow-x-auto no-scrollbar pb-4"
                >
                    {showEpisodes.map(ep => (
                        <div key={ep.id} className="flex-shrink-0">
                             <EpisodeCard episode={ep} />
                        </div>
                    ))}
                </motion.div>
            ) : (
                <motion.div 
                    key="grid"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3"
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
