"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { Play, Mic, Youtube, Headphones, ArrowRight, Loader2, Share2, Copy, Check, Calendar, MonitorPlay } from "lucide-react";
import { ReactNode, useState, useEffect } from "react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import AudioVisualizer from "@/components/AudioVisualizer";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as any;

interface Episode {
  id?: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  tag: string;
  link?: string;
  host?: string;
  thumbnail?: string;
}

interface VideoPodcast {
  id: number;
  title: string;
  host: string | null;
  duration: string | null;
  date: string | null;
  link: string;
  thumbnail: string | null;
  description?: string;
}

interface Platform {
  name: string;
  icon: ReactNode;
  href: string;
}

interface CohenTVPageClientProps {
  episodes: Episode[];
  videoPodcasts: VideoPodcast[];
  platforms: Platform[];
}

export default function CohenTVPageClient({ episodes, videoPodcasts, platforms }: CohenTVPageClientProps) {
  const { playTrack, currentTrack, isPlaying: isAudioPlaying, pauseTrack } = useAudioPlayer();
  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoPodcast | null>(videoPodcasts[0] || null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShare = async () => {
    if (!activeVideo) return;
    try {
      if (navigator.share) {
        await navigator.share({
          title: activeVideo.title,
          text: `Watch ${activeVideo.title} on Cohen TV Podcast`,
          url: window.location.href,
        });
      } else {
        handleCopy();
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  if (!mounted) return null;

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0B0B0B 0%, #1a1200 60%, #0B0B0B 100%)" }}
        />
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(circle at 60% 50%, #D4AF37, transparent 65%)" }} />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-16 h-16 rounded-2xl bg-[#D4AF37] flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            <Play className="w-7 h-7 text-black fill-black" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Watch & Listen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
          >
            Cohen TV <span style={{ color: "#D4AF37" }}>Podcast</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-6 text-lg max-w-xl font-light" style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Raw conversations on business, wealth, real estate, and the mindset of high-performers — no fluff, no gatekeeping.
          </motion.p>

          {/* Platform links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-[#D4AF37]/30 text-sm font-medium transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                <span className="text-[#D4AF37]">{p.icon}</span>
                {p.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Podcast Section (Design like cohen-tv) */}
      {videoPodcasts.length > 0 && activeVideo && (
        <section className="py-20 px-4 md:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Video Player */}
              <div className="flex-1 lg:max-w-[70%]">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black mb-6 shadow-2xl border border-white/5">
                  <MediaController className="w-full h-full absolute inset-0">
                    <ReactPlayer
                      key={activeVideo.link}
                      src={activeVideo.link}
                      width="100%"
                      height="100%"
                      controls={true}
                      playing={isPlayingVideo}
                      onPlay={() => {
                        setIsPlayingVideo(true);
                        pauseTrack(); // Pause audio if video plays
                      }}
                      onPause={() => setIsPlayingVideo(false)}
                      slot="media"
                    />
                    <MediaControlBar slot="control-bar" className="w-full">
                      <MediaPlayButton />
                      <MediaSeekBackwardButton seekOffset={10} />
                      <MediaSeekForwardButton seekOffset={10} />
                      <MediaTimeRange />
                      <MediaTimeDisplay showDuration />
                      <MediaMuteButton />
                      <MediaVolumeRange />
                      <MediaPlaybackRateButton />
                      <MediaFullscreenButton />
                    </MediaControlBar>
                  </MediaController>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{activeVideo.title}</h2>
                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center overflow-hidden">
                      <span className="font-bold text-[#D4AF37]">{activeVideo.host?.charAt(0) || "A"}</span>
                    </div>
                    <div>
                      <p className="font-bold text-white">{activeVideo.host || "Adam Cohen"}</p>
                      <p className="text-xs text-white/50">{activeVideo.date ? String(activeVideo.date).split('T')[0] : "Recent Episode"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={handleShare} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium py-2 px-6 rounded-full transition-colors border border-white/10">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                    <button onClick={handleCopy} className={cn("flex items-center gap-2 text-sm font-medium py-2 px-6 rounded-full transition-all border", copied ? "bg-green-500/10 text-green-500 border-green-500/30" : "bg-white/5 hover:bg-white/10 text-white border-white/10")}>
                      {copied ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy Link</>}
                    </button>
                  </div>
                </div>
                {activeVideo.description && (
                  <p className="mt-6 text-white/60 font-light leading-relaxed">{activeVideo.description}</p>
                )}
              </div>

              {/* Video Sidebar (Queue) */}
              <div className="flex-1 lg:max-w-[30%] flex flex-col gap-4">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-2 flex items-center gap-2">
                  <MonitorPlay className="w-5 h-5" /> More Video Episodes
                </h3>
                <div className="flex flex-col gap-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {videoPodcasts.filter(v => v.id !== activeVideo.id).map(video => (
                    <div
                      key={video.id}
                      onClick={() => {
                        setActiveVideo(video);
                        setIsPlayingVideo(true);
                        pauseTrack();
                      }}
                      className="flex gap-3 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="relative w-32 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
                        {video.thumbnail ? (
                          <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-black/40">
                            <Play className="w-4 h-4 text-white/50" />
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                          <Play className="w-6 h-6 text-white fill-current" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-white line-clamp-2 leading-tight group-hover:text-[#D4AF37] transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-[10px] text-white/40 mt-1 uppercase tracking-wider">{video.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Audio Episodes List (Optional, can be kept or simplified) */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-2">Audio <span className="gold-gradient-text">Conversations</span></h2>
            <p className="text-white/40 font-light">Stream our raw audio episodes on the go.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`glass-card p-6 group cursor-pointer transition-all duration-500 ${currentTrack?.id === (ep.id || ep.number) ? 'border-primary ring-1 ring-primary/20' : 'hover:border-primary/30 border-white/10'}`}
                onClick={() => {
                  if (ep.link) {
                    setIsPlayingVideo(false);
                    playTrack({
                      id: ep.id || ep.number,
                      title: ep.title,
                      host: ep.host || "Adam Cohen",
                      link: ep.link,
                      thumbnail: ep.thumbnail
                    });
                  }
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] font-mono text-primary/60">EP.{ep.number}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{ep.tag}</span>
                    <span className="text-xs text-white/30">{ep.duration}</span>
                  </div>
                </div>
                <h3 className={`text-lg font-bold mb-2 transition-colors ${currentTrack?.id === (ep.id || ep.number) ? 'text-primary' : 'group-hover:text-primary'}`}>{ep.title}</h3>
                <p className="text-sm text-white/40 line-clamp-2 font-light">{ep.description}</p>

                <div className="mt-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentTrack?.id === (ep.id || ep.number) ? 'bg-primary text-black' : 'bg-primary/10 text-primary'}`}>
                    {currentTrack?.id === (ep.id || ep.number) && isAudioPlaying ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </div>
                  {currentTrack?.id === (ep.id || ep.number) && isAudioPlaying && <AudioVisualizer isPlaying={isAudioPlaying} count={8} />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
          <Mic className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Never Miss an <span className="gold-gradient-text">Episode</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            Subscribe on your platform of choice and get new episodes delivered every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="hero-btn inline-flex items-center gap-2 px-8">
              <Youtube className="w-4 h-4" /> Watch on YouTube
            </a>
            <Link href="/contact" className="hero-btn-outline inline-flex items-center gap-2 px-8">
              Suggest a Topic <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
