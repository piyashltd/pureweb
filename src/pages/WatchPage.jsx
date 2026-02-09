import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { episodes, shows } from '../data/dummyData';
import { ArrowLeft, Settings, Maximize, RotateCcw, RotateCw, Download, ChevronLeft } from 'lucide-react';

const WatchPage = () => {
  const { episodeId } = useParams();
  const episode = episodes.find(e => e.id === episodeId);
  
  if (!episode) return <div className="text-center p-10">Episode not found</div>;
  
  const show = shows.find(s => s.id === episode.showId);
  const upNext = episodes.filter(e => e.showId === episode.showId && e.id !== episodeId);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Video Player Section */}
      <div className="relative w-full aspect-video bg-black group">
        <video 
            src={episode.videoUrl} 
            poster={episode.thumbnail}
            controls
            className="w-full h-full object-contain"
        >
        </video>
        
        {/* Custom Header Overlay in Player */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Link to={`/show/${show.id}`} className="text-white flex items-center gap-2">
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back to {show.title}</span>
            </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h1 className="text-xl font-bold mb-1">EP{episode.episodeNumber}: {episode.title}</h1>
        <p className="text-sm text-gray-400 mb-4">{show.title}</p>
        
        <div className="flex gap-3 mb-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1e1e1e] rounded border border-gray-700 text-sm">
                <ChevronLeft size={16} /> Previous
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#2e1025] text-brand-pink border border-brand-pink/30 rounded text-sm ml-auto">
                <Download size={16} /> Download HD
            </button>
        </div>

        {/* Up Next */}
        <h3 className="text-brand-primary font-bold mb-3">Up Next</h3>
        <div className="space-y-3">
            {upNext.map(ep => (
                <Link to={`/watch/${ep.id}`} key={ep.id} className="flex gap-3 bg-[#121212] p-2 rounded-lg border border-white/5">
                    <div className="w-[100px] h-[60px] rounded overflow-hidden relative flex-shrink-0">
                        <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-xs text-gray-400 mb-0.5">{ep.date}</div>
                        <h4 className="font-semibold text-sm text-white line-clamp-1">{ep.title}</h4>
                        <div className="flex gap-2 text-[10px] text-gray-500 mt-1">
                             <span className="bg-gray-800 px-1 rounded">E{ep.episodeNumber}</span>
                             <span>{ep.duration}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
