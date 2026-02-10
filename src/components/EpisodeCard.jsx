// File: src/components/EpisodeCard.jsxগ
import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode, isGrid }) => {
  const widthClass = isGrid ? 'w-full' : 'w-[200px] sm:w-[240px]';

  if (!episode) return null;

  return (
    <Link to={`/watch/${episode.id}`} className={`block group ${widthClass}`}>
      
      {/* Thumbnail Container */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
        <img 
          src={episode.thumbnail} 
          alt={episode.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Dark Overlay (Optional) */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>

        {/* ✅ DURATION BADGE (Bottom Right Corner) */}
        {episode.duration && (
            <div className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm tracking-wide">
                {episode.duration}
            </div>
        )}
      </div>
      
      <div className="mt-2.5">
        {/* Title */}
        <h4 className="text-sm font-medium text-white line-clamp-2 leading-snug group-hover:text-brand-pink transition-colors">
          {episode.title}
        </h4>
        
        {/* Meta Info: Only Episode & Date (Duration removed from here) */}
        <div className="text-xs text-gray-400 mt-1.5 font-medium">
             E{episode.episodeNumber} • {episode.date}
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
