"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import {
  Home, TrendingDown, DollarSign, Calendar, PiggyBank,
  ArrowRight, CheckCircle2, Zap, BarChart3, ArrowDownRight, Building2
} from "lucide-react";
import { ReactNode } from "react";

interface Pillar {
  icon: ReactNode;
  title: string;
  description: string;
  impact: string;
}

interface Result {
  val: string;
  label: string;
  sub: string;
}

interface Step {
  step: string;
  title: string;
  desc: string;
}

interface InvestmentPageClientProps {
  title: string;
  subtitle: string;
  pillars: Pillar[];
  included: string[];
  results: Result[];
  steps: Step[];
  ctaTitle?: string;
  ctaButtonText?: string;
}

export default function InvestmentPageClient({
  title,
  subtitle,
  pillars,
  included,
  results,
  steps,
  ctaTitle = "Ready to Build Your Portfolio?",
  ctaButtonText = "Book a Strategy Call"
}: InvestmentPageClientProps) {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #07050a 0%, #0b0a07 60%, #07050a 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse at 35% 55%, #D4AF37, transparent 60%)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Real Estate</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-white mb-2"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="mt-6 text-lg max-w-2xl font-light leading-relaxed transition-colors duration-300"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-10 mt-12"
          >
            {results.map((r) => (
              <div key={r.label}>
                <p className="text-3xl font-display font-bold" style={{ color: "#D4AF37" }}>{r.val}</p>
                <p className="text-xs font-semibold mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>{r.label}</p>
                <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{r.sub}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link href="/contact" className="hero-btn inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/real-estate" className="hero-btn-outline">
              All Real Estate Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Methodology / Pillars */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
            >
              The Methodology
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              The 4 <span className="gold-gradient-text">Pillars</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-8 group hover:border-primary/40 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {p.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/5">
                    {p.impact}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light text-sm">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">The Program</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Institutional <span className="gold-gradient-text">Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-8 font-light leading-relaxed">
              We provide a complete investment ecosystem—analysis, strategy, and high-performance asset management to ensure your wealth grows securely and predictably.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden gold-glow"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&fit=crop"
              alt="Real Estate Investment"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(11,11,11,0.85)", border: "1px solid rgba(212,175,55,0.2)", backdropFilter: "blur(12px)" }}>
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">Wealth Creation</p>
                </div>
                <p className="text-white font-display font-bold text-xl leading-snug">Building institutional-grade portfolios since 2018.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Our <span className="gold-gradient-text">Process</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <p className="text-5xl font-display font-black gold-gradient-text mb-4">{s.step}</p>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
          <Building2 className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {ctaTitle}
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Every great portfolio starts with a single high-quality asset. Let's discuss your investment goals and find the right fit for your capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="hero-btn inline-flex items-center gap-2">
              {ctaButtonText} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/real-estate/private-equity" className="hero-btn-outline">
              Explore Private Equity
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
