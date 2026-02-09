import React from 'react';
import { Link } from 'react-router-dom';

const ChannelRow = ({ channels }) => {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-6 no-scrollbar">
      {channels.map((channel) => (
        <Link to={`/channel/${channel.id}`} key={channel.id} className="flex flex-col items-center gap-2 min-w-[70px]">
          <div className="w-[70px] h-[70px] rounded-full p-1 border-2 border-transparent hover:border-brand-pink transition-all duration-300">
             <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                 <img src={channel.logo} alt={channel.name} className="w-full h-full object-contain p-1" />
             </div>
          </div>
          <span className="text-xs text-gray-400 text-center w-full truncate">{channel.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default ChannelRow;
