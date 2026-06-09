"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { ReactNode } from "react";
import { DynamicIcon } from "./DynamicIcon";
import { ArrowUpRight } from "lucide-react";

interface ServiceProps {
  icon?: ReactNode | string;
  title: string;
  description: string;
  tag?: string;
  id?: string;
  href?: string;
  image?: string;
}

const SERVICE_IMAGES: Record<string, string> = {
  Home: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80&fit=crop",
  Bitcoin: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80&fit=crop",
  Gem: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80&fit=crop",
  Code: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop",
  Globe: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop",
  Smartphone: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
};

const getServiceImage = (service: ServiceProps) => {
  if (service.image) return service.image;
  if (typeof service.icon === "string" && SERVICE_IMAGES[service.icon]) {
    return SERVICE_IMAGES[service.icon];
  }
  return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop";
};

const accentThemes = [
  {
    gradient: "from-emerald-500/30 via-emerald-600/10 to-transparent",
    iconWrap: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    border: "hover:border-emerald-500/35",
    glow: "group-hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.25)]",
    orb: "bg-emerald-500",
  },
  {
    gradient: "from-violet-500/30 via-purple-600/10 to-transparent",
    iconWrap: "bg-violet-500/15 border-violet-500/30 text-violet-400",
    tag: "bg-violet-500/10 text-violet-400 border-violet-500/25",
    border: "hover:border-violet-500/35",
    glow: "group-hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.25)]",
    orb: "bg-violet-500",
  },
  {
    gradient: "from-amber-400/35 via-[#D4AF37]/15 to-transparent",
    iconWrap: "bg-amber-500/15 border-amber-500/30 text-[#D4AF37]",
    tag: "bg-amber-500/10 text-[#D4AF37] border-amber-500/25",
    border: "hover:border-amber-500/40",
    glow: "group-hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.3)]",
    orb: "bg-[#D4AF37]",
  },
  {
    gradient: "from-orange-500/30 via-rose-500/10 to-transparent",
    iconWrap: "bg-orange-500/15 border-orange-500/30 text-orange-400",
    tag: "bg-orange-500/10 text-orange-400 border-orange-500/25",
    border: "hover:border-orange-500/35",
    glow: "group-hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.25)]",
    orb: "bg-orange-500",
  },
  {
    gradient: "from-sky-500/30 via-cyan-500/10 to-transparent",
    iconWrap: "bg-sky-500/15 border-sky-500/30 text-sky-400",
    tag: "bg-sky-500/10 text-sky-400 border-sky-500/25",
    border: "hover:border-sky-500/35",
    glow: "group-hover:shadow-[0_20px_60px_-15px_rgba(14,165,233,0.25)]",
    orb: "bg-sky-500",
  },
  {
    gradient: "from-indigo-500/30 via-blue-600/10 to-transparent",
    iconWrap: "bg-indigo-500/15 border-indigo-500/30 text-indigo-400",
    tag: "bg-indigo-500/10 text-indigo-400 border-indigo-500/25",
    border: "hover:border-indigo-500/35",
    glow: "group-hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.25)]",
    orb: "bg-indigo-500",
  },
];

const ServicesSection = ({ services = [] }: { services?: ServiceProps[] }) => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Ambient background graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-[#D4AF37]/8 blur-3xl" />
        <div className="absolute bottom-10 -right-24 w-80 h-80 rounded-full bg-violet-500/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Services & <span className="gold-gradient-text">Opportunities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-5 text-muted-foreground max-w-2xl mx-auto font-light"
          >
            Strategic services across real estate, technology, brand building, and entrepreneurial growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => {
            const theme = accentThemes[i % accentThemes.length];
            const indexLabel = String(i + 1).padStart(2, "0");
            const imageSrc = getServiceImage(service);

            const CardContent = (
              <>
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} mix-blend-overlay`} />

                  {/* Decorative shapes */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full ${theme.orb} opacity-30 blur-2xl`} />
                  <div className="absolute top-4 right-4 w-10 h-10 border border-white/15 rounded-full" />

                  {/* Icon + index */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center backdrop-blur-md bg-black/40 ${theme.iconWrap}`}>
                      {typeof service.icon === "string" ? (
                        <DynamicIcon name={service.icon} className="w-6 h-6" />
                      ) : (
                        service.icon
                      )}
                    </div>
                    <span className="text-4xl font-display font-bold text-white/15 leading-none select-none">
                      {indexLabel}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 md:p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs tracking-widest uppercase px-3 py-1 rounded-full border font-semibold ${theme.tag}`}>
                      {service.tag || "Premium"}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base whitespace-pre-line line-clamp-4">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border/50 flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Service
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </>
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className={`group glass-card border border-border/60 ${theme.border} ${theme.glow} transition-all duration-500 cursor-pointer overflow-hidden rounded-2xl`}
              >
                {service.href ? (
                  <Link href={service.href} className="block h-full w-full">
                    {CardContent}
                  </Link>
                ) : (
                  <div className="h-full w-full">{CardContent}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <MagneticButton as="a" href="/business-concierge" className="hero-btn-outline !py-4 !px-8">
            Show More
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
