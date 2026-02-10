// File: src/pages/ChannelDetails.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { shows, channels } from '../data/dummyData';
import ShowCard from '../components/ShowCard';
import { FolderOpen, ArrowLeft } from 'lucide-react';

const ChannelDetails = () => {
  const { id } = useParams();

  // ১. চ্যানেল ইনফো খুঁজে বের করা
  const channel = channels.find(c => c.id === id);
  
  // ২. এই চ্যানেলের সব শো ফিল্টার করা
  const channelShows = shows.filter(s => s.channelId === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!channel) return <div className="text-center p-10 text-white">Channel not found</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 pb-20">
      {/* Header Section (Folder Style) */}
      <div className="pt-6 pb-4">
         {/* Back Button (Optional) */}
         <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
         </Link>

         <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            {/* Folder Icon */}
            <FolderOpen className="text-brand-primary" size={28} />
            
            {/* Channel Name */}
            <h1 className="text-2xl font-bold text-white uppercase tracking-wide">
                {channel.name}
            </h1>
            
            {/* Show Count */}
            <span className="text-sm text-gray-500 mt-1">
                ({channelShows.length} shows)
            </span>
         </div>
      </div>

      {/* Shows Grid */}
      {channelShows.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {channelShows.map(show => (
                <div key={show.id} className="w-full">
                    <ShowCard show={show} isLandscape={false} isGrid={true} />
                </div>
            ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
            <p>No shows available for this channel yet.</p>
        </div>
      )}
    </div>
  );
};

export default ChannelDetails;
