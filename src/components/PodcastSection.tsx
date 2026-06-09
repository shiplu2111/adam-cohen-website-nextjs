"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Youtube, ArrowRight, Clock, Loader2, Pause, UserPlus } from "lucide-react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import AudioVisualizer from "./AudioVisualizer";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as any;

interface EpisodeProps {
  id?: string;
  number: string;
  title: string;
  description?: string;
  duration: string;
  tag: string;
  link?: string;
  host?: string;
  thumbnail?: string;
  is_video?: boolean;
}

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@adamscohentoday?sub_confirmation=1";

const HOMEPAGE_RECENT_EPISODES = 6;

const PodcastSection = ({
  featuredEpisode,
  recentEpisodes = [],
  recentLimit = HOMEPAGE_RECENT_EPISODES,
}: {
  featuredEpisode?: EpisodeProps;
  recentEpisodes?: EpisodeProps[];
  recentLimit?: number;
}) => {
  const { playTrack, currentTrack, isPlaying: isAudioPlaying, pauseTrack } = useAudioPlayer();
  const [activeEp, setActiveEp] = useState<EpisodeProps | null>(featuredEpisode || recentEpisodes[0] || null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !activeEp) return null;

  const listEps = recentEpisodes.slice(0, recentLimit);

  return (
    <section
      id="podcast"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
      style={{ background: "linear-gradient(150deg, #0a0a0a 0%, #111008 50%, #0a0a0a 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 65%)" }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(212,175,55,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div className="text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 font-bold"
            >
              Watch & Listen
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight"
            >
              Cohen TV <br className="hidden sm:block" />
              <span style={{ color: "#D4AF37" }}>Podcast</span>
            </motion.h2>
          </div>

          {/* Eye-catching YouTube CTA */}
          <motion.a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col sm:flex-row items-center justify-between gap-4 w-full rounded-2xl px-5 sm:px-8 py-5 sm:py-6 overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.35)] transition-all duration-300"
            style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.05) 50%, rgba(255,255,255,0.03) 100%)" }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 50%, rgba(212,175,55,0.15), transparent 60%)" }} />
            <div className="relative flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FF0000] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Youtube className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-none" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#D4AF37] mb-1">
                  Subscribe on YouTube
                </p>
                <p className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                  Watch Cohen TV on YouTube
                </p>
                <p className="text-xs sm:text-sm text-white/50 mt-0.5 hidden sm:block">
                  New episodes, interviews & business insights
                </p>
              </div>
            </div>
            <span className="relative flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap transition-all duration-300 group-hover:gap-3" style={{ background: "linear-gradient(135deg, #D4AF37, #C19B2E)", color: "#0B0B0B", boxShadow: "0 4px 24px rgba(212,175,55,0.4)" }}>
              Subscribe Now
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:justify-end"
          >
            <Link
              href="/podcast/interview-request"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 hover:scale-105 bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] w-full sm:w-auto"
            >
              <UserPlus className="w-5 h-5" />
              Podcast with Adam
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`lg:col-span-3 group rounded-2xl overflow-hidden relative transition-all duration-500 transform-gpu isolate ${currentTrack?.id === (activeEp.id || activeEp.number) ? 'ring-2 ring-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.15)]' : 'border border-[#D4AF37]/18'}`}
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            }}
          >
            <div className={`relative aspect-video w-full rounded-t-2xl overflow-hidden bg-black/40`}>
              {activeEp.is_video ? (
                <ReactPlayer
                  key={activeEp.link}
                  src={activeEp.link}
                  width="100%"
                  height="100%"
                  controls
                  style={{ pointerEvents: 'auto' }}
                />
              ) : (
                <div className={`px-8 pt-8 pb-4 flex items-end gap-1 h-full transition-opacity duration-500 ${currentTrack?.id === (activeEp.id || activeEp.number) ? 'opacity-100' : 'opacity-20'}`}>
                  {currentTrack?.id === (activeEp.id || activeEp.number) ? (
                    <AudioVisualizer isPlaying={isAudioPlaying} count={30} />
                  ) : (
                    [40, 65, 30, 80, 55, 90, 40, 70, 35, 85, 60, 75, 45, 90, 50, 70, 40, 80, 55, 65].map((h, i) => (
                      <div key={i} className="flex-1 rounded-full transition-all duration-500 group-hover:opacity-80" style={{ height: `${h}%`, backgroundColor: "#D4AF37" }} />
                    ))
                  )}
                </div>
              )}
            </div>
            <div className="p-4 sm:p-6 md:p-8 pt-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full" style={{ backgroundColor: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.2)" }}>
                  {activeEp.tag}
                </span>
                <span className="text-[10px] sm:text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.4)" }}><Clock className="w-3 h-3" />{activeEp.duration}</span>
                <span className="text-[10px] sm:text-xs font-mono font-bold" style={{ color: "rgba(212,175,55,0.5)" }}>EP.{activeEp.number}</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4 text-white leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                {activeEp.title}
              </h3>
              <p className="font-light leading-relaxed mb-6 sm:mb-8 text-xs sm:text-sm text-white/50 line-clamp-3 sm:line-clamp-none">{activeEp.description}</p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                {!activeEp.is_video && (
                  <button
                    onClick={() => activeEp.link && playTrack({
                      id: activeEp.id || activeEp.number,
                      title: activeEp.title,
                      host: activeEp.host || "Adam Cohen",
                      link: activeEp.link,
                      thumbnail: activeEp.thumbnail
                    })}
                    className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] w-full sm:w-auto" style={{ background: "linear-gradient(135deg, #D4AF37, #C19B2E)", color: "#0B0B0B" }}>
                    {currentTrack?.id === (activeEp.id || activeEp.number) && isAudioPlaying ? (
                      <><Pause className="w-4 h-4 fill-current" /> Pause</>
                    ) : (
                      <><Play className="w-4 h-4 fill-current" /> {currentTrack?.id === (activeEp.id || activeEp.number) ? 'Resume' : 'Play Episode'}</>
                    )}
                  </button>
                )}
                {activeEp.is_video && (
                  <div className="flex items-center justify-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-widest bg-[#D4AF37]/10 px-4 py-2.5 rounded-lg border border-[#D4AF37]/20 w-full sm:w-auto">
                    <Play className="h-4 w-4 fill-current" /> Watching Video
                  </div>
                )}
                <Link href="/podcasts" className="text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors duration-300 hover:text-[#D4AF37] text-white/50 py-2 sm:py-0">
                  All Episodes <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-0 sm:mb-1 text-white/30">Recent Episodes</p>
            {listEps.map((ep, i) => (
              <motion.div
                key={ep.id ?? ep.link ?? `episode-${i}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => {
                  setActiveEp(ep);
                  if (!ep.is_video && ep.link) {
                    playTrack({
                      id: ep.id || ep.number,
                      title: ep.title,
                      host: ep.host || "Adam Cohen",
                      link: ep.link,
                      thumbnail: ep.thumbnail
                    });
                  } else {
                    pauseTrack();
                  }
                }}
                className={`group flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-300 border ${currentTrack?.id === (ep.id || ep.number) || activeEp.id === ep.id ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-white/5 border-white/10'} hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5`}
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${currentTrack?.id === (ep.id || ep.number) || activeEp.id === ep.id ? 'bg-[#D4AF37] text-black' : 'bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]'}`}>
                  {(currentTrack?.id === (ep.id || ep.number) && isAudioPlaying) || (activeEp.id === ep.id && activeEp.is_video) ? (
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="h-5 w-5 bg-black rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    </motion.div>
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] sm:text-xs font-mono mb-0.5 sm:mb-1 text-[#D4AF37]/50">EP.{ep.number}</p>
                  <h4 className="text-sm font-display font-bold leading-snug text-white/90 group-hover:text-[#D4AF37] line-clamp-2 sm:truncate">{ep.title}</h4>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] whitespace-nowrap">{ep.tag}</span>
                  <span className="text-[10px] text-white/30 whitespace-nowrap">{ep.duration}</span>
                </div>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-2 sm:mt-auto pt-2 flex flex-col gap-3">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] text-black sm:hidden"
                style={{ background: "linear-gradient(135deg, #D4AF37, #C19B2E)", boxShadow: "0 4px 20px rgba(212,175,55,0.35)" }}
              >
                <Youtube className="w-5 h-5 text-black fill-none" strokeWidth={2} />
                Subscribe on YouTube
              </a>
              <Link href="/podcasts" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37]">
                Browse All Episodes <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
