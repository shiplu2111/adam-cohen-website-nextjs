"use client";

import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { Play, Pause, X, Volume2, VolumeX } from "lucide-react";
import { incrementPodcastPlays } from "@/lib/cms";
import AudioVisualizer from "@/components/AudioVisualizer";

interface AudioTrack {
  id: string;
  title: string;
  host: string;
  link: string;
  thumbnail?: string;
}

interface AudioPlayerContextType {
  currentTrack: AudioTrack | null;
  isPlaying: boolean;
  playTrack: (track: AudioTrack) => void;
  togglePlay: () => void;
  pauseTrack: () => void;
  closePlayer: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create the audio element once on mount
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.onended = () => setIsPlaying(false);
    audioRef.current.ontimeupdate = () => {
      if (audioRef.current) setProgress(audioRef.current.currentTime);
    };
    audioRef.current.onloadedmetadata = () => {
      if (audioRef.current) setDuration(audioRef.current.duration);
    };
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (!currentTrack || !audioRef.current) return;
    audioRef.current.src = currentTrack.link;
    audioRef.current.load();
    audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  }, [currentTrack]);

  const playTrack = (track: AudioTrack) => {
    if (currentTrack?.id === track.id) {
      togglePlay();
    } else {
      setCurrentTrack(track);
      incrementPodcastPlays(track.id);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseTrack = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentTrack(null);
    setIsPlaying(false);
  };


  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <AudioPlayerContext.Provider value={{ currentTrack, isPlaying, playTrack, togglePlay, pauseTrack, closePlayer }}>
      {children}
      
      {/* audio element is managed imperatively via useRef */}

      {currentTrack && (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-[#0B0B0B] border-t border-[#D4AF37]/20 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            
            <div className="flex items-center gap-4 w-1/4 min-w-[200px]">
              <div className="w-12 h-12 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                {currentTrack.thumbnail ? (
                  <img src={currentTrack.thumbnail} alt={currentTrack.title} className="w-full h-full object-cover" />
                ) : (
                   <span className="text-[#D4AF37] font-bold">AC</span>
                )}
              </div>
              <div className="flex flex-col min-w-0">
                <p className="text-white text-sm font-bold truncate">{currentTrack.title}</p>
                <p className="text-white/50 text-xs truncate">Host: {currentTrack.host}</p>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center max-w-2xl px-4">
              <div className="flex items-center gap-6 mb-2">
                <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center hover:scale-105 transition-transform text-[#0B0B0B]">
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                </button>
                <AudioVisualizer isPlaying={isPlaying} />
              </div>
              <div className="w-full flex items-center gap-3 text-xs font-mono text-white/50">
                <span>{formatTime(progress)}</span>
                <div 
                  className="flex-1 h-1.5 bg-white/10 rounded-full cursor-pointer relative"
                  onClick={(e) => {
                    if (audioRef.current) {
                      const bounds = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - bounds.left;
                      const percentage = x / bounds.width;
                      audioRef.current.currentTime = percentage * duration;
                    }
                  }}
                >
                  <div className="absolute top-0 left-0 h-full bg-[#D4AF37] rounded-full" style={{ width: `${duration > 0 ? (progress / duration) * 100 : 0}%` }} />
                </div>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 w-1/4 min-w-[150px]">
              <button onClick={() => {
                if (audioRef.current) {
                  audioRef.current.muted = !muted;
                  setMuted(!muted);
                }
              }} className="text-white/50 hover:text-white transition-colors">
                {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button onClick={closePlayer} className="text-white/50 hover:text-white transition-colors p-2">
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");
  }
  return context;
}
