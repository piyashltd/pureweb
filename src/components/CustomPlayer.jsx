// File: src/components/CustomPlayer.jsx
import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Play, Pause, RotateCcw, RotateCw, Volume2, Maximize, Settings } from 'lucide-react';

const CustomPlayer = ({ src, poster }) => {
    const videoRef = useRef(null);
    const wrapperRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
        }

        const updateTime = () => {
            setCurrentTime(video.currentTime);
            setDuration(video.duration || 0);
            setProgress((video.currentTime / video.duration) * 100);
        };

        video.addEventListener('timeupdate', updateTime);
        return () => video.removeEventListener('timeupdate', updateTime);
    }, [src]);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const skip = (amount) => {
        videoRef.current.currentTime += amount;
    };

    const handleSeek = (e) => {
        const manualChange = Number(e.target.value);
        videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange;
        setProgress(manualChange);
    };

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            wrapperRef.current.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div ref={wrapperRef} className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group select-none">
            <video 
                ref={videoRef} 
                poster={poster}
                className="w-full h-full object-contain cursor-pointer" 
                onClick={togglePlay}
            />

            {/* Controls Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                
                {/* Center Controls */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
                    <button onClick={() => skip(-10)} className="text-white/80 hover:text-white hover:scale-110 transition">
                        <RotateCcw size={28} />
                    </button>

                    <button 
                        onClick={togglePlay}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/50 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition relative overflow-hidden"
                    >   
                        {isPlaying ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" className="ml-1" />}
                        {/* Ripple effect can be added here with CSS animation if needed */}
                    </button>

                    <button onClick={() => skip(10)} className="text-white/80 hover:text-white hover:scale-110 transition">
                        <RotateCw size={28} />
                    </button>
                </div>

                {/* Bottom Controls */}
                <div className="mt-auto p-4 w-full">
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer group/progress relative">
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
                         <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 -translate-y-1/2 shadow-md opacity-0 group-hover/progress:opacity-100 transition" style={{ left: `${progress}%`, marginLeft: '-6px' }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <button className="text-white/80 hover:text-white"><Volume2 size={20} /></button>
                            <span className="text-xs font-medium text-white/90">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="text-white/80 hover:text-white"><Settings size={20} /></button>
                            <button onClick={toggleFullScreen} className="text-white/80 hover:text-white"><Maximize size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomPlayer;
