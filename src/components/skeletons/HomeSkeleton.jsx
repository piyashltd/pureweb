import React from 'react';

const HomeSkeleton = () => {
  return (
    <div className="pb-20 bg-transparent min-h-screen animate-pulse">
      
      {/* 1. Hero Slider Skeleton */}
      <div className="w-full h-[200px] md:h-[400px] bg-gray-800 rounded-b-lg mb-6"></div>

      {/* 2. Channel Row Skeleton (Circle Items) */}
      <div className="px-4 mb-8">
        <div className="flex gap-4 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-2 shrink-0">
              {/* Circle Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-full"></div>
              {/* Text line */}
              <div className="h-3 w-12 bg-gray-800 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Content Sections Skeleton (Repeated Rows) */}
      {[...Array(3)].map((_, sectionIndex) => (
        <div key={sectionIndex} className="px-4 mb-8">
          {/* Section Title */}
          <div className="h-5 w-40 bg-gray-800 rounded mb-4"></div>
          
          {/* Cards Row */}
          <div className="flex gap-4 overflow-hidden">
            {[...Array(4)].map((_, cardIndex) => (
              <div key={cardIndex} className="shrink-0 w-[140px] md:w-[200px]">
                {/* Thumbnail */}
                <div className="h-[200px] md:h-[280px] bg-gray-800 rounded-lg mb-2"></div>
                {/* Title Line */}
                <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSkeleton;
