"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import {
  DollarSign, Clock, CheckCircle2, ArrowRight, Building2,
  TrendingUp, Shield, Zap, FileText
} from "lucide-react";
import { ReactNode } from "react";

interface LoanType {
  icon: ReactNode;
  title: string;
  description: string;
  terms: string;
  ltv: string;
}

interface ProcessStep {
  step: string;
  icon: ReactNode;
  title: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface HardMoneyPageClientProps {
  loanTypes: LoanType[];
  qualifications: string[];
  process: ProcessStep[];
  faqs: FAQ[];
}

export default function HardMoneyPageClient({
  loanTypes,
  qualifications,
  process,
  faqs
}: HardMoneyPageClientProps) {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #060809 0%, #0a1008 60%, #060809 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse at 65% 50%, #D4AF37, transparent 60%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
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
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
          >
            Hard Money <br />
            <span style={{ color: "#D4AF37" }}>Lending</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="mt-6 text-lg max-w-2xl font-light leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Fast, asset-backed capital for real estate investors who need to move at the speed of opportunity — not the speed of a bank.
          </motion.p>

          {/* Key metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-10 mt-12"
          >
            {[
              { val: "5–10",    unit: "Days to Close" },
              { val: "$100K+",  unit: "Loan Minimum" },
              { val: "Up to 80%", unit: "LTV / ARV" },
              { val: "9–13%",   unit: "Interest Rates" },
            ].map((s) => (
              <div key={s.unit}>
                <p className="text-3xl font-display font-bold" style={{ color: "#D4AF37" }}>{s.val}</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.unit}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link href="/contact" className="hero-btn inline-flex items-center gap-2">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/real-estate" className="hero-btn-outline inline-flex items-center gap-2">
              All Real Estate Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
            >
              Loan Programs
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Our <span className="gold-gradient-text">Loan Products</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {loanTypes.map((loan, i) => (
              <motion.div
                key={loan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-8 group hover:border-primary/40 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {loan.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Term</p>
                    <p className="text-sm font-semibold text-primary">{loan.terms}</p>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {loan.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4">{loan.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-border/40">
                  <span className="text-xs text-muted-foreground">LTV:</span>
                  <span className="text-sm font-semibold text-primary">{loan.ltv}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications + Process side by side */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Qualifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Who Qualifies</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Basic <span className="gold-gradient-text">Requirements</span>
            </h2>
            <p className="text-muted-foreground mb-8 font-light">
              We keep our requirements simple — because good deals shouldn't be blocked by bureaucracy.
            </p>
            <ul className="space-y-4">
              {qualifications.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{q}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden gold-glow"
          >
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80&fit=crop"
              alt="Hard money lending"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-card p-6 border border-[#D4AF37]/20" style={{ backgroundColor: "rgba(11,11,11,0.8)" }}>
                <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-2">Fast Capital</p>
                <p className="text-white font-display font-bold text-xl">Close in 5–10 days.</p>
                <p className="text-white/50 text-sm mt-1">Where traditional lenders take months, we fund in days.</p>
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
              From Application to <span className="gold-gradient-text">Funding</span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <p className="text-5xl font-display font-black gold-gradient-text mb-4">{p.step}</p>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {p.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-4xl font-display font-bold"
            >
              Common <span className="gold-gradient-text">Questions</span>
            </motion.h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-7"
              >
                <h3 className="font-display font-bold mb-3 text-lg">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
          <Clock className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to <span className="gold-gradient-text">Move Fast?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            Submit your deal details today and get a term sheet within 24 hours. No obligation, no hard credit pull.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="hero-btn inline-flex items-center gap-2">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/real-estate/private-equity" className="hero-btn-outline inline-flex items-center gap-2">
              Explore Private Equity
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
