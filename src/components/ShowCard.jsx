import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show, isLandscape = false, isGrid = false }) => {
  // Safety check: show data না থাকলে কিছুই দেখাবে না (ক্র্যাশ করবে না)
  if (!show) return null;

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
        
        {/* Badges - Safe Check */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start z-10">
            {/* যদি ব্যাজ ডাটা থাকে তবেই দেখাবে */}
            {show.badge ? (
                <span 
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm text-white uppercase"
                  style={{ backgroundColor: show.badge.color || '#e50914' }} 
                >
                  {show.badge.text}
                </span>
            ) : (
                /* পুরানো লজিক সাপোর্ট করার জন্য (যদি badge অবজেক্ট না থাকে) */
                show.isFree && (
                    <span className="bg-green-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">FREE</span>
                )
            )}
            
            {/* New Episode Badge Logic */}
            {show.badges && show.badges.includes('NEW EPISODE') && (
                <span className="bg-brand-pink text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">NEW</span>
            )}
        </div>

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
