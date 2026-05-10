"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Mic, Send, Loader2, UserPlus, ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

export default function InterviewRequestPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    website_url: "",
    topic: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.full_name || !formData.email) {
      toast.error("Please fill in required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/public/podcast-register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          website_url: "",
          topic: ""
        });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
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
            <Mic className="w-7 h-7 text-black" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Media & Interviews
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
          >
            Interview <span style={{ color: "#D4AF37" }}>Requests</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-6 text-lg max-w-xl font-light text-white/60"
          >
            Ready to share your story or feature Adam on your platform? Apply now to collaborate and reach a global audience.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-display font-bold mb-6 text-black dark:text-white">
              Podcast with <span className="gold-gradient-text">Adam Cohen</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-xl mx-auto font-light">
              Submit your details below. Our team reviews every request and will be in touch if there is a strategic alignment.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-2xl bg-white dark:bg-black/60 backdrop-blur-xl rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your name" 
                  value={formData.full_name}
                  onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                  className="w-full bg-black/5 dark:bg-black/30 border border-black/10 dark:border-white/20 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="email@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/5 dark:bg-black/30 border border-black/10 dark:border-white/20 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-black/5 dark:bg-black/30 border border-black/10 dark:border-white/20 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Website / Social Link</label>
                <input 
                  type="url" 
                  placeholder="https://..." 
                  value={formData.website_url}
                  onChange={(e) => setFormData({...formData, website_url: e.target.value})}
                  className="w-full bg-black/5 dark:bg-black/30 border border-black/10 dark:border-white/20 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors" 
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Tell us about yourself / your topic</label>
                <textarea 
                  rows={4} 
                  placeholder="What would you like to discuss with Adam?" 
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                  className="w-full bg-black/5 dark:bg-black/30 border border-black/10 dark:border-white/20 rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/40 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-xl bg-[#D4AF37] text-black font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(212,175,55,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</> : <>Submit Application <Send className="w-5 h-5" /></>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Explore Episodes */}
      <section className="section-padding border-t border-black/5 dark:border-white/5 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <Play className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Watch & Listen to <span className="gold-gradient-text">Latest Episodes</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            Check out our library of raw conversations on business, wealth, and high-performance.
          </p>
          <Link href="/podcasts" className="hero-btn-outline inline-flex items-center gap-2">
            View All Episodes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
