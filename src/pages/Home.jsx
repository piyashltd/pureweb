import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ChannelRow from '../components/ChannelRow';
import ContentSection from '../components/ContentSection'; 
import { channels, sliders, shows, episodes } from '../data/dummyData';

const Home = () => {
  const getShowsByChannel = (channelId) => shows.filter(s => s.channelId === channelId);
  
  // ফ্রি এপিসোড ফিল্টার লজিক
  const freeEpisodes = episodes.filter(episode => {
      const parentShow = shows.find(s => s.id === episode.showId);
      return parentShow && parentShow.isFree === true;
  });

  return (
    // ব্যাকগ্রাউন্ড এখানে সেট করা হয়েছে
    <div className="min-h-screen bg-gradient-to-b from-[#1e1b4b] via-[#0f172a] to-[#000000] pb-20">
      
      <HeroSlider />
      
      <ChannelRow channels={channels} />

      <ContentSection 
        title="Latest Free Episodes" 
        data={freeEpisodes} 
        type="episode" 
      />

      <ContentSection 
        title="Kurulus Osman" 
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
