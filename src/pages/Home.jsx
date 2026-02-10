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
    // ⚠️ পরিবর্তন: আগের 'bg-gradient...' সরিয়ে 'bg-transparent' দেওয়া হয়েছে
    // এতে পেছনের index.css এর এনিমেশন দেখা যাবে
    <div className="min-h-screen bg-transparent pb-20">
      
      <HeroSlider slides={sliders} />
      
      <ChannelRow channels={channels} />

      <ContentSection 
        title="Latest Free Episodes" 
        data={latestEpisodes} 
        type="episode" 
      />

      <ContentSection 
        title="Toffee Exclusive" 
        data={getShowsByChannel('toffee')} 
        type="show" 
      />

      <ContentSection 
        title="Zee Bangla" 
        data={getShowsByChannel('zee')} 
        type="show" 
      />

       <ContentSection 
        title="Star Jalsha" 
        data={getShowsByChannel('star')} 
        type="show" 
      />
      
      <ContentSection 
        title="Sun Bangla" 
        data={getShowsByChannel('sun')} 
        type="show" 
      />
      
      <ContentSection 
        title="Colors Bangla" 
        data={getShowsByChannel('colors')} 
        type="show" 
      />

    </div>
  );
};

export default Home;
