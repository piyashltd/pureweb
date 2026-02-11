// File: src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // স্ক্রল পজিশন হ্যান্ডেল করতে লাগবে
import HeroSlider from '../components/HeroSlider';
import ChannelRow from '../components/ChannelRow';
import ContentSection from '../components/ContentSection';
import HomeSkeleton from '../components/skeletons/HomeSkeleton';
import { channels, sliders, shows, episodes } from '../data/dummyData';

const Home = () => {
  // ১. লোডিং স্টেট: সেশন স্টোরেজ চেক করবে আগে লোড হয়েছে কিনা
  const [isLoading, setIsLoading] = useState(() => {
    // যদি সেশনে 'home_loaded' থাকে, তাহলে লোডিং false, না থাকলে true
    return !sessionStorage.getItem('home_loaded');
  });

  const location = useLocation();

  // ২. ডাটা লোডিং ইফেক্ট (ফেক API)
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        // লোড শেষ হলে সেশনে ফ্ল্যাগ সেট করব
        sessionStorage.setItem('home_loaded', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // ৩. ✅ স্ক্রল পজিশন মনে রাখা এবং রিস্টোর করা
  useEffect(() => {
    // লোডিং শেষ হলে স্ক্রল পজিশন রিস্টোর করব
    if (!isLoading) {
      const savedScroll = sessionStorage.getItem('home_scroll_pos');
      if (savedScroll) {
        window.scrollTo(0, parseInt(savedScroll));
      }
    }

    // স্ক্রল ইভেন্ট লিসেনার: ইউজার যেখানে স্ক্রল করবে তা সেভ রাখবে
    const handleScroll = () => {
      // একটু ডিলে বা থ্রোটল ছাড়া সরাসরি সেভ করা হচ্ছে যাতে নিখুঁত থাকে
      sessionStorage.setItem('home_scroll_pos', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]); // isLoading পাল্টালে এফেক্ট আবার রান করবে

  const getShowsByChannel = (channelId) => shows.filter(s => s.channelId === channelId);
  const latestEpisodes = episodes; 

  // ৪. যদি লোডিং সত্য হয়, তবে Skeleton দেখাবে
  if (isLoading) {
    return <HomeSkeleton />;
  }

  // ৫. লোডিং শেষ হলে আসল কন্টেন্ট দেখাবে
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
