"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { CheckCircle2, Clock, Target, Rocket } from "lucide-react";

export default function BookPageClient() {
  return (
    <PageTransition>
      <div className="bg-background min-h-screen pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
        
        {/* Background Accents */}
        <div className="absolute top-1/4 -right-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
            {/* Qualifying Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-medium">Limited Availability</p>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
                Reserve Your <br />
                <span className="gold-gradient-text">Strategy Session.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                This is not a sales call. It is a high-stakes strategy session 
                designed to audit your current trajectory and engineer absolute market mastery.
              </p>

              <div className="space-y-12">
                {/* Who this is for */}
                <div className="space-y-6">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-bold flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" /> Who This Is For
                  </h3>
                  <div className="grid gap-4">
                    {[
                      "Institutional Investors & Capital Allocators",
                      "Founders scaling beyond $10M ARR",
                      "Real Estate developers seeking creative structuring",
                      "High-net-worth individuals building legacy assets"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground/80 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What you get */}
                <div className="space-y-6">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-bold flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-primary" /> The Session ROI
                  </h3>
                  <div className="grid gap-6">
                    {[
                      { 
                        title: "Market Arbitrage Audit", 
                        desc: "Identifying hidden inefficiencies in your current business or portfolio." 
                      },
                      { 
                        title: "Deal Structure Review", 
                        desc: "A technical look at your current terms and tax/leverage optimization." 
                      },
                      { 
                        title: "Growth Engineering", 
                        desc: "A bespoke roadmap for 10x expansion through acquisition or debt." 
                      }
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-display font-bold text-foreground/90">{item.title}</p>
                          <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Calendly Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-32"
            >
              <div className="glass-card p-4 h-[700px] border border-primary/20 bg-background shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-background/50 backdrop-blur-sm pointer-events-none border-b border-primary/5 h-2 w-full z-20" />
                <iframe
                  src="https://calendly.com/adam-cohen/strategy?hide_event_types=1&hide_gdpr_banner=1&primary_color=D4AF37"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-xl overflow-hidden"
                />
              </div>
              <p className="mt-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
                Secure SSL Encrypted Booking System
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
