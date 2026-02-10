// File: src/components/CustomPlayer.jsx
import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Maximize, Settings, Minimize } from 'lucide-react';

const CustomPlayer = ({ src, poster }) => {
    const videoRef = useRef(null);
    const wrapperRef = useRef(null);
    const hlsRef = useRef(null);
    const controlsTimeoutRef = useRef(null);

    // States
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    
    // ✅ নতুন স্টেট: কন্ট্রোল দেখাবে কি না
    const [showControls, setShowControls] = useState(true);

    // Quality States
    const [qualities, setQualities] = useState([]);
    const [currentQuality, setCurrentQuality] = useState(-1);
    const [showQualityMenu, setShowQualityMenu] = useState(false);

    // 1. HLS & Video Setup
    useEffect(() => {
        const video = videoRef.current;
        let hls;

        if (Hls.isSupported() && src) {
            hls = new Hls();
            hlsRef.current = hls;
            hls.loadSource(src);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                const levels = data.levels.map((level, index) => ({
                    id: index,
                    height: level.height,
                    bitrate: level.bitrate
                })).reverse();
                setQualities(levels);
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
        }

        const updateTime = () => {
            setCurrentTime(video.currentTime);
            setDuration(video.duration || 0);
            setProgress((video.currentTime / video.duration) * 100 || 0);
        };

        video.addEventListener('timeupdate', updateTime);
        return () => {
            if (hls) hls.destroy();
            video.removeEventListener('timeupdate', updateTime);
            clearTimeout(controlsTimeoutRef.current);
        };
    }, [src]);

    // ✅ 2. Controls Visibility Logic (Auto Hide)
    const handleUserActivity = () => {
        // ইউজার নড়াচড়া করলে কন্ট্রোল দেখাও
        setShowControls(true);
        
        // আগের টাইমার ক্লিয়ার করো
        clearTimeout(controlsTimeoutRef.current);

        // যদি ভিডিও চলতে থাকে এবং কোয়ালিটি মেনু ওপেন না থাকে, তবে ৩ সেকেন্ড পর হাইড করো
        if (isPlaying && !showQualityMenu) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }
    };

    // প্লে/পজ বা কোয়ালিটি মেনু পাল্টালে টাইমার রিসেট হবে
    useEffect(() => {
        handleUserActivity();
    }, [isPlaying, showQualityMenu]);


    // --- Actions ---
    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
            setShowControls(true); // পজ করলে কন্ট্রোল ফিক্সড থাকবে
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    const skip = (amount) => {
        videoRef.current.currentTime += amount;
        handleUserActivity(); // স্কিপ করলে কন্ট্রোল ভেসে উঠবে
    };

    const handleSeek = (e) => {
        const manualChange = Number(e.target.value);
        videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange;
        setProgress(manualChange);
        handleUserActivity();
    };

    const toggleFullScreen = async () => {
        if (!document.fullscreenElement) {
            await wrapperRef.current.requestFullscreen();
            setIsFullscreen(true);
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape').catch(() => {});
            }
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // --- Quality Logic ---
    const toggleQualityMenu = () => {
        setShowQualityMenu(!showQualityMenu);
    };

    const changeQuality = (qualityId) => {
        if (hlsRef.current) {
            hlsRef.current.currentLevel = qualityId;
            setCurrentQuality(qualityId);
            setShowQualityMenu(false);
        }
    };

    const formatTime = (time) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div 
            ref={wrapperRef} 
            // ✅ মাউস মুভ বা ক্লিক করলে handleUserActivity কল হবে
            onMouseMove={handleUserActivity}
            onClick={handleUserActivity}
            onMouseLeave={() => isPlaying && setShowControls(false)}
            className={`relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group select-none border border-white/10 ${showControls ? 'cursor-default' : 'cursor-none'}`}
        >
            <video 
                ref={videoRef} 
                poster={poster}
                className="w-full h-full object-contain" 
                onClick={togglePlay}
            />

            {/* Quality Menu Overlay */}
            {showQualityMenu && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl flex flex-wrap justify-center gap-3 max-w-[80%]">
                        <button 
                            onClick={() => changeQuality(-1)}
                            className={`px-5 py-2 rounded-lg text-sm font-bold tracking-wide transition transform hover:scale-105 ${currentQuality === -1 ? 'bg-brand-primary text-white shadow-lg' : 'bg-black/40 text-gray-300 hover:bg-white/20'}`}
                        >
                            AUTO
                        </button>
                        {qualities.map((q) => (
                            <button 
                                key={q.id}
                                onClick={() => changeQuality(q.id)}
                                className={`px-5 py-2 rounded-lg text-sm font-bold tracking-wide transition transform hover:scale-105 ${currentQuality === q.id ? 'bg-brand-primary text-white shadow-lg' : 'bg-black/40 text-gray-300 hover:bg-white/20'}`}
                            >
                                {q.height}p
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* ✅ Controls Overlay: showControls স্টেট এর উপর ভিত্তি করে অপাসিটি চেইঞ্জ হবে */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-between transition-opacity duration-300 ${showControls ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                
                {/* Center Controls (Play/Pause/Skip) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
                    <button onClick={(e) => { e.stopPropagation(); skip(-10); }} className="text-white/70 hover:text-white hover:scale-110 transition p-2 bg-black/20 rounded-full backdrop-blur-sm">
                        <RotateCcw size={24} />
                    </button>

                    <button 
                        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition shadow-lg"
                    >   
                        {isPlaying ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" className="ml-1" />}
                    </button>

                    <button onClick={(e) => { e.stopPropagation(); skip(10); }} className="text-white/70 hover:text-white hover:scale-110 transition p-2 bg-black/20 rounded-full backdrop-blur-sm">
                        <RotateCw size={24} />
                    </button>
                </div>

                {/* Bottom Controls */}
                <div className="mt-auto p-4 w-full bg-gradient-to-t from-black/80 to-transparent" onClick={(e) => e.stopPropagation()}>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer group/progress relative">
                         <div 
                            className="absolute top-0 left-0 h-full bg-brand-primary rounded-full" 
                            style={{ width: `${progress}%` }}
                         />
                         <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={progress} 
                            onChange={handleSeek}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                         />
                         <div className="w-3.5 h-3.5 bg-white rounded-full absolute top-1/2 -translate-y-1/2 shadow-lg opacity-0 group-hover/progress:opacity-100 transition scale-100 group-hover/progress:scale-125" style={{ left: `${progress}%`, marginLeft: '-7px' }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            {/* Volume Toggle */}
                            <button onClick={toggleMute} className="text-white/80 hover:text-white transition">
                                {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
                            </button>
                            
                            <span className="text-xs font-semibold text-gray-200 tracking-wide">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>

                        <div className="flex items-center gap-5">
                            {/* Quality Settings */}
                            <button 
                                onClick={toggleQualityMenu} 
                                className={`text-white/80 hover:text-white transition transform ${showQualityMenu ? 'rotate-90 text-brand-primary' : ''}`}
                            >
                                <Settings size={22} />
                            </button>
                            
                            {/* Fullscreen */}
                            <button onClick={toggleFullScreen} className="text-white/80 hover:text-white transition hover:scale-110">
                                {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomPlayer;
