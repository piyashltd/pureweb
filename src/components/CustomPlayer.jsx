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
    const [isPlaying, setIsPlaying] = useState(false); // অটো প্লে-এর জন্য ডিফল্ট true করা হবে useEffect এ
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    
    // ✅ কন্ট্রোল টগল স্টেট
    const [showControls, setShowControls] = useState(true);

    // Quality States
    const [qualities, setQualities] = useState([]);
    const [currentQuality, setCurrentQuality] = useState(-1);
    const [showQualityMenu, setShowQualityMenu] = useState(false);

    // 1. HLS & Video Setup + AUTO PLAY
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
                
                // ✅ AUTO PLAY Logic for HLS
                video.play().then(() => {
                    setIsPlaying(true);
                }).catch((error) => {
                    console.log("Autoplay blocked, waiting for user interaction", error);
                    setIsPlaying(false);
                });
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
            // ✅ AUTO PLAY Logic for Safari
            video.addEventListener('loadedmetadata', () => {
                 video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            });
        }

        const updateTime = () => {
            setCurrentTime(video.currentTime);
            setDuration(video.duration || 0);
            setProgress((video.currentTime / video.duration) * 100 || 0);
        };

        video.addEventListener('timeupdate', updateTime);
        
        // মাউস নড়াচড়া না করলে ৩ সেকেন্ড পর হাইড হবে
        startHideTimer();

        return () => {
            if (hls) hls.destroy();
            video.removeEventListener('timeupdate', updateTime);
            clearTimeout(controlsTimeoutRef.current);
        };
    }, [src]);

    // --- Controls Visibility Logic ---
    
    // টাইমার রিসেট ফাংশন
    const startHideTimer = () => {
        clearTimeout(controlsTimeoutRef.current);
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying && !showQualityMenu) {
                setShowControls(false);
            }
        }, 3000); // ৩ সেকেন্ড পর হাইড
    };

    // ✅ স্ক্রিনে ক্লিক করলে Show/Hide টগল হবে (Play/Pause হবে না)
    const handleScreenClick = () => {
        setShowControls(prev => !prev);
        if (!showControls) {
            startHideTimer(); // যদি শো করি, তাহলে টাইমার চালু করো
        }
    };

    // মাউস মুভ করলে কন্ট্রোল দেখাবে
    const handleMouseMove = () => {
        if (!showControls) setShowControls(true);
        startHideTimer();
    };

    // --- Player Actions ---

    const togglePlay = (e) => {
        // e.stopPropagation() দেওয়া হয়েছে যাতে প্যারেন্ট div এর click event ফায়ার না হয়
        e?.stopPropagation(); 
        
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
            startHideTimer();
        } else {
            video.pause();
            setIsPlaying(false);
            setShowControls(true); // পজ করলে কন্ট্রোল সবসময় দেখাবে
            clearTimeout(controlsTimeoutRef.current);
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    const skip = (amount, e) => {
        e?.stopPropagation();
        videoRef.current.currentTime += amount;
        setShowControls(true);
        startHideTimer();
    };

    const handleSeek = (e) => {
        e.stopPropagation(); // স্লাইডার টানলে যাতে স্ক্রিন ক্লিক না হয়
        const manualChange = Number(e.target.value);
        videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange;
        setProgress(manualChange);
        startHideTimer();
    };

    const toggleFullScreen = async (e) => {
        e.stopPropagation();
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
    const toggleQualityMenu = (e) => {
        e.stopPropagation();
        setShowQualityMenu(!showQualityMenu);
    };

    const changeQuality = (qualityId) => {
        if (hlsRef.current) {
            hlsRef.current.currentLevel = qualityId;
            setCurrentQuality(qualityId);
            setShowQualityMenu(false);
            startHideTimer();
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
            // ✅ মেইন ক্লিক হ্যান্ডেলার: এটা শুধু কন্ট্রোল Show/Hide করবে
            onClick={handleScreenClick} 
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isPlaying && setShowControls(false)}
            className={`relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group select-none border border-white/10 ${showControls ? 'cursor-default' : 'cursor-none'}`}
        >
            <video 
                ref={videoRef} 
                poster={poster}
                className="w-full h-full object-contain"
                autoPlay // ✅ HTML attribute for autoplay
                playsInline
            />

            {/* Quality Menu Overlay */}
            {showQualityMenu && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl flex flex-wrap justify-center gap-3 max-w-[80%]" onClick={(e) => e.stopPropagation()}>
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

            {/* Controls Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-between transition-opacity duration-300 ${showControls ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                
                {/* Center Controls (Play/Pause/Skip) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
                    <button onClick={(e) => skip(-10, e)} className="text-white/70 hover:text-white hover:scale-110 transition p-2 bg-black/20 rounded-full backdrop-blur-sm">
                        <RotateCcw size={24} />
                    </button>

                    <button 
                        onClick={togglePlay} // ✅ এই বাটনে ক্লিক করলে প্লে/পজ হবে
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition shadow-lg"
                    >   
                        {isPlaying ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" className="ml-1" />}
                    </button>

                    <button onClick={(e) => skip(10, e)} className="text-white/70 hover:text-white hover:scale-110 transition p-2 bg-black/20 rounded-full backdrop-blur-sm">
                        <RotateCw size={24} />
                    </button>
                </div>

                {/* Bottom Controls */}
                {/* e.stopPropagation() দেওয়া হয়েছে যাতে কন্ট্রোলার বারে ক্লিক করলে স্ক্রিন হাইড না হয়ে যায় */}
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
