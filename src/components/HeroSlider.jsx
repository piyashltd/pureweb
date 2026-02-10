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
  const progressBar = useRef(null); // প্রোগ্রেস বারের জন্য রেফারেন্স

  // ১. র‍্যান্ডমলি ৮টি এপিসোড সিলেক্ট করার লজিক
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

  // ২. প্রোগ্রেস বার আপডেট করার লজিক
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressBar.current) {
        // progress ১ থেকে ০ এর দিকে যায়, তাই আমরা (1 - progress) ব্যবহার করছি
        progressBar.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  if (heroSlides.length === 0) return null;

  return (
    <div className="w-full px-4 pt-4 pb-0 mb-6">
      <style>
        {`
          /* ইমেজ জুম এনিমেশন */
          .swiper-slide-active .slide-image {
            animation: slowZoom 6s linear alternate;
          }
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.15); }
          }

          /* টেক্সট ফেড আপ এনিমেশন */
          .swiper-slide-active .slide-content {
            animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            opacity: 0;
            transform: translateY(30px);
          }
          @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
          }

          /* ডটস (•••) স্টাইলিং - স্পিনার স্টাইল */
          .custom-pagination-container {
            display: flex;
            justify-content: center;
            gap: 6px;
            margin-top: 12px;
          }
          .swiper-pagination-bullet {
            background-color: #333;
            width: 8px;
            height: 8px;
            opacity: 1;
            transition: all 0.3s ease;
            margin: 0 !important;
          }
          /* একটিভ ডট বড় হবে (পিল শেপ) */
          .swiper-pagination-bullet-active {
            background-color: #ec4899; /* Brand Pink */
            width: 24px;
            border-radius: 4px;
          }
        `}
      </style>

      {/* Main Slider Container with Rounded Corners */}
      <div className="relative w-full h-[200px] sm:h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0f0f0f]">
        
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ 
            el: '.custom-pagination-container', // ডটস গুলো স্লাইডারের বাইরে নিচে রেন্ডার হবে
            clickable: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onAutoplayTimeLeft={onAutoplayTimeLeft} // প্রোগ্রেস বার আপডেট ফাংশন
          className="w-full h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full group">
                
                {/* Background Image */}
                <img 
                  src={slide.thumbnail} 
                  alt={slide.showTitle} 
                  className="slide-image w-full h-full object-cover"
                />
                
                {/* Gradient Overlay (Darker at bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent"></div>

                {/* Content Area (Clean: Only Title + Button) */}
                <div className="slide-content absolute bottom-10 left-6 max-w-lg z-20">
                  
                   {/* Show Title */}
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-md tracking-tight">
                      {slide.showTitle}
                  </h2>

                  {/* Watch Button */}
                  <Link 
                      to={`/show/${slide.showId}`}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-brand-pink text-white text-sm font-bold rounded-full hover:bg-brand-pink/90 transition-all active:scale-95 shadow-lg shadow-brand-pink/20"
                  >
                    <Play size={14} fill="currentColor" />
                    দেখুন
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Progress Bar (Line) - স্লাইডারের একদম নিচে */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-30">
            <div 
                ref={progressBar} 
                className="h-full bg-brand-pink transition-all duration-75 linear"
                style={{ width: '0%' }}
            ></div>
          </div>

        </Swiper>
      </div>

      {/* Pagination Dots (•••) - স্লাইডারের নিচে আলাদা ভাবে */}
      <div className="custom-pagination-container"></div>
    </div>
  );
};

export default HeroSlider;
