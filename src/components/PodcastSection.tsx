"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Headphones, Youtube, ArrowRight, Clock, Loader2, Pause } from "lucide-react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import AudioVisualizer from "./AudioVisualizer";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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

const platforms = [
  { name: "YouTube", icon: <Youtube className="w-4 h-4" />, href: "#" },
  { name: "Spotify", icon: <Headphones className="w-4 h-4" />, href: "#" },
  { name: "Apple Podcasts", icon: <Play className="w-4 h-4" />, href: "#" },
];

const PodcastSection = ({
  featuredEpisode,
  recentEpisodes = []
}: {
  featuredEpisode?: EpisodeProps;
  recentEpisodes?: EpisodeProps[];
}) => {
  const { playTrack, currentTrack, isPlaying: isAudioPlaying, pauseTrack } = useAudioPlayer();
  const [activeEp, setActiveEp] = useState<EpisodeProps | null>(featuredEpisode || recentEpisodes[0] || null);

  if (!activeEp) return null;
  
  const listEps = [
    ...(featuredEpisode ? [featuredEpisode] : []),
    ...recentEpisodes
  ].filter(ep => ep.id !== activeEp.id);

  return (
    <section
      id="podcast"
      className="relative py-28 px-6 overflow-hidden"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-medium"
            >
              Watch & Listen
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display font-bold text-white leading-tight"
            >
              Cohen TV <br />
              <span style={{ color: "#D4AF37" }}>Podcast</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                <span style={{ color: "#D4AF37" }}>{p.icon}</span>
                {p.name}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`lg:col-span-3 group rounded-2xl overflow-hidden relative transition-all duration-500 ${currentTrack?.id === (activeEp.id || activeEp.number) ? 'ring-2 ring-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.15)]' : 'border border-[#D4AF37]/18'}`}
            style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            }}
          >
            <div className={`relative aspect-video w-full rounded-t-2xl overflow-hidden bg-black/40`}>
              {activeEp.is_video ? (
                <ReactPlayer
                  url={activeEp.link}
                  width="100%"
                  height="100%"
                  controls
                  light={activeEp.thumbnail}
                  playIcon={
                    <div className="h-16 w-16 rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 flex items-center justify-center transition-transform hover:scale-110">
                      <Play className="h-6 w-6 text-primary fill-primary" />
                    </div>
                  }
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
            <div className="p-8 pt-2">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(212,175,55,0.1)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.2)" }}>
                  {activeEp.tag}
                </span>
                <span className="text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.4)" }}><Clock className="w-3 h-3" />{activeEp.duration}</span>
                <span className="text-xs font-mono font-bold" style={{ color: "rgba(212,175,55,0.5)" }}>EP.{activeEp.number}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                {activeEp.title}
              </h3>
              <p className="font-light leading-relaxed mb-8 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{activeEp.description}</p>
              <div className="flex items-center gap-4">
                {!activeEp.is_video && (
                  <button
                    onClick={() => activeEp.link && playTrack({
                      id: activeEp.id || activeEp.number,
                      title: activeEp.title,
                      host: activeEp.host || "Adam Cohen",
                      link: activeEp.link,
                      thumbnail: activeEp.thumbnail
                    })}
                    className="flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]" style={{ background: "linear-gradient(135deg, #D4AF37, #C19B2E)", color: "#0B0B0B" }}>
                    {currentTrack?.id === (activeEp.id || activeEp.number) && isAudioPlaying ? (
                      <><Pause className="w-4 h-4 fill-current" /> Pause</>
                    ) : (
                      <><Play className="w-4 h-4 fill-current" /> {currentTrack?.id === (activeEp.id || activeEp.number) ? 'Resume' : 'Play Episode'}</>
                    )}
                  </button>
                )}
                {activeEp.is_video && (
                  <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-widest bg-[#D4AF37]/10 px-4 py-2 rounded-lg border border-[#D4AF37]/20">
                    <Play className="h-4 w-4 fill-primary" /> Watching Video
                  </div>
                )}
                <Link href="/podcast" className="text-sm font-semibold flex items-center gap-1.5 transition-colors duration-300 hover:text-[#D4AF37]" style={{ color: "rgba(255,255,255,0.5)" }}>
                  All Episodes <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>Recent Episodes</p>
            {listEps.map((ep, i) => (
              <motion.div
                key={ep.number}
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
                    pauseTrack(); // Pause audio if switching to video
                  }
                }}
                className={`group flex items-center gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300 border ${currentTrack?.id === (ep.id || ep.number) || activeEp.id === ep.id ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'bg-white/5 border-white/10'} hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${currentTrack?.id === (ep.id || ep.number) || activeEp.id === ep.id ? 'bg-[#D4AF37] text-black' : 'bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]'}`}>
                  {(currentTrack?.id === (ep.id || ep.number) && isAudioPlaying) || (activeEp.id === ep.id && activeEp.is_video) ? (
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="h-5 w-5 bg-black rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    </motion.div>
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono mb-1 text-[#D4AF37]/50">EP.{ep.number}</p>
                  <h4 className="text-sm font-display font-bold leading-snug truncate text-white/90 group-hover:text-[#D4AF37]">{ep.title}</h4>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">{ep.tag}</span>
                  <span className="text-[10px] text-white/30">{ep.duration}</span>
                </div>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-auto pt-2">
              <Link href="/podcast" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37]">
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
