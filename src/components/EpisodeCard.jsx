// File: src/components/EpisodeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode, isGrid }) => {
  // Width logic: Grid takes full width, Horizontal has fixed width
  const widthClass = isGrid ? 'w-full' : 'w-[200px] sm:w-[240px]';

  // Safety check: episode data might be undefined initially
  if (!episode) return null;

  return (
    <Link to={`/watch/${episode.id}`} className={`block group ${widthClass}`}>
      {/* Clean Thumbnail - No Play Icon */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
        <img 
          src={episode.thumbnail} 
          alt={episode.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Only Duration at bottom right */}
        <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 rounded text-[10px] text-white font-mono">
            {episode.duration}
        </div>
      </div>
      
      <div className="mt-2.5">
        <h4 className="text-sm font-medium text-white line-clamp-1 group-hover:text-brand-pink transition-colors">
          {episode.title}
        </h4>
        
        <div className="flex items-center gap-2 mt-1">
             <span className="text-xs text-[#a1a1aa] font-medium">
                Episode {episode.episodeNumber}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span className="text-[11px] text-gray-500">
                {episode.date}
            </span>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
