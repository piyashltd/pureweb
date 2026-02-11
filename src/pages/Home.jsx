// File: src/pages/Home.jsx
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ChannelRow from '../components/ChannelRow';
import ContentSection from '../components/ContentSection';
import HomeSkeleton from '../components/skeletons/HomeSkeleton';
import { channels, sliders, shows, episodes } from '../data/dummyData';

const Home = () => {
  const location = useLocation();
  const navType = useNavigationType(); 

  // ১. লোডিং স্টেট: সবসময় true থাকবে শুরুতে
  const [isLoading, setIsLoading] = useState(true);

  // ২. বাধ্যতামূলক ২ সেকেন্ড লোডিং লজিক (সময় বাড়ানো হয়েছে)
  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // ✅ ১০০০ এর বদলে ২০০০ (২ সেকেন্ড) করা হয়েছে

    return () => clearTimeout(timer);
  }, [location.key]); 

  // ৩. স্ক্রল পজিশন রিস্টোর
  useLayoutEffect(() => {
    if (!isLoading) {
      const savedScroll = sessionStorage.getItem('home_scroll_pos');
      
      if (savedScroll) {
        // ২ সেকেন্ড সময় পাওয়ার কারণে ব্রাউজার এখন ঠিকঠাক পজিশন সেট করতে পারবে
        window.scrollTo(0, parseInt(savedScroll));
      }
    }
  }, [isLoading]);

  // ৪. স্ক্রল পজিশন সেভ করা
  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
       sessionStorage.setItem('home_scroll_pos', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const getShowsByChannel = (channelId) => shows.filter(s => s.channelId === channelId);
  const latestEpisodes = episodes; 

  // ৫. স্কেলিটন ডিসপ্লে (২ সেকেন্ড পর্যন্ত এটাই দেখাবে)
  if (isLoading) {
    return <HomeSkeleton />;
  }

  return (
    <div className="pb-20 bg-transparent min-h-screen">
      
      <HeroSlider slides={sliders} />
      <ChannelRow channels={channels} />

      <ContentSection 
        title="Latest Free Episodes" 
        data={latestEpisodes} 
        type="episode" 
      />

      <ContentSection 
        title="Toffee Exclusive" 
        data={getShowsByChannel('toffee-turkish')} 
        type="show" 
      />

      <ContentSection 
        title="Zee Bangla" 
        data={getShowsByChannel('zee-bangla')} 
        type="show" 
      />

       <ContentSection 
        title="Star Jalsha" 
        data={getShowsByChannel('star-jalsha')} 
        type="show" 
      />
      
      <ContentSection 
        title="Sun Bangla" 
        data={getShowsByChannel('sun-bangla')} 
        type="show" 
      />
      
      <ContentSection 
        title="Colors Bangla" 
        data={getShowsByChannel('colors-bangla')} 
        type="show" 
      />

    </div>
  );
};

export default Home;
