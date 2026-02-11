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

  // ১. লোডিং স্টেট: সবসময় true থাকবে শুরুতে (১ সেকেন্ডের জন্য)
  const [isLoading, setIsLoading] = useState(true);

  // ২. বাধ্যতামূলক ১ সেকেন্ড লোডিং লজিক
  useEffect(() => {
    // যেকোনো ভাবেই পেজে আসা হোক না কেন (Back/Reload/New), ১ সেকেন্ড Skeleton দেখাবে
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // ১০০০ ms = ১ সেকেন্ড

    return () => clearTimeout(timer);
  }, [location.key]); // location.key পাল্টালে (মানে নতুন রেন্ডার হলে) ইফেক্ট রান করবে

  // ৩. স্ক্রল পজিশন রিস্টোর (লোডিং শেষ হওয়ার পর রান হবে)
  useLayoutEffect(() => {
    if (!isLoading) {
      const savedScroll = sessionStorage.getItem('home_scroll_pos');
      
      if (savedScroll) {
        // লোডিং শেষ হওয়ার সাথে সাথে স্ক্রল পজিশন সেট হবে
        // 'setTimeout' এর দরকার নেই কারণ ১ সেকেন্ডে DOM রেডি হয়ে যাবে
        window.scrollTo(0, parseInt(savedScroll));
      }
    }
  }, [isLoading]);

  // ৪. স্ক্রল পজিশন সেভ করা
  useEffect(() => {
    if (isLoading) return; // লোডিং অবস্থায় স্ক্রল সেভ করব না (কারণ তখন পজিশন ০ থাকে)

    const handleScroll = () => {
       sessionStorage.setItem('home_scroll_pos', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const getShowsByChannel = (channelId) => shows.filter(s => s.channelId === channelId);
  const latestEpisodes = episodes; 

  // ৫. স্কেলিটন ডিসপ্লে (১ সেকেন্ড পর্যন্ত এটাই দেখাবে)
  if (isLoading) {
    return <HomeSkeleton />;
  }

  // ৬. মেইন কন্টেন্ট
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
