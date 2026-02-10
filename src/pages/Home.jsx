import React, { useState, useEffect } from 'react'; // ১. useState, useEffect ইমপোর্ট করুন
import HeroSlider from '../components/HeroSlider';
import ChannelRow from '../components/ChannelRow';
import ContentSection from '../components/ContentSection';
import HomeSkeleton from '../components/skeletons/HomeSkeleton'; // ২. Skeleton ইমপোর্ট করুন
import { channels, sliders, shows, episodes } from '../data/dummyData';

const Home = () => {
  // ৩. লোডিং স্টেট ডিক্লেয়ার করুন
  const [isLoading, setIsLoading] = useState(true);

  // ৪. ফেক API কল (ডাটা লোড হওয়ার ভান করা)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // ২ সেকেন্ড পর লোডিং বন্ধ হবে এবং আসল ডাটা দেখাবে
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getShowsByChannel = (channelId) => shows.filter(s => s.channelId === channelId);
  const latestEpisodes = episodes; 

  // ৫. যদি লোডিং সত্য হয়, তবে Skeleton দেখাবে
  if (isLoading) {
    return <HomeSkeleton />;
  }

  // ৬. লোডিং শেষ হলে আসল কন্টেন্ট দেখাবে
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
