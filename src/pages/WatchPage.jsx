import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { episodes, shows } from '../data/dummyData';
import { ArrowLeft, Download } from 'lucide-react';
import CustomPlayer from '../components/CustomPlayer';

const WatchPage = () => {
  const { episodeId } = useParams();
  const episode = episodes.find(e => e.id === episodeId);
  
  if (!episode) return <div className="text-center p-10 text-white">Episode not found</div>;
  
  const show = shows.find(s => s.id === episode.showId);
  const upNext = episodes.filter(e => e.showId === episode.showId && e.id !== episodeId && e.season === episode.season);

  return (
    // ব্যাকগ্রাউন্ড এখানে সেট করা হয়েছে
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#000000] pb-20">
      
      <div className="p-4 flex items-center gap-2 text-white">
            <Link to={`/show/${show.id}`} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <ArrowLeft size={20} />
            </Link>
            <span className="font-semibold text-sm">{show.title}</span>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-4">
          <CustomPlayer src={episode.videoUrl} poster={episode.thumbnail} />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        
        <div className="flex justify-between items-start mt-2">
            <div>
                <h1 className="text-lg font-bold text-white leading-tight mb-1">{episode.title}</h1>
                <p className="text-xs text-gray-400">
                    S{episode.season} E{episode.episodeNumber} • {episode.date}
                </p>
            </div>
            
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1f1f1f] border border-gray-700 rounded-md active:scale-95 transition hover:bg-gray-800">
                <Download size={14} className="text-gray-300" />
                <span className="text-[10px] font-bold text-gray-300">HD</span>
            </button>
        </div>

        <hr className="border-gray-800 my-6" />

        <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wide opacity-80">Up Next</h3>
        <div className="space-y-3 pb-10">
            {upNext.map(ep => (
                <Link to={`/watch/${ep.id}`} key={ep.id} className="flex gap-3 bg-[#121212] p-2 rounded-lg border border-white/5 hover:border-white/20 transition group">
                    <div className="w-[120px] h-[70px] rounded overflow-hidden relative flex-shrink-0">
                        <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h4 className="font-semibold text-sm text-white line-clamp-1 group-hover:text-brand-pink transition">{ep.title}</h4>
                         <span className="text-xs text-gray-400 mt-1">S{ep.season} E{ep.episodeNumber}</span>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
