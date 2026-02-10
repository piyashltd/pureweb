// File: src/pages/Home.jsx
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ChannelRow from '../components/ChannelRow';
import ContentSection from '../components/ContentSection'; // Import the new component
import { channels, sliders, shows, episodes } from '../data/dummyData';

const Home = () => {
  // Filter logic
  const getShowsByChannel = (channelId) => shows.filter(s => s.channelId === channelId);
  
  // For "Latest Free Episodes", we just take the episodes array (or filter strictly free ones)
  const latestEpisodes = episodes; 

  return (
    <div className="pb-20">
      {/* 1. Hero Carousel */}
      <HeroSlider slides={sliders} />
      
      {/* 2. Channel Icons (Circular) */}
      <ChannelRow channels={channels} />

      {/* 3. Latest Free Episodes (Horizontal Scroll -> Click More -> Grid) */}
      <ContentSection 
        title="Latest Free Episodes" 
        data={latestEpisodes} 
        type="episode" 
      />
      {/* 4. Kurulus Osman / Toffee Section */}
      <ContentSection 
        title="Kurulus Osman" 
        data={getShowsByChannel('kurulus-osman')} 
        type="show" 
      />
      {/* 4. Zee Bangla Shows (Horizontal Scroll -> Click More -> Grid) */}
      <ContentSection 
        title="Zee Bangla" 
        data={getShowsByChannel('zee')} 
        type="show" 
      />

       {/* 5. Star Jalsha Shows */}
       <ContentSection 
        title="Star Jalsha" 
        data={getShowsByChannel('star')} 
        type="show" 
      />
      
      {/* 6. Sun Bangla Shows */}
      <ContentSection 
        title="Sun Bangla" 
        data={getShowsByChannel('sun')} 
        type="show" 
      />

    </div>
  );
};

export default Home;
