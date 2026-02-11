// File: src/pages/ChannelDetails.jsx
import React, { useEffect } from 'react';
import { useParams, Link, useLocation, useNavigationType } from 'react-router-dom'; // ✅ হুক ইম্পোর্ট
import { shows, channels } from '../data/dummyData';
import ShowCard from '../components/ShowCard';
import { FolderOpen, ArrowLeft } from 'lucide-react';

const ChannelDetails = () => {
  const { id } = useParams();
  
  // ✅ স্মার্ট স্ক্রল লজিক
  const location = useLocation();
  const navType = useNavigationType();

  const channel = channels.find(c => c.id === id);
  const channelShows = shows.filter(s => s.channelId === id);

  useEffect(() => {
    // শুধুমাত্র নতুন করে ঢুকলে (PUSH) স্ক্রল টপে যাবে
    // ব্যাক করে আসলে (POP) আগের জায়গায় থাকবে
    if (navType !== 'POP') {
        window.scrollTo(0, 0);
    }
  }, [location.pathname, navType, id]);

  if (!channel) return <div className="text-center p-10 text-white">Channel not found</div>;

  return (
    <div className="min-h-screen bg-transparent px-4 pb-20">
      
      {/* Header Section */}
      <div className="pt-6 pb-4">
         <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
         </Link>

         <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <FolderOpen className="text-brand-primary" size={28} />
            <h1 className="text-2xl font-bold text-white uppercase tracking-wide drop-shadow-md">
                {channel.name}
            </h1>
            <span className="text-sm text-gray-400 mt-1 font-medium">
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
