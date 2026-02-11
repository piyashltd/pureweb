// File: src/pages/Home.jsx
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom'; // ✅ useNavigationType যুক্ত করা হয়েছে
import HeroSlider from '../components/HeroSlider';
import ChannelRow from '../components/ChannelRow';
import ContentSection from '../components/ContentSection';
import HomeSkeleton from '../components/skeletons/HomeSkeleton';
import { channels, sliders, shows, episodes } from '../data/dummyData';

const Home = () => {
  const location = useLocation();
  const navType = useNavigationType(); // ✅ ন্যাভিগেশন টাইপ চেক (PUSH / POP)

  // ১. লোডিং স্টেট: যদি Back button (POP) দিয়ে আসা হয়, তবে লোডিং দেখাবো না, অন্যথায় দেখাবো
  const [isLoading, setIsLoading] = useState(() => {
     return navType !== 'POP'; 
  });

  // ২. ডাটা লোডিং (শুধু নতুন করে ঢুকলে বা PUSH হলে চলবে)
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // ৩. স্ক্রল রিস্টোর (শুধু ব্যাক করে আসলে কাজ করবে)
  useLayoutEffect(() => {
    if (navType === 'POP' && !isLoading) { // ✅ Only restore on Back
      const savedScroll = sessionStorage.getItem('home_scroll_pos');
      if (savedScroll) {
         // লেআউট রেন্ডার হওয়ার জন্য সামান্য সময় দেওয়া হচ্ছে
         setTimeout(() => {
           window.scrollTo(0, parseInt(savedScroll));
         }, 0);
      }
    }
  }, [isLoading, navType]);

  // ৪. স্ক্রল পজিশন সেভ করা (সবসময়)
  useEffect(() => {
    // লোডিং অবস্থায় স্ক্রল সেভ করব না
    if (isLoading) return;

    const handleScroll = () => {
       sessionStorage.setItem('home_scroll_pos', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const getShowsByChannel = (channelId) => shows.filter(s => s.channelId === channelId);
  const latestEpisodes = episodes; 

  // ৫. স্কেলিটন ডিসপ্লে
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
