// File: src/components/HeroSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { episodes, shows } from '../data/dummyData';
import { Play } from 'lucide-react';

// CSS Import
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const [heroSlides, setHeroSlides] = useState([]);
  const progressBar = useRef(null); 

  useEffect(() => {
    const shuffled = [...episodes].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 8);
    
    const mergedData = selected.map(ep => {
        const parentShow = shows.find(s => s.id === ep.showId);
        return {
            ...ep,
            showTitle: parentShow ? parentShow.title : ep.title,
            showPoster: parentShow ? parentShow.poster : ep.thumbnail
        };
    });
    setHeroSlides(mergedData);
  }, []);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressBar.current) {
        progressBar.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  if (heroSlides.length === 0) return null;

  return (
    <div className="w-full px-4 pt-4 pb-0 mb-6">
      <style>
        {`
          .swiper-slide-active .slide-image {
            animation: slowZoom 6s linear alternate;
          }
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
          }

          .swiper-slide-active .slide-content {
            animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            opacity: 0;
            transform: translateY(20px);
          }
          @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
          }

          /* Pagination Styles */
          .custom-pagination-container {
            display: flex;
            justify-content: center;
            gap: 5px;
            margin-top: 10px;
          }
          .swiper-pagination-bullet {
            background-color: #333;
            width: 6px;
            height: 6px;
            opacity: 1;
            transition: all 0.3s ease;
            margin: 0 !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #ec4899; 
            width: 18px;
            border-radius: 4px;
          }
        `}
      </style>

      {/* Slider Container */}
      <div className="relative w-full h-[180px] sm:h-[380px] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0f0f0f]">
        
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ 
            el: '.custom-pagination-container', 
            clickable: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="w-full h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full group">
                
                {/* Background Image */}
                <img 
                  src={slide.thumbnail} 
                  alt={slide.showTitle} 
                  className="slide-image w-full h-full object-cover opacity-90"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent"></div>

                {/* Content Area */}
                <div className="slide-content absolute bottom-6 left-4 sm:bottom-10 sm:left-6 max-w-[80%] z-20">
                  
                   {/* Show Title (Mobile: Text-LG, Desktop: Text-4XL) */}
                  <h2 className="text-lg sm:text-4xl font-bold text-white mb-2 sm:mb-4 leading-tight drop-shadow-md">
                      {slide.showTitle}
                  </h2>

                  {/* Watch Button (Mobile: Smaller padding & Text) */}
                  <Link 
                      to={`/show/${slide.showId}`}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 sm:px-6 sm:py-2.5 bg-brand-pink text-white text-[10px] sm:text-sm font-bold rounded-full hover:bg-brand-pink/90 transition-all active:scale-95 shadow-lg shadow-brand-pink/20"
                  >
                    <Play size={12} className="sm:w-4 sm:h-4" fill="currentColor" />
                    দেখুন
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Progress Bar (Line) */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-white/10 z-30">
            <div 
                ref={progressBar} 
                className="h-full bg-brand-pink transition-all duration-75 linear"
                style={{ width: '0%' }}
            ></div>
          </div>

        </Swiper>
      </div>

      {/* Pagination Dots (•••) */}
      <div className="custom-pagination-container"></div>
    </div>
  );
};

export default HeroSlider;
