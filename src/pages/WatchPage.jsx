import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { episodes, shows } from '../data/dummyData';
import { ArrowLeft, Download, Clock, Calendar, PlayCircle } from 'lucide-react';
import CustomPlayer from '../components/CustomPlayer';

const WatchPage = () => {
  const { episodeId } = useParams();
  const navigate = useNavigate();
  
  const episode = episodes.find(e => e.id === episodeId);
  
  if (!episode) return <div className="text-center p-10 text-white">Episode not found</div>;
  
  const show = shows.find(s => s.id === episode.showId);
  
  // ✅ ফিক্স: Up Next লিস্টে শুধুমাত্র *পরের* এপিসোডগুলো দেখাবে (আগেরগুলো নয়)
  const upNext = episodes
    .filter(e => e.showId === episode.showId && e.season === episode.season && e.episodeNumber > episode.episodeNumber)
    .sort((a, b) => a.episodeNumber - b.episodeNumber); // সিরিয়াল অনুযায়ী সাজানো

  useEffect(() => {
    // ✅ পেজে ঢুকলে প্লেয়ারের শুরুতে নিয়ে যাবে
    window.scrollTo(0, 0);

    if (show && episode) {
      const dynamicTitle = `${show.title} (${episode.date}) - Episode ${episode.episodeNumber}`;
      document.title = dynamicTitle;
    }
    return () => { document.title = "BengaliTvSerial.Net - Watch latest free episodes "; };
  }, [show, episode, episodeId]);

  // ✅ অটো প্লে লজিক
  const handleVideoEnd = () => {
      const nextEpisode = upNext[0]; // Up Next এর প্রথমটাই তো পরের এপিসোড
      if (nextEpisode) {
          navigate(`/watch/${nextEpisode.id}`);
      }
  };

  return (
    <div className="min-h-screen bg-transparent pb-20">
      <div className="p-4 flex items-center gap-3 text-white">
            <Link to={`/show/${show.id}`} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-md border border-white/5">
                <ArrowLeft size={20} />
            </Link>
            <span className="font-semibold text-sm drop-shadow-md tracking-wide">{show.title}</span>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-6">
          <CustomPlayer src={episode.videoUrl} poster={episode.thumbnail} onEnded={handleVideoEnd} />
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-start mt-2">
            <div className="space-y-1">
                <h1 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-md">{episode.title}</h1>
                <div className="flex items-center gap-3 text-xs text-gray-300 font-medium">
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-brand-primary"/> {episode.date}</span>
                    {episode.duration && (<span className="flex items-center gap-1"><Clock size={12} className="text-brand-primary"/> {episode.duration}</span>)}
                </div>
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-[#1f1f1f]/80 backdrop-blur-md border border-gray-700 rounded-lg active:scale-95 transition hover:bg-gray-800 hover:border-brand-primary/50 group">
                <Download size={16} className="text-gray-400 group-hover:text-brand-primary transition" />
                <span className="text-xs font-bold text-gray-300 group-hover:text-white"></span>
            </button>
        </div>

        <hr className="border-gray-800 my-6" />

        <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider opacity-90 border-l-4 border-brand-primary pl-3">Up Next</h3>
        
        {upNext.length > 0 ? (
            <div className="flex flex-col gap-4 pb-10">
                {upNext.map(ep => (
                    <Link to={`/watch/${ep.id}`} key={ep.id} className="flex gap-4 bg-[#121212]/40 backdrop-blur-md p-3 rounded-xl border border-white/5 hover:border-white/20 hover:bg-[#1a1a1a]/60 transition group relative overflow-hidden">
                        <div className="w-[140px] sm:w-[160px] h-[85px] rounded-lg overflow-hidden relative flex-shrink-0 shadow-lg bg-gray-900">
                            <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"><PlayCircle size={32} className="text-white/90 drop-shadow-lg" /></div>
                        </div>
                        <div className="flex flex-col justify-center min-w-0 flex-grow py-1">
                            <h4 className="font-bold text-sm text-white line-clamp-2 pr-2 group-hover:text-brand-primary transition leading-snug mb-1">{show.title} ({ep.date}) - Episode {ep.episodeNumber}</h4>
                            <span className="text-[11px] text-gray-500 font-medium truncate">Season {ep.season}</span>
                            {ep.duration && (<div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium mt-auto pt-1"><Clock size={10} className="text-brand-primary" /><span>{ep.duration}</span></div>)}
                        </div>
                    </Link>
                ))}
            </div>
        ) : (
            <div className="text-gray-500 text-sm italic">No more episodes in this season.</div>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
