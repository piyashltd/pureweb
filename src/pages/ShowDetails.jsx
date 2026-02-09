import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { shows, episodes } from '../data/dummyData';
import ShowCard from '../components/ShowCard';

const ShowDetails = () => {
  const { id } = useParams();
  const show = shows.find(s => s.id === id);
  const showEpisodes = episodes.filter(e => e.showId === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!show) return <div className="text-center p-10">Show not found</div>;

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-[400px]">
        <img src={show.poster} alt={show.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
        <div className="absolute bottom-6 left-4 right-4 text-center">
            {show.badges.includes('') && (
                <span className="bg-brand-pink text-white text-[10px] font-bold px-2 py-0.5 rounded-sm mb-2 inline-block"></span>
            )}
            <h1 className="text-3xl font-bold text-white mb-2">{show.title}</h1>
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">{show.description}</p>
            <div className="text-gray-400 text-xs mb-4">Total Episodes: {showEpisodes.length}</div>
        </div>
      </div>

      {/* Episodes List */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Episodes</h3>
            <span className="text-sm text-gray-400">{showEpisodes.length} episodes</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {showEpisodes.map(ep => (
                <Link to={`/watch/${ep.id}`} key={ep.id} className="flex gap-3 bg-[#1e1e1e] rounded-lg overflow-hidden group">
                    <div className="w-[120px] h-[80px] flex-shrink-0 relative">
                        <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition">
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                <div className="border-l-4 border-l-white border-y-4 border-y-transparent ml-0.5 h-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col justify-center">
                        <h4 className="font-semibold text-sm line-clamp-1 group-hover:text-brand-pink transition">{ep.title}</h4>
                        <span className="text-xs text-gray-500">E{ep.episodeNumber} • {ep.date}</span>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
