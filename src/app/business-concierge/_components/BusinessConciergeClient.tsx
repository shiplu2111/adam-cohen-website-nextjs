"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

interface BusinessConciergeClientProps {
  services: Service[];
}

export default function BusinessConciergeClient({ services }: BusinessConciergeClientProps) {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ background: "radial-gradient(circle at 80% 50%, #D4AF37, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Business <span className="gold-gradient-text">Concierge</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl font-light"
          >
            Brand Development & Management combined with complete Social Media Management.
            Let us do the heavy lifting to grow your success.

          </motion.p>
        </div>
      </section>

      {/* Service cards grid (paired overview) */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="glass-card p-5 flex items-center gap-3 hover:border-primary/40 transition-all duration-300 group"
            >
              <span className="text-primary">{svc.icon}</span>
              <span className="font-display font-semibold text-sm group-hover:text-primary transition-colors">
                {svc.title}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Individual service sections */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`section-padding relative ${i % 2 === 0 ? "bg-secondary/30" : ""}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                {svc.image && (
                  <img src={svc.image || undefined} alt={svc.title} className="w-full h-72 object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-[#D4AF37] flex items-center justify-center text-black">
                    {svc.icon}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2 font-semibold">{svc.tagline}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{svc.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 font-light">{svc.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/business-concierge/${svc.id}`} className="hero-btn inline-flex items-center gap-2">
                  Show Details <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to <span className="gold-gradient-text">Scale Your Brand?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            Book a concierge consultation and we'll build a tailored strategy for your business.
          </p>
          <Link href="/contact" className="hero-btn inline-block">Book a Consultation</Link>
        </div>
      </section>
    </PageTransition>
  );
}
