import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const ShowCard = ({ show, isLandscape = true }) => {
  return (
    <Link to={`/show/${show.id}`} className={`block group relative ${isLandscape ? 'min-w-[260px] w-[260px]' : 'w-full'}`}>
      <div className={`relative overflow-hidden rounded-xl ${isLandscape ? 'aspect-video' : 'aspect-[2/3]'}`}>
        <img 
          src={show.poster} 
          alt={show.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
            {show.badges.includes('FREE') && (
                <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm"></span>
            )}
             {show.badges.includes('NEW EPISODE') && (
                <span className="bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-sm"></span>
            )}
            {show.badges.includes('WATCH FOR FREE') && (
                <span className="bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-sm"></span>
            )}
        </div>

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <Play fill="white" className="text-white" size={24} />
             </div>
        </div>
      </div>
      
      <div className="mt-2">
        <h3 className="text-sm font-semibold text-white line-clamp-1 group-hover:text-brand-pink transition-colors">
            {show.title}
        </h3>
        {show.episodeNumber && (
            <p className="text-xs text-gray-400">E{show.episodeNumber} • {show.date}</p>
        )}
      </div>
    </Link>
  );
};

export default ShowCard;
