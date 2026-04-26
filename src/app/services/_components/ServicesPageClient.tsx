"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";

interface ServicePillar {
  icon: string;
  title: string;
  description: string;
  outcome: string;
  benefits: string[];
  tag: string;
}

interface PerformanceMetric {
  val: string;
  label: string;
}

interface ServicesPageClientProps {
  servicePillars: ServicePillar[];
  performanceMetrics: PerformanceMetric[];
}

export default function ServicesPageClient({
  servicePillars,
  performanceMetrics
}: ServicesPageClientProps) {
  return (
    <PageTransition>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="pt-36 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-medium"
            >
              The Architecture of Success
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-8"
            >
              How Adam Cohen <br />
              <span className="gold-gradient-text">Grows Your Empire.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              We don't just provide services; we engineer transformations. 
              Our frameworks are designed for those who refuse to settle for ordinary results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <MagneticButton as="a" href="/book" className="hero-btn !px-12 !py-6 text-lg">
                Book a Strategy Call
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-20 px-6 border-y border-primary/10 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {performanceMetrics.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-5xl font-display font-bold gold-gradient-text mb-3">{stat.val}</p>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Pillars */}
        <section className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              {servicePillars.map((s, i) => (
                <motion.div 
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-12 md:p-14 group border border-primary/10 bg-background/40 hover:border-primary/40 hover:shadow-[0_0_50px_-12px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-10">
                    <span className="text-6xl grayscale group-hover:grayscale-0 transition-all duration-700">{s.icon}</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-primary/70 border border-primary/20 px-4 py-1.5 rounded-full font-bold">
                      {s.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 font-light italic">
                    {s.description}
                  </p>

                  <div className="bg-primary/5 rounded-2xl p-6 mb-8 border-l-4 border-primary/30">
                    <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-widest">Expected Outcome</p>
                    <p className="text-foreground font-medium">{s.outcome}</p>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {s.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8 border-t border-primary/5">
                    <MagneticButton as="a" href="/book" className="hero-btn-outline w-full !py-4 text-sm font-bold">
                      Learn More & Book Call
                    </MagneticButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mini Testimonial */}
        <section className="section-padding px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <svg className="w-12 h-12 text-primary/20 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-display font-medium italic leading-relaxed text-foreground/90">
                "Adam's ability to see the chessboard 10 steps ahead is uncanny. 
                His deal structuring alone saved us $4M in exposure."
              </h2>
              <div>
                <p className="font-display font-bold text-lg">Marcus Thornton</p>
                <p className="text-primary text-sm uppercase tracking-widest font-medium">CEO, Prime Acquisitions</p>
              </div>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
        </section>

        {/* Enhanced Conversion Footer */}
        <section className="section-padding px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-16 md:p-24 text-center border border-primary/20 bg-gradient-to-br from-primary/[0.05] via-transparent to-primary/10 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                  Ready to Build Your <br />
                  <span className="gold-gradient-text">Own Empire?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light">
                  Spots for private consulting and board positions are highly limited. 
                  Apply today to see if your vision aligns with our ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <MagneticButton as="a" href="/book" className="hero-btn !px-12 !py-6 text-lg">
                    Book a Call
                  </MagneticButton>
                  <MagneticButton as="a" href="/book" className="hero-btn-outline !px-12 !py-6 text-lg">
                    Get Consultation
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
