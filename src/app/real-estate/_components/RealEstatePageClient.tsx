"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

interface Feature {
  title: string;
  desc: string;
}

interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: (string | Feature)[];
}

interface RealEstatePageClientProps {
  services: Service[];
}

export default function RealEstatePageClient({ services }: RealEstatePageClientProps) {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5"
          style={{ background: "radial-gradient(circle at 80% 50%, #D4AF37, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Real <span className="gold-gradient-text">Estate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl font-light"
          >
            From hard money lending to private equity and mortgage acceleration — we operate across the full capital stack of real estate.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`section-padding relative ${i % 2 === 1 ? "bg-secondary/40" : ""}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className={`relative rounded-2xl overflow-hidden gold-glow ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                {svc.image && (
                  <img
                    src={svc.image || undefined}
                    alt={svc.title}
                    className="w-full h-[380px] object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black">
                    {svc.icon}
                  </span>
                  <span className="text-white font-display font-bold text-lg">{svc.title}</span>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 font-semibold">{svc.tagline}</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">{svc.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 font-light">{svc.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {svc.features.map((f, idx) => {
                    const isObject = typeof f !== 'string';
                    return (
                      <li key={idx} className={`flex items-start gap-2.5 text-sm ${isObject ? "bg-white/5 p-4 rounded-lg border border-white/5 shadow-sm" : ""}`}>
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          {isObject ? (
                            <>
                              <span className="font-bold text-foreground mb-1">{(f as Feature).title}</span>
                              <span className="text-muted-foreground text-xs leading-relaxed">{(f as Feature).desc}</span>
                            </>
                          ) : (
                            <span className="text-muted-foreground">{f as string}</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Link href="/contact" className="hero-btn inline-flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
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
            Ready to Invest in <span className="gold-gradient-text">Real Estate?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            Book a strategy session and we'll identify the best capital structure for your goals.
          </p>
          <Link href="/contact" className="hero-btn inline-block">Book a Strategy Call</Link>
        </div>
      </section>
    </PageTransition>
  );
}
