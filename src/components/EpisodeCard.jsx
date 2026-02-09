// File: src/components/EpisodeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode, isGrid }) => {
  // Grid মোডে ফুল উইডথ, স্লাইডার মোডে ফিক্সড উইডথ
  const widthClass = isGrid ? 'w-full' : 'w-[200px] sm:w-[240px]';

  if (!episode) return null;

  return (
    <Link to={`/watch/${episode.id}`} className={`block group ${widthClass}`}>
      {/* Clean Thumbnail - No Time/Duration Badge */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
        <img 
          src={episode.thumbnail} 
          alt={episode.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {/* Play Icon Overlay (Optional: can keep it subtle or remove) */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
      </div>
      
      <div className="mt-2.5">
        {/* Title */}
        <h4 className="text-sm font-medium text-white line-clamp-2 leading-snug group-hover:text-brand-pink transition-colors">
          {episode.title}
        </h4>
        
        {/* Meta Info: Uniform Color & Size (E112 • 8 Feb) */}
        <div className="text-xs text-gray-400 mt-1.5 font-medium">
             E{episode.episodeNumber} • {episode.date}
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
