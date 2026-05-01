"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { Play, Mic, Youtube, ArrowRight, Loader2, Share2, Copy, Check, MonitorPlay, UserPlus, Send } from "lucide-react";
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
            <a
              href="https://youtube.com/@adamcohentoday"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[#D4AF37]/30 text-sm font-semibold transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
              style={{ color: "white" }}
            >
              <Youtube className="w-5 h-5 text-[#D4AF37]" />
              YouTube
            </a>
            <button
              onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D4AF37] text-black text-sm font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <UserPlus className="w-5 h-5" />
              Podcast with Adam
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video Podcast Section */}
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
                        pauseTrack();
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

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{activeVideo.title}</h2>

                {/* Channel & Subscribe Info (Mirroring Screenshot) */}
                <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-white/10 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                      <img src="/logo.png" alt="Adam Cohen" className="w-10 h-10 object-contain" onError={(e) => e.currentTarget.src = 'https://ui-avatars.com/api/?name=Adam+Cohen&background=D4AF37&color=000'} />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-white leading-tight">Adam Cohen Today</p>
                      <p className="text-xs text-white/40">7+ subscriber</p>
                    </div>
                    <a
                      href="https://youtube.com/@adamcohentoday?sub_confirmation=1"
                      target="_blank"
                      className="ml-4 px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm transition-transform hover:scale-105 active:scale-95"
                    >
                      Subscribe
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <button onClick={handleShare} className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium py-2.5 px-6 rounded-full transition-colors border border-white/10">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                    <button onClick={handleCopy} className={cn("flex items-center gap-2 text-sm font-medium py-2.5 px-6 rounded-full transition-all border", copied ? "bg-green-500/10 text-green-500 border-green-500/30" : "bg-white/5 hover:bg-white/10 text-white border-white/10")}>
                      {copied ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy Link</>}
                    </button>
                  </div>
                </div>

                {activeVideo.description && (
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <p className="text-white/80 font-light leading-relaxed whitespace-pre-line">{activeVideo.description}</p>
                  </div>
                )}
              </div>

              {/* Video Sidebar (Queue) */}
              <div className="flex-1 lg:max-w-[30%] flex flex-col gap-4">
                <h3 className="text-lg font-bold text-[#D4AF37] mb-2 flex items-center gap-2">
                  <MonitorPlay className="w-5 h-5" /> More Video Episodes
                </h3>
                <div className="flex flex-col gap-3 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {videoPodcasts.filter(v => v.id !== activeVideo.id).map(video => (
                    <div
                      key={video.id}
                      onClick={() => {
                        setActiveVideo(video);
                        setIsPlayingVideo(true);
                        pauseTrack();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex gap-3 group cursor-pointer p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
                    >
                      <div className="relative w-36 aspect-video rounded-xl overflow-hidden flex-shrink-0 bg-black/40">
                        {video.thumbnail ? (
                          <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-black/40">
                            <Play className="w-4 h-4 text-white/50" />
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-6 h-6 text-white fill-current" />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center overflow-hidden">
                        <h4 className="text-sm font-bold text-white line-clamp-2 leading-tight group-hover:text-[#D4AF37] transition-colors mb-1">
                          {video.title}
                        </h4>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider font-mono">{video.duration || "VIDEO"}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Registration Form Section */}
      <section id="registration-form" className="py-24 px-6 relative overflow-hidden bg-black/40">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #D4AF37, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-display font-bold mb-6">
              Podcast with <span className="gold-gradient-text">Adam Cohen</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/60 max-w-xl mx-auto font-light">
              Ready to share your story or expertise? Apply now to be a guest on the Cohen TV Podcast and reach a global audience of high-performers.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 md:p-12 border border-white/10 shadow-2xl"
          >
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Full Name</label>
                <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Email Address</label>
                <input type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Website / Social Link</label>
                <input type="url" placeholder="https://..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Tell us about yourself / your topic</label>
                <textarea rows={4} placeholder="What would you like to discuss with Adam?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="button" className="w-full py-5 rounded-xl bg-[#D4AF37] text-black font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                  Submit Application <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
          <Mic className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Never Miss an <span className="gold-gradient-text">Episode</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            Subscribe on YouTube to get raw conversations on business and wealth delivered every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://youtube.com/@adamcohentoday" target="_blank" className="hero-btn inline-flex items-center gap-2 px-10">
              <Youtube className="w-5 h-5" /> Subscribe on YouTube
            </a>
            <Link href="/contact" className="hero-btn-outline inline-flex items-center gap-2 px-10">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
