// File: src/components/EpisodeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode, isGrid }) => {
  // ✅ ফিক্স: ContentSection এর সাথে মিল রেখে মোবাইলে ১৯০px করা হয়েছে
  // আগে ছিল: 'w-[200px] sm:w-[240px]'
  const widthClass = isGrid ? 'w-full' : 'w-[190px] sm:w-[240px]';

  if (!episode) return null;

  return (
    <Link to={`/watch/${episode.id}`} className={`block group ${widthClass}`}>
      
      {/* 1. Thumbnail Container */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
        <img 
          src={episode.thumbnail} 
          alt={episode.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
      </div>
      
      <div className="mt-2.5">
        {/* Title */}
        <h4 className="text-sm font-medium text-white line-clamp-2 leading-snug group-hover:text-brand-pink transition-colors">
          {episode.title}
        </h4>
        
        {/* 2. Meta Info Row */}
        <div className="flex justify-between items-center text-xs text-gray-400 mt-1.5 font-medium">
             
             {/* বাম পাশে: এপিসোড ও তারিখ */}
             <span>
                E{episode.episodeNumber} • {episode.date}
             </span>

             {/* ডান পাশে: সময়কাল (Duration) */}
             {episode.duration && (
                <span>{episode.duration}</span>
             )}
        </div>

      </div>
    </Link>
  );
};

export default EpisodeCard;
