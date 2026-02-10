// File: src/pages/ShowDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shows, episodes } from '../data/dummyData';
import { ChevronRight, LayoutGrid, ChevronDown } from 'lucide-react'; 
import EpisodeCard from '../components/EpisodeCard';
import { motion, AnimatePresence } from 'framer-motion';

const ShowDetails = () => {
  const { id } = useParams();
  const [viewMode, setViewMode] = useState('horizontal'); 
  const [selectedSeason, setSelectedSeason] = useState(1); // Default Season 1

  const show = shows.find(s => s.id === id);
  
  // ১. শো না থাকলে রিটার্ন
  if (!show) return <div className="text-center p-10 text-white">Show not found</div>;

  // ২. ওই শো-এর সব এপিসোড বের করা
  const allShowEpisodes = episodes.filter(e => e.showId === id);

  // ৩. ইউনিক সিজন বের করা (Season 1, Season 2, etc.)
  const availableSeasons = [...new Set(allShowEpisodes.map(e => e.season))].sort((a,b) => a - b);

  // ৪. সিলেক্ট করা সিজন অনুযায়ী এপিসোড ফিল্টার করা
  const displayedEpisodes = allShowEpisodes.filter(e => e.season === parseInt(selectedSeason));

  // ৫. ব্যাজ ডিসপ্লে লজিক (Details Page এর জন্য আলাদা ব্যাজ যদি থাকে, নাহলে মেইন ব্যাজ)
  // যদি ডাটাতে `detailsBadge` থাকে সেটা দেখাবে, না থাকলে `badge` দেখাবে
  const displayBadge = show.detailsBadge || show.badge;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  return (
    <div className="pb-20 min-h-screen bg-[#0a0a0a]">
      {/* Top Poster Section (Centered) */}
      <div className="flex flex-col items-center pt-8 pb-6 px-4 bg-gradient-to-b from-[#151515] to-[#0a0a0a]">
        
        <div className="w-[150px] h-[220px] rounded-xl overflow-hidden shadow-2xl mb-5 border border-white/10 relative group">
            <img src={show.poster} alt={show.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
        </div>

        <h1 className="text-2xl font-bold text-white text-center mb-3 leading-tight tracking-wide">
            {show.title}
        </h1>

        {/* Dynamic Badge Logic: Text না থাকলে রেন্ডার হবে না */}
        {displayBadge && displayBadge.text && (
            <div className="mb-3">
                <span 
                    className="text-[11px] font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider"
                    style={{ 
                        backgroundColor: displayBadge.color,
                        color: displayBadge.textColor || '#fff'
                    }}
                >
                    {displayBadge.text}
                </span>
            </div>
        )}

        <p className="text-gray-400 text-xs font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
            Total Episodes: {allShowEpisodes.length}
        </p>
      </div>

      {/* Episodes Section */}
      <div className="px-4 mt-4">
        
        {/* Controls Row: Season Selector & View Toggle */}
        <div className="flex justify-between items-center mb-5 border-b border-white/10 pb-3">
           
           {/* Season Dropdown */}
           <div className="relative">
                <select 
                    value={selectedSeason} 
                    onChange={(e) => setSelectedSeason(e.target.value)}
                    className="appearance-none bg-[#1e1e1e] text-white text-sm font-semibold pl-4 pr-10 py-2 rounded-lg border border-white/10 focus:outline-none focus:border-brand-primary"
                >
                    {availableSeasons.map(season => (
                        <option key={season} value={season}>Season {season}</option>
                    ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
           </div>

           {/* View Toggle */}
           {viewMode === 'horizontal' ? (
               <button 
                onClick={() => setViewMode('grid')}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
               >
                   <span>See All</span>
                   <ChevronRight size={16} />
               </button>
           ) : (
               <button 
                onClick={() => setViewMode('horizontal')}
                className="flex items-center gap-2 bg-[#1e1e1e] border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-white hover:bg-white/10 transition"
               >
                   <LayoutGrid size={14} />
                   <span>Carousel</span>
               </button>
           )}
        </div>
        
        {/* Content Area */}
        <AnimatePresence mode='wait'>
            {/* যদি সিজনে কোনো এপিসোড না থাকে */}
            {displayedEpisodes.length === 0 ? (
                <div className="text-center text-gray-500 py-10 text-sm">No episodes in Season {selectedSeason}</div>
            ) : (
                viewMode === 'horizontal' ? (
                    <motion.div 
                        key="horizontal"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex gap-3 overflow-x-auto no-scrollbar pb-4"
                    >
                        {displayedEpisodes.map(ep => (
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
                        {displayedEpisodes.map(ep => (
                            <div key={ep.id} className="w-full">
                                <EpisodeCard episode={ep} isGrid={true} />
                            </div>
                        ))}
                    </motion.div>
                )
            )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default ShowDetails;
