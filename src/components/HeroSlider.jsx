// File: src/components/HeroSlider.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { episodes, shows } from '../data/dummyData';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const progressCircle = useRef(null);
  const progressBar = useRef(null);
  const [heroSlides, setHeroSlides] = useState([]);

  // র‍্যান্ডমলি ৮টি এপিসোড সিলেক্ট করার লজিক
  useEffect(() => {
    // 1. সব এপিসোড থেকে শাফেল করা
    const shuffled = [...episodes].sort(() => 0.5 - Math.random());
    // 2. প্রথম ৮টি নেওয়া
    const selected = shuffled.slice(0, 8);
    // 3. শো-এর টাইটেল এবং ইনফো মার্জ করা
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
    // প্রোগ্রেস বার আপডেট লজিক (নিচের লাইনের জন্য)
    if (progressBar.current) {
        progressBar.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  if (heroSlides.length === 0) return null;

  return (
    <div className="w-full h-[200px] sm:h-[350px] relative group bg-[#0a0a0a]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image (Episode Thumbnail) */}
              <img 
                src={slide.thumbnail} 
                alt={slide.showTitle} 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-10 left-4 right-4 max-w-lg">
                 {/* Show Title (Smaller Size as requested) */}
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">
                    {slide.showTitle}
                </h2>
                <p className="text-gray-300 text-xs mb-3 line-clamp-1">
                    {slide.title}
                </p>

                {/* Click goes to Show Category Page */}
                <Link 
                    to={`/show/${slide.showId}`}
                    className="inline-flex items-center px-5 py-1.5 bg-brand-primary/90 rounded-md text-white text-xs font-bold hover:bg-brand-primary transition shadow-lg shadow-brand-primary/20"
                >
                  Watch Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Progress Bar at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 z-10">
            <div 
                ref={progressBar} 
                className="h-full bg-brand-pink transition-all duration-100 ease-linear"
                style={{ width: '0%' }}
            ></div>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
