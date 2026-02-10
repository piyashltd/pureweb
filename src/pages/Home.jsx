// File: src/pages/Home.jsx
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ChannelRow from '../components/ChannelRow';
import ContentSection from '../components/ContentSection';
import { channels, sliders, shows, episodes } from '../data/dummyData';

const Home = () => {
  const getShowsByChannel = (channelId) => shows.filter(s => s.channelId === channelId);
  const latestEpisodes = episodes; 

  return (
    // ✅ পরিবর্তন: এখানে 'bg-transparent' দেওয়া হয়েছে যাতে পেছনের এনিমেশন দেখা যায়
    <div className="min-h-screen bg-transparent pb-20">
      
      {/* 1. Hero Carousel */}
      <HeroSlider slides={sliders} />
      
      {/* 2. Channel Icons */}
      <ChannelRow channels={channels} />

      {/* 3. Latest Episodes */}
      <ContentSection 
        title="Latest Free Episodes" 
        data={latestEpisodes} 
        type="episode" 
      />

      {/* 4. Toffee Section */}
      <ContentSection 
        title="Toffee Exclusive" 
        data={getShowsByChannel('toffee-turkish')} 
        type="show" 
      />

      {/* 5. Zee Bangla */}
      <ContentSection 
        title="Zee Bangla" 
        data={getShowsByChannel('zee-bangla')} 
        type="show" 
      />

       {/* 6. Star Jalsha */}
       <ContentSection 
        title="Star Jalsha" 
        data={getShowsByChannel('star-jalsha')} 
        type="show" 
      />
      
      {/* 7. Sun Bangla */}
      <ContentSection 
        title="Sun Bangla" 
        data={getShowsByChannel('sun-bangla')} 
        type="show" 
      />
      
      {/* 8. Colors Bangla */}
      <ContentSection 
        title="Colors Bangla" 
        data={getShowsByChannel('colors-bangla')} 
        type="show" 
      />

    </div>
  );
};

export default Home;
