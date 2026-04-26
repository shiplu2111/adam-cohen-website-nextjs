"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";

interface Post {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

interface InsightsPageClientProps {
  posts: Post[];
}

const categories = ["All", "Real Estate Tips", "Investment Strategies", "Market Insights"];

export default function InsightsPageClient({ posts }: InsightsPageClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const featuredPost = posts.find(p => p.featured);
  const filteredPosts = posts.filter(p => !p.featured && (activeCategory === "All" || p.category === activeCategory));

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
              Mastery Content
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl lg:text-9xl font-display font-bold leading-tight mb-8"
            >
              Insights on <br />
              <span className="gold-gradient-text">Real Estate & Investing.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
            >
              Decades of high-stakes expertise distilled into actionable market 
              intelligence and strategic frameworks.
            </motion.p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="px-6 mb-24">
            <div className="max-w-7xl mx-auto">
              <Link href={`/insights/${featuredPost.id}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden grid lg:grid-cols-2 group border border-primary/20 bg-background/40 cursor-pointer"
                >
                  <div className="relative h-[400px] lg:h-auto overflow-hidden">
                    {featuredPost.image && (
                      <img 
                        src={featuredPost.image || undefined} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
                  </div>
                  <div className="p-12 md:p-20 flex flex-col justify-center space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="text-xs tracking-widest uppercase text-primary font-bold">{featuredPost.category}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="text-xs text-muted-foreground">{featuredPost.readTime} Read</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed italic">
                      {featuredPost.excerpt}
                    </p>
                    <div className="pt-4">
                      <MagneticButton className="hero-btn-outline !py-4 !px-10 text-sm font-bold">
                        Read Detailed Article
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </section>
        )}

        {/* Categories & Filter */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto border-y border-primary/10 py-8 flex flex-wrap justify-center gap-6 md:gap-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 relative py-2 ${
                  activeCategory === cat ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-0.5 gold-gradient-bg" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-6 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card group flex flex-col h-full border border-primary/10 hover:border-primary/40 bg-background/20 transition-all duration-500 overflow-hidden"
                  >
                    <Link href={`/insights/${post.id}`} className="h-full flex flex-col">
                      <div className="h-64 overflow-hidden relative">
                        {post.image && (
                          <img 
                            src={post.image || undefined} 
                            alt={post.title} 
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                          />
                        )}
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-background/90 backdrop-blur-md text-[10px] tracking-widest uppercase text-primary px-3 py-1 rounded-full font-bold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-10 flex-grow flex flex-col">
                        <div className="flex justify-between items-center mb-6 text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-light mb-10 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto pt-6 border-t border-primary/5 flex items-center justify-between group/link">
                          <span className="text-xs font-bold uppercase tracking-widest text-primary">Read More</span>
                          <svg className="w-4 h-4 text-primary transition-transform duration-300 group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Authority CTA Section */}
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-16 md:p-24 text-center border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 relative overflow-hidden"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Want Personalized <br />
                <span className="gold-gradient-text">Advice?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light leading-relaxed">
                General insights are just the beginning. Let's engineer a bespoke strategy 
                tailored exclusively for your vision and capital.
              </p>
              <div className="flex justify-center">
                <MagneticButton as="a" href="/contact" className="hero-btn !px-12 !py-6 text-lg">
                  Book a Strategy Call
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
