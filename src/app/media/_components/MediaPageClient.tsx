"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";

interface Video {
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  duration: string;
  date: string;
}

interface Podcast {
  title: string;
  platform: string;
  url: string;
  summary: string;
  date: string;
}

interface PressItem {
  name: string;
  feature: string;
  date: string;
}

interface MediaPageClientProps {
  videos: Video[];
  podcasts: Podcast[];
  press: PressItem[];
}

export default function MediaPageClient({ videos, podcasts, press }: MediaPageClientProps) {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="pt-36 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-medium"
            >
              Public Presence
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl lg:text-9xl font-display font-bold leading-tight mb-8"
            >
              Media, <br />
              <span className="gold-gradient-text">Interviews & Insights.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
            >
              Exploring the strategies behind the results. Watch, listen, and learn 
              the frameworks of institutional wealth.
            </motion.p>
          </div>
        </section>

        {/* Video Section */}
        <section className="section-padding px-6 pt-0">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16 border-b border-primary/10 pb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Featured <span className="gold-gradient-text">Videos.</span></h2>
              <div className="flex gap-4">
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Adam Cohen YouTube</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-10">
              {videos.map((video, i) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-video mb-6 border border-primary/10 bg-black">
                    {playingVideo === video.youtubeId ? (
                      <iframe 
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <div 
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setPlayingVideo(video.youtubeId)}
                      >
                        {video.thumbnail && (
                          <img 
                            src={video.thumbnail || undefined} 
                            alt={video.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                          />
                        )}
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-background scale-90 group-hover:scale-100 transition-transform duration-500">
                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-foreground">
                          {video.duration}
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">{video.date}</p>
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section className="section-padding px-6 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16 border-b border-primary/10 pb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Podcast <span className="gold-gradient-text">Appearances.</span></h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {podcasts.map((podcast, i) => (
                <motion.div
                  key={podcast.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-10 group hover:border-primary/40 transition-all duration-500 flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full gold-gradient-bg flex items-center justify-center">
                      <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                      </svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{podcast.platform}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {podcast.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                    {podcast.summary}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">{podcast.date}</span>
                    <a 
                      href={podcast.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors group/play"
                    >
                      <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover/play:bg-primary group-hover/play:text-background transition-all">
                        <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                      Listen Now
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Press & <span className="gold-gradient-text">Features.</span></h2>
              <p className="text-muted-foreground font-light tracking-wide">Featured coverage and industry mentions.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {press.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-8 flex flex-col items-center text-center justify-center group hover:bg-primary/5 transition-all duration-500"
                >
                  <p className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{item.feature}</p>
                  <span className="mt-4 text-[9px] text-muted-foreground/40 font-bold">{item.date}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-16 md:p-24 text-center border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 relative overflow-hidden"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Want Adam on <br />
                <span className="gold-gradient-text">Your Platform?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light leading-relaxed">
                For podcast invitations, keynote booking, or media inquiries, 
                let's connect to create high-value content for your audience.
              </p>
              <MagneticButton as="a" href="/contact" className="hero-btn !px-12 !py-6 text-lg">
                Send Media Inquiry
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
