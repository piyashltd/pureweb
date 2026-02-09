// File: src/components/ShowCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const ShowCard = ({ show, isLandscape = false, isGrid = false }) => {
  // Logic for width: If Grid view -> Full Width, If Scroll -> Fixed Width
  const widthClass = isGrid 
    ? 'w-full' 
    : (isLandscape ? 'min-w-[260px] w-[260px]' : 'min-w-[130px] w-[130px] sm:min-w-[150px]');

  return (
    <Link to={`/show/${show.id}`} className={`block group relative ${widthClass}`}>
      <div className={`relative overflow-hidden rounded-xl bg-gray-800 ${isLandscape ? 'aspect-video' : 'aspect-[2/3]'}`}>
        <img 
          src={show.poster} 
          alt={show.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start z-10">
            {show.isFree && (
                <span className="bg-brand-primary text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">FREE</span>
            )}
             {show.badges.includes('NEW EPISODE') && (
                <span className="bg-brand-pink text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">NEW</span>
            )}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="mt-2 text-center sm:text-left">
        <h3 className="text-sm font-semibold text-white line-clamp-1 group-hover:text-brand-pink transition-colors">
            {show.title}
        </h3>
      </div>
    </Link>
  );
};

export default ShowCard;
