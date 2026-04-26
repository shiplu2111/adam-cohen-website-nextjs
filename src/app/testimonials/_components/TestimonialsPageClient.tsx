"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";

interface Stat {
  label: string;
  value: string;
}

interface FeaturedTestimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

interface WrittenTestimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

interface VideoTestimonial {
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
}

interface TestimonialsPageClientProps {
  stats: Stat[];
  featuredTestimonials: FeaturedTestimonial[];
  writtenTestimonials: WrittenTestimonial[];
  videoTestimonials: VideoTestimonial[];
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsPageClient({
  stats,
  featuredTestimonials,
  writtenTestimonials,
  videoTestimonials
}: TestimonialsPageClientProps) {
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
              The Proof of Concept
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl lg:text-9xl font-display font-bold leading-tight mb-8"
            >
              What Clients <br />
              Say About <span className="gold-gradient-text">Adam.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
            >
              Results aren't just promised—they are documented. 
              Discover the impact of strategic vision and elite capital deployment.
            </motion.p>
          </div>
        </section>

        {/* Stats Metrics Bar */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 text-center border-primary/10"
                >
                  <p className="text-4xl md:text-5xl font-display font-bold gold-gradient-text mb-2">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {featuredTestimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="glass-card p-12 md:p-16 relative overflow-hidden group border border-primary/20 bg-background/40"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px]" />
                  <svg className="w-12 h-12 text-primary/10 mb-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-2xl md:text-3xl font-display font-light leading-relaxed text-foreground/90 italic mb-10">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                      {t.image && (
                        <img src={t.image || undefined} alt={t.name} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div>
                      <p className="text-xl font-display font-bold">{t.name}</p>
                      <p className="text-sm text-primary uppercase tracking-widest font-bold">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="section-padding bg-secondary/5 px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Video <span className="gold-gradient-text">Evidence.</span></h2>
              <p className="mt-4 text-muted-foreground font-light">Direct feedback from our institutional partners.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {videoTestimonials.map((video) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative rounded-3xl overflow-hidden aspect-video mb-6 border border-primary/10 bg-black">
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
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center text-background scale-90 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-sm">{video.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Written Review Grid */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {writtenTestimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-10 group hover:border-primary/40 transition-all duration-500 flex flex-col h-full"
                >
                  <div className="mb-6">
                    <StarRating rating={t.rating} />
                  </div>
                  <p className="text-foreground/90 leading-relaxed font-light italic mb-10 flex-grow">
                    "{t.quote}"
                  </p>
                  <div className="pt-6 border-t border-primary/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full gold-gradient-bg flex items-center justify-center text-xs font-bold text-background">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm">{t.name}</p>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{t.title}</p>
                    </div>
                  </div>
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
                Ready to Get <br />
                <span className="gold-gradient-text">Similar Results?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light leading-relaxed">
                Join the network of high-achievers and institutional leaders who have 
                transformed their trajectory with Adam Cohen.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <MagneticButton as="a" href="/book" className="hero-btn !px-12 !py-6 text-lg w-full sm:w-auto">
                  Book a Strategy Call
                </MagneticButton>
                <MagneticButton as="a" href="/book" className="hero-btn-outline !px-12 !py-6 text-lg w-full sm:w-auto">
                  Work With Me
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
