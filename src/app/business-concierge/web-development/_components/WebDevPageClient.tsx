"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import {
  Monitor, Code2, ShoppingCart, Layers, Zap, Shield,
  ArrowRight, CheckCircle2, Star
} from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface TechItem {
  name: string;
  logo: string;
}

interface WebDevPageClientProps {
  services: Service[];
  techStack: TechItem[];
}

export default function WebDevPageClient({
  services,
  techStack
}: WebDevPageClientProps) {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #080808 0%, #0d1117 60%, #080808 100%)" }} />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse at 70% 50%, #D4AF37, transparent 60%)" }}
        />
        {/* Animated grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Business Concierge</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
          >
            Web <span style={{ color: "#D4AF37" }}>Development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="mt-6 text-lg max-w-2xl font-light leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Premium, performance-first web development that builds your digital presence, drives conversions, and scales with your ambition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link href="/contact" className="hero-btn inline-flex items-center gap-2">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/business-concierge" className="hero-btn-outline inline-flex items-center gap-2">
              All Concierge Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
            >
              What We Build
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Our Web <span className="gold-gradient-text">Services</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 group hover:border-primary/40 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-5">
                  {svc.description}
                </p>
                <ul className="space-y-1.5">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature 1: Architecture */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/wd-architecture.png" 
                alt="Scalable Backend Architecture Mockup" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold"
              >
                Scalable <span className="gold-gradient-text">Backend Infrastructure</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground font-light leading-relaxed"
              >
                We architect robust, scalable backend systems designed to handle enterprise-level traffic without breaking a sweat. From complex relational databases to microservices and cloud deployment, we ensure your platform is built on a solid foundation.
              </motion.p>
              <motion.ul 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="space-y-3 pt-4"
              >
                {[
                  "Secure API Development (REST & GraphQL)",
                  "Cloud Infrastructure (AWS, Vercel)",
                  "High-Availability Database Design",
                  "Automated CI/CD Pipelines",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Frontend */}
      <section className="section-padding px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold"
              >
                Premium <span className="gold-gradient-text">Frontend Experiences</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground font-light leading-relaxed"
              >
                First impressions matter. We merge cutting-edge UI design with highly responsive code to deliver immersive, frictionless user experiences. We leverage modern frameworks like React and Next.js to build lightning-fast interfaces.
              </motion.p>
              <motion.ul 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="space-y-3 pt-4"
              >
                {[
                  "Pixel-Perfect UI Implementation",
                  "Interactive Web Animations",
                  "Responsive Mobile-First Design",
                  "Accessibility & Cross-Browser Compliance",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/wd-frontend.png" 
                alt="Premium Frontend UI/UX Design Mockup" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Performance */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/wd-performance.png" 
                alt="Website Performance and Speed Metrics Dashboard" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold"
              >
                Speed & <span className="gold-gradient-text">Core Web Vitals</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground font-light leading-relaxed"
              >
                A slow website costs you conversions and search rankings. We obsess over performance metrics, optimizing every image, script, and database query to ensure your application loads instantly and passes Google's Core Web Vitals with flying colors.
              </motion.p>
              <motion.ul 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="space-y-3 pt-4"
              >
                {[
                  "Sub-second Page Load Times",
                  "Server-Side Rendering (SSR) Optimization",
                  "Advanced Asset Caching Strategies",
                  "Technical SEO Enhancements",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold">
              Our <span className="gold-gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground mt-3 font-light">We use modern, battle-tested technologies.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card px-6 py-4 flex items-center gap-3 hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                <span className="text-2xl">{tech.logo}</span>
                <span className="font-display font-semibold text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Our <span className="gold-gradient-text">Process</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your goals, audience, and technical requirements." },
              { step: "02", title: "Design",    desc: "Wire-frames, UI prototypes, and design system creation." },
              { step: "03", title: "Build",     desc: "Agile development with weekly demos and feedback loops." },
              { step: "04", title: "Launch",    desc: "QA, deployment, performance checks, and handover training." },
            ].map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <p className="text-5xl font-display font-black gold-gradient-text mb-4">{p.step}</p>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
          <Star className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Build Something <span className="gold-gradient-text">World-Class?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            Let's scope your project and deliver a web experience that converts and scales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="hero-btn inline-flex items-center gap-2">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/mobile-app-development" className="hero-btn-outline inline-flex items-center gap-2">
              Explore Mobile Apps
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
