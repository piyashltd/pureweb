// File: src/components/EpisodeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeCard = ({ episode }) => {
  if (!episode) return null;

  return (
    // ✅ ফিক্স: এখানে কোনো fixed width নেই, শুধু w-full দেওয়া হয়েছে
    // ফলে প্যারেন্ট (ContentSection) যা সাইজ দেবে, সেটাই নেবে
    <Link to={`/watch/${episode.id}`} className="block group w-full">
      
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 border border-gray-800">
        <img 
          src={episode.thumbnail} 
          alt={episode.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Play Icon Overlay (Optional) */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
      </div>
      
      {/* Text Content */}
      <div className="mt-2.5">
        <h4 className="text-sm font-medium text-white line-clamp-2 leading-snug group-hover:text-brand-pink transition-colors">
          {episode.title}
        </h4>
        
        <div className="flex justify-between items-center text-xs text-gray-400 mt-1.5 font-medium">
             <span>
                E{episode.episodeNumber} • {episode.date}
             </span>
             {episode.duration && (
                <span>{episode.duration}</span>
             )}
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
