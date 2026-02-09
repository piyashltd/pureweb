import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ChannelRow from '../components/ChannelRow';
import ShowCard from '../components/ShowCard';
import { channels, sliders, shows } from '../data/dummyData';
import { ChevronRight } from 'lucide-react';

const Home = () => {
  // Helper to get shows by channel
  const getShowsByChannel = (channelId) => shows.filter(s => s.channelId === channelId);
  const freeShows = shows.filter(s => s.isFree);

  return (
    <div className="pb-10">
      <HeroSlider slides={sliders} />
      
      <ChannelRow channels={channels} />

      {/* Latest Free Episodes Section */}
      <section className="mt-4">
        <div className="flex justify-between items-center px-4 mb-3">
          <h2 className="text-lg font-bold text-white">Latest Free Episodes</h2>
          <button className="text-xs text-gray-400 flex items-center hover:text-white">
            More <ChevronRight size={14} />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar">
          {freeShows.map(show => (
            <ShowCard key={show.id} show={show} isLandscape={true} />
          ))}
        </div>
      </section>

      {/* Zee Bangla Section */}
      <section className="mt-6">
        <div className="flex justify-between items-center px-4 mb-3">
          <h2 className="text-lg font-bold text-white uppercase">ZEE BANGLA</h2>
          <button className="text-xs text-gray-400 flex items-center hover:text-white">
            More <ChevronRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
           {getShowsByChannel('zee').map(show => (
             <ShowCard key={show.id} show={show} isLandscape={false} />
           ))}
        </div>
      </section>

       {/* Star Jalsha Section */}
       <section className="mt-8">
        <div className="flex justify-between items-center px-4 mb-3">
          <h2 className="text-lg font-bold text-white uppercase">STAR JALSHA</h2>
          <button className="text-xs text-gray-400 flex items-center hover:text-white">
            More <ChevronRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
           {getShowsByChannel('star').map(show => (
             <ShowCard key={show.id} show={show} isLandscape={false} />
           ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
