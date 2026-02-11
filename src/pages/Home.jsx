// File: src/pages/Home.jsx
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ChannelRow from '../components/ChannelRow';
import ContentSection from '../components/ContentSection';
import HomeSkeleton from '../components/skeletons/HomeSkeleton';
import { channels, sliders, shows, episodes } from '../data/dummyData';

const Home = () => {
  // ১. লোডিং স্টেট হ্যান্ডলিং
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('home_loaded');
  });

  const location = useLocation();

  // ২. ফেক লোডিং ইফেক্ট
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('home_loaded', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // ৩. ✅ স্ক্রল পজিশন রিস্টোর (useLayoutEffect ব্যবহার করা হয়েছে যাতে ফ্লিকার না করে)
  useLayoutEffect(() => {
    if (!isLoading) {
      const savedScroll = sessionStorage.getItem('home_scroll_pos');
      
      if (savedScroll) {
        // একটু সময় দেওয়া হচ্ছে যাতে ContentSection গুলো 'Grid' মোডে রেন্ডার হতে পারে
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedScroll));
        }, 100); // 100ms delay to allow layout expansion
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

  if (isLoading) {
    return <HomeSkeleton />;
  }

  return (
    <div className="pb-20 bg-transparent min-h-screen">
      <HeroSlider slides={sliders} />
      <ChannelRow channels={channels} />

      {/* Content Sections */}
      {/* টাইটেলগুলো ইউনিক হতে হবে কারণ এগুলো দিয়েই সেশন কি তৈরি হচ্ছে */}
      
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
