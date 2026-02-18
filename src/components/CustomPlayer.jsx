import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Maximize, Settings, Minimize } from 'lucide-react';

const CustomPlayer = ({ src, poster, onEnded }) => {
    const videoRef = useRef(null);
    const wrapperRef = useRef(null);
    const hlsRef = useRef(null);
    const controlsTimeoutRef = useRef(null);
    const isDragging = useRef(false); // New Ref for fix

    // States
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [qualities, setQualities] = useState([]);
    const [currentQuality, setCurrentQuality] = useState(-1);
    const [showQualityMenu, setShowQualityMenu] = useState(false);

    // Fullscreen Logic
    useEffect(() => {
        const handleFullscreenChange = () => {
            const fullscreenElement = document.fullscreenElement || 
                                      document.webkitFullscreenElement || 
                                      document.mozFullScreenElement || 
                                      document.msFullscreenElement;
            setIsFullscreen(!!fullscreenElement);
            if (!!fullscreenElement) document.body.classList.add('video-fullscreen-mode');
            else document.body.classList.remove('video-fullscreen-mode');
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
            document.body.classList.remove('video-fullscreen-mode');
        };
    }, []);

    // Media Session
    useEffect(() => {
        if ('mediaSession' in navigator) {
            const detectedTitle = document.querySelector('h1')?.innerText || document.title || "Video";
            navigator.mediaSession.metadata = new MediaMetadata({
                title: detectedTitle,
                artwork: [{ src: poster, sizes: '512x512', type: 'image/jpeg' }]
            });
            navigator.mediaSession.setActionHandler('play', () => videoRef.current?.play());
            navigator.mediaSession.setActionHandler('pause', () => videoRef.current?.pause());
            navigator.mediaSession.setActionHandler('seekbackward', () => skip(-10));
            navigator.mediaSession.setActionHandler('seekforward', () => skip(10));
        }
    }, [src, poster]);

    // Video Logic
    useEffect(() => {
        const video = videoRef.current;
        let hls;

        setIsPlaying(false);
        setQualities([]);
        setCurrentQuality(-1);
        setShowQualityMenu(false);
        // Reset progress on new video load
        setProgress(0);
        setCurrentTime(0);

        if (!src) return;

        const isHLS = src.includes('.m3u8') || src.includes('application/x-mpegURL');

        const playVideo = () => {
            video.play().then(() => {
                setIsPlaying(true);
                startHideTimer();
            }).catch((error) => {
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
            });
        };

        if (isHLS && Hls.isSupported()) {
            hls = new Hls();
            hlsRef.current = hls;
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
                const levels = data.levels.map((level, index) => ({
                    id: index, height: level.height, bitrate: level.bitrate
                })).reverse();
                setQualities(levels);
                playVideo();
            });
        } else if (isHLS && video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
            video.addEventListener('loadedmetadata', playVideo);
        } else {
            video.src = src;
            video.load();
            video.addEventListener('loadedmetadata', playVideo);
        }

        const updateTime = () => {
            // FIX: Don't update progress if user is dragging
            if (isDragging.current) return;

            setCurrentTime(video.currentTime);
            setDuration(video.duration || 0);
            setProgress((video.currentTime / video.duration) * 100 || 0);
        };

        const handleVideoEnd = () => {
            setIsPlaying(false);
            if (onEnded) onEnded();
        };

        video.addEventListener('timeupdate', updateTime);
        video.addEventListener('ended', handleVideoEnd);

        return () => {
            if (hls) hls.destroy();
            video.removeEventListener('timeupdate', updateTime);
            video.removeEventListener('ended', handleVideoEnd);
            video.removeEventListener('loadedmetadata', playVideo);
            clearTimeout(controlsTimeoutRef.current);
        };
    }, [src]);

    // Controls Logic
    const startHideTimer = () => {
        clearTimeout(controlsTimeoutRef.current);
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying && !showQualityMenu) setShowControls(false);
        }, 3000);
    };

    const handleMouseMove = () => { if (showControls) startHideTimer(); };
    const handleScreenClick = () => { setShowControls(prev => !prev); if (!showControls) startHideTimer(); };

    const togglePlay = (e) => {
        e?.stopPropagation();
        const video = videoRef.current;
        if (video.paused) { 
            video.play(); 
            setIsPlaying(true); 
            startHideTimer(); 
        } else { 
            video.pause(); 
            setIsPlaying(false); 
            setShowControls(true); 
            clearTimeout(controlsTimeoutRef.current); 
        }
    };

    const skip = (amount, e) => {
        e?.stopPropagation();
        if (videoRef.current) { 
            videoRef.current.currentTime += amount; 
            setShowControls(true); 
            startHideTimer(); 
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation(); 
        videoRef.current.muted = !videoRef.current.muted; 
        setIsMuted(videoRef.current.muted);
    };

    // --- FIX: UPDATED SEEK LOGIC START ---
    const handleSeekMouseDown = () => {
        isDragging.current = true;
    };

    const handleSeekChange = (e) => {
        const manualChange = Number(e.target.value);
        setProgress(manualChange); // Update visual slider instantly
        
        // Update the time numbers instantly while dragging
        if (duration) {
            setCurrentTime((duration / 100) * manualChange);
        }
    };

    const handleSeekMouseUp = (e) => {
        const manualChange = Number(e.target.value);
        if (videoRef.current && videoRef.current.duration) {
            videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange;
        }
        
        // Slight delay before re-enabling auto-update to prevent jumping
        setTimeout(() => {
            isDragging.current = false;
        }, 100);
        
        startHideTimer();
    };
    // --- FIX: UPDATED SEEK LOGIC END ---

    const toggleFullScreen = async (e) => {
        e.stopPropagation();
        if (!document.fullscreenElement) {
            await wrapperRef.current.requestFullscreen();
            if (window.screen.orientation && window.screen.orientation.lock) { 
                window.screen.orientation.lock('landscape').catch(() => {}); 
            }
        } else {
            document.exitFullscreen();
        }
    };

    const toggleQualityMenu = (e) => { 
        e.stopPropagation(); 
        if (qualities.length > 0) setShowQualityMenu(!showQualityMenu); 
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
        if (!time || isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div 
            ref={wrapperRef} 
            onClick={handleScreenClick} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={() => isPlaying && setShowControls(false)} 
            className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl group select-none border border-white/10" 
            style={{ cursor: showControls ? 'default' : 'none' }}
        >
            <video ref={videoRef} poster={poster} className="w-full h-full object-contain" playsInline />

            {showQualityMenu && qualities.length > 0 && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl flex flex-wrap justify-center gap-3 max-w-[80%]" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => changeQuality(-1)} className={`px-5 py-2 rounded-lg text-sm font-bold tracking-wide transition transform hover:scale-105 ${currentQuality === -1 ? 'bg-brand-primary text-white shadow-lg' : 'bg-black/40 text-gray-300 hover:bg-white/20'}`}>AUTO</button>
                        {qualities.map((q) => (
                            <button key={q.id} onClick={() => changeQuality(q.id)} className={`px-5 py-2 rounded-lg text-sm font-bold tracking-wide transition transform hover:scale-105 ${currentQuality === q.id ? 'bg-brand-primary text-white shadow-lg' : 'bg-black/40 text-gray-300 hover:bg-white/20'}`}>{q.height}p</button>
                        ))}
                    </div>
                </div>
            )}

            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-between transition-opacity duration-300 ${showControls ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
                    <button onClick={(e) => skip(-10, e)} className="text-white/70 hover:text-white hover:scale-110 transition p-2 bg-black/20 rounded-full backdrop-blur-sm"><RotateCcw size={24} /></button>
                    <button onClick={togglePlay} className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition shadow-lg">{isPlaying ? <Pause size={32} fill="white" /> : <Play size={32} fill="white" className="ml-1" />}</button>
                    <button onClick={(e) => skip(10, e)} className="text-white/70 hover:text-white hover:scale-110 transition p-2 bg-black/20 rounded-full backdrop-blur-sm"><RotateCw size={24} /></button>
                </div>
                <div className="mt-auto p-4 w-full bg-gradient-to-t from-black/80 to-transparent" onClick={(e) => e.stopPropagation()}>
                    <div className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer group/progress relative">
                        <div className="absolute top-0 left-0 h-full bg-brand-primary rounded-full" style={{ width: `${progress}%` }} />
                        
                        {/* FIX: UPDATED INPUT RANGE */}
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={progress} 
                            onMouseDown={handleSeekMouseDown}
                            onTouchStart={handleSeekMouseDown}
                            onChange={handleSeekChange}
                            onMouseUp={handleSeekMouseUp}
                            onTouchEnd={handleSeekMouseUp}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                        />
                        
                        <div className="w-3.5 h-3.5 bg-white rounded-full absolute top-1/2 -translate-y-1/2 shadow-lg opacity-0 group-hover/progress:opacity-100 transition scale-100 group-hover/progress:scale-125" style={{ left: `${progress}%`, marginLeft: '-7px' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <button onClick={toggleMute} className="text-white/80 hover:text-white transition">{isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}</button>
                            <span className="text-xs font-semibold text-gray-200 tracking-wide">{formatTime(currentTime)} / {formatTime(duration)}</span>
                        </div>
                        <div className="flex items-center gap-5">
                            {qualities.length > 0 && (
                                <button onClick={toggleQualityMenu} className={`text-white/80 hover:text-white transition transform ${showQualityMenu ? 'rotate-90 text-brand-primary' : ''}`}><Settings size={22} /></button>
                            )}
                            <button onClick={toggleFullScreen} className="text-white/80 hover:text-white transition hover:scale-110">{isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomPlayer;
