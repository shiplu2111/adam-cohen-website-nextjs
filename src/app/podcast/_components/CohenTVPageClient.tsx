"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { Play, Mic, Youtube, Headphones, ArrowRight, Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import AudioVisualizer from "@/components/AudioVisualizer";

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

interface Platform {
  name: string;
  icon: ReactNode;
  href: string;
}

interface CohenTVPageClientProps {
  episodes: Episode[];
  platforms: Platform[];
}

export default function CohenTVPageClient({ episodes, platforms }: CohenTVPageClientProps) {
  const { playTrack, currentTrack, isPlaying } = useAudioPlayer();

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

      {/* Episodes */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
            >
              Latest Episodes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Must-Listen <span className="gold-gradient-text">Episodes</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`glass-card p-7 group cursor-pointer transition-all duration-500 ${currentTrack?.id === (ep.id || ep.number) ? 'border-primary ring-1 ring-primary shadow-[0_0_20px_rgba(212,175,55,0.1)]' : 'hover:border-primary/30 border-white/10'}`}
                onClick={() => ep.link && playTrack({
                  id: ep.id || ep.number,
                  title: ep.title,
                  host: ep.host || "Adam Cohen",
                  link: ep.link,
                  thumbnail: ep.thumbnail
                })}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-bold tracking-[0.2em] font-mono transition-colors ${currentTrack?.id === (ep.id || ep.number) ? 'text-primary' : 'text-primary/60'}`}>
                    {currentTrack?.id === (ep.id || ep.number) && isPlaying ? "PLAYING" : `EP.${ep.number}`}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {ep.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{ep.duration}</span>
                  </div>
                </div>
                <h3 className={`text-lg font-display font-bold mb-2 transition-colors duration-300 leading-snug ${currentTrack?.id === (ep.id || ep.number) ? 'text-primary' : 'group-hover:text-primary text-white'}`}>
                  {ep.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {ep.description}
                </p>
                <div className={`mt-5 flex items-center gap-3 transition-opacity duration-300 ${currentTrack?.id === (ep.id || ep.number) ? 'opacity-100' : 'opacity-100 md:opacity-0 md:group-hover:opacity-100'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${currentTrack?.id === (ep.id || ep.number) ? 'bg-primary border-none text-black' : 'bg-primary/10 border border-primary/20 text-primary'}`}>
                    {currentTrack?.id === (ep.id || ep.number) && isPlaying ? (
                       <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                       <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    )}
                  </div>
                  {currentTrack?.id === (ep.id || ep.number) && isPlaying ? (
                    <div className="flex-1">
                      <AudioVisualizer isPlaying={isPlaying} count={8} />
                    </div>
                  ) : (
                    <span className="text-xs font-semibold text-primary tracking-wide">
                      {currentTrack?.id === (ep.id || ep.number) ? "Resume" : "Play Episode"}
                    </span>
                  )}
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
            <a href="#" className="hero-btn inline-flex items-center gap-2">
              <Youtube className="w-4 h-4" /> Watch on YouTube
            </a>
            <Link href="/contact" className="hero-btn-outline inline-flex items-center gap-2">
              Suggest a Topic <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
