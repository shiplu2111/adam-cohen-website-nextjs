"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  content: string;
}

interface InsightDetailPageClientProps {
  post: Post;
}

export default function InsightDetailPageClient({ post }: InsightDetailPageClientProps) {
  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        {/* Article Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {post.image && (
              <img 
                src={post.image || undefined} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale opacity-40 scale-105" 
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs tracking-[0.4em] uppercase font-bold mb-6 block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
                {post.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground uppercase tracking-widest font-medium">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span>{post.readTime} Read</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-24 px-6 relative">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-invert prose-gold max-w-none"
            >
              <div className="glass-card p-8 md:p-12 border-l-4 border-primary bg-secondary/5 mb-16 italic text-xl text-foreground/90 leading-relaxed font-light">
                {post.excerpt}
              </div>
              
              <div className="text-lg leading-relaxed text-muted-foreground font-light space-y-8 whitespace-pre-line">
                {post.content}
              </div>
            </motion.div>

            {/* Author Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 pt-12 border-t border-primary/10 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden gold-glow">
                <img src="/mm.png" alt="Adam Cohen" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs tracking-widest uppercase text-primary font-bold mb-1">Written By</p>
                <p className="text-2xl font-display font-bold mb-2">Adam Cohen</p>
                <p className="text-sm text-muted-foreground font-light max-w-lg">
                  Institutional investor and strategic advisor specializing in distressed 
                  assets and high-alpha venture capital.
                </p>
              </div>
              <MagneticButton as="a" href="/contact" className="hero-btn-outline !py-3 !px-8 text-xs font-bold">
                Consult with Adam
              </MagneticButton>
            </motion.div>

            {/* Back Button */}
            <div className="mt-20 text-center">
              <Link href="/insights">
                <button className="text-primary text-xs tracking-widest uppercase font-bold border-b border-primary/20 pb-2 hover:border-primary transition-all">
                  ← Back to Insights
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
