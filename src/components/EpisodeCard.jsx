// File: src/components/EpisodeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

const EpisodeCard = ({ episode, isGrid }) => {
  // If Grid view, take full width of column. If Horizontal, fixed width.
  const widthClass = isGrid ? 'w-full' : 'w-[200px] sm:w-[240px]';

  return (
    <Link to={`/watch/${episode.id}`} className={`block group ${widthClass}`}>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
        <img 
          src={episode.thumbnail} 
          alt={episode.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
          <PlayCircle size={32} className="text-white opacity-80 group-hover:opacity-100 scale-90 group-hover:scale-110 transition-all" />
        </div>

        {/* Badge (Optional) */}
        <div className="absolute bottom-1 right-1 bg-black/60 px-1.5 rounded text-[10px] text-white font-mono">
            {episode.duration}
        </div>
      </div>
      
      <div className="mt-2">
        <h4 className="text-xs font-bold text-gray-200 line-clamp-2 leading-tight group-hover:text-brand-pink transition-colors">
          {episode.title}
        </h4>
        <div className="flex justify-between items-center mt-1">
            <span className="text-[10px] text-gray-500">
                {episode.date}
            </span>
             <span className="text-[10px] text-brand-primary bg-brand-primary/10 px-1 rounded">
                E{episode.episodeNumber}
            </span>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
