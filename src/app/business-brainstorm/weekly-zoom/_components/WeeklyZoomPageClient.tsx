"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import ApplyToJoinForm from "./ApplyToJoinForm";
import {
  Video, Users, Zap, MessageSquare, Target, TrendingUp,
  CheckCircle2, ArrowRight, Star, Calendar, Clock,
  Award, Lightbulb, Rocket, Globe, Heart, type LucideIcon,
} from "lucide-react";

// ─── Icon map ────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, LucideIcon> = {
  "target":        Target,
  "message-square": MessageSquare,
  "trending-up":   TrendingUp,
  "users":         Users,
  "zap":           Zap,
  "video":         Video,
  "check-circle":  CheckCircle2,
  "star":          Star,
  "award":         Award,
  "lightbulb":     Lightbulb,
  "rocket":        Rocket,
  "globe":         Globe,
  "heart":         Heart,
  "calendar":      Calendar,
  "clock":         Clock,
};

function DynamicIcon({ iconKey, className }: { iconKey: string; className?: string }) {
  const Icon = ICON_MAP[iconKey] ?? Zap;
  return <Icon className={className} />;
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface WeeklyZoomSettings {
  title?: string;
  host?: string;
  session_day?: string;
  session_time?: string;
  description?: string;
  sessions_per_year?: string;
  active_members?: string;
  minutes_per_session?: string;
}

interface Expectation {
  id: string;
  icon_key: string;
  title: string;
  description?: string;
}

interface Include {
  id: string;
  text: string;
}

interface ScheduleItem {
  id: string;
  label: string;
  day: string;
  time: string;
  tag: string;
}

interface Testimonial {
  id: string;
  name: string;
  title?: string;
  sessions?: string;
  quote: string;
  rating: number;
}

interface WeeklyZoomPageClientProps {
  settings: WeeklyZoomSettings | null;
  expectations: Expectation[];
  includes: Include[];
  schedules: ScheduleItem[];
  testimonials: Testimonial[];
}

export default function WeeklyZoomPageClient({
  settings,
  expectations,
  includes,
  schedules,
  testimonials,
}: WeeklyZoomPageClientProps) {
  const sessionDay        = settings?.session_day         ?? "Every Wednesday";
  const sessionTime       = settings?.session_time        ?? "";
  const heroDescription   = settings?.description         ?? "Live, interactive coaching sessions every week with Adam Cohen. Real answers to real problems — no scripted content, no fluff, just direct access.";
  const sessionsPerYear   = settings?.sessions_per_year;
  const activeMembers     = settings?.active_members;
  const minutesPerSession = settings?.minutes_per_session;

  // Hero stats — only include slots with values
  const heroStats = [
    sessionsPerYear   ? { val: sessionsPerYear,   label: "Sessions / Year" } : null,
    activeMembers     ? { val: activeMembers,     label: "Active Members"  } : null,
    minutesPerSession ? { val: minutesPerSession, label: "Min Per Session" } : null,
    sessionDay        ? { val: "Live",            label: sessionDay        } : null,
  ].filter(Boolean) as { val: string; label: string }[];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 px-6 overflow-hidden pt-32">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #060a0f 0%, #090a06 60%, #060a0f 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse at 65% 40%, #D4AF37, transparent 58%)" }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center opacity-[0.04]">
          <div className="grid grid-cols-2 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-32 h-24 rounded-xl border border-[#D4AF37]" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Business Brainstorm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
          >
            Weekly <span style={{ color: "#D4AF37" }}>Zoom</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="mt-6 text-lg max-w-2xl font-light leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {heroDescription}
          </motion.p>

          {/* Hero stats — only shown when data exists */}
          {heroStats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-10 mt-12"
            >
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-display font-bold" style={{ color: "#D4AF37" }}>{s.val}</p>
                  <p className="text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a href="#apply" className="hero-btn inline-flex items-center gap-2">
              Apply to Join <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/business-brainstorm/live-events" className="hero-btn-outline inline-flex items-center gap-2">
              Explore Live Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Session Schedule — only renders when data exists */}
      {schedules.length > 0 && (
        <section className="py-16 px-6 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card p-8 md:p-12 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold">Session Schedule</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {schedules.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative flex items-start gap-4 p-5 rounded-xl cursor-pointer overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(212,175,55,0.12)",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.45)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(212,175,55,0.08), 0 4px 20px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.12)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Shimmer sweep on hover */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "linear-gradient(105deg, transparent 40%, rgba(212,175,55,0.06) 50%, transparent 60%)",
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.4s ease infinite",
                      }}
                    />

                    {/* Animated clock icon */}
                    <motion.div
                      whileHover={{ rotate: 20 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <Clock className="w-4 h-4 text-primary" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5 gap-2">
                        <p className="font-display font-bold text-sm group-hover:text-primary transition-colors duration-300 truncate">
                          {s.label}
                        </p>
                        <span
                          className="relative flex-shrink-0 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
                        >
                          {/* Pulse dot for Core sessions */}
                          {s.tag === "Core" && (
                            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                          )}
                          {s.tag}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                        {s.day}
                      </p>
                      <motion.p
                        className="text-xs text-primary font-semibold mt-1"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {s.time}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <style>{`
            @keyframes shimmer {
              0%   { background-position: 200% center; }
              100% { background-position: -200% center; }
            }
          `}</style>
        </section>
      )}

      {/* What to Expect — only renders when data exists */}
      {expectations.length > 0 && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
              >
                Inside Every Session
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-display font-bold"
              >
                What You <span className="gold-gradient-text">Experience</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expectations.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 group hover:border-primary/40 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <DynamicIcon iconKey={item.icon_key} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Included — only renders when data exists */}
      {includes.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Membership</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Everything <span className="gold-gradient-text">Included</span>
              </h2>
              <p className="text-muted-foreground mb-8 font-light">
                One membership. Unlimited access to live coaching, recordings, community, and accountability.
              </p>
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item.id} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="hero-btn inline-flex items-center gap-2">
                  Apply for Membership <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden gold-glow"
            >
              <img
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1200&q=80&fit=crop"
                alt="Weekly Zoom coaching session"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: "rgba(11,11,11,0.85)", border: "1px solid rgba(212,175,55,0.2)", backdropFilter: "blur(12px)" }}
                >
                  <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-2">{sessionDay}</p>
                  <p className="text-white font-display font-bold text-xl">Live. Interactive. Transformational.</p>
                  {sessionTime && (
                    <p className="text-white/50 text-sm mt-1">{sessionTime} — No pre-recorded content. Real coaching, in real time.</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials — only renders when data exists */}
      {testimonials.length > 0 && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-4xl font-display font-bold"
              >
                Member <span className="gold-gradient-text">Results</span>
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8"
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 ${j < (t.rating ?? 5) ? "text-primary fill-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-light italic mb-6">"{t.quote}"</p>
                  <div className="border-t border-border/40 pt-4">
                    <p className="font-display font-semibold">{t.name}</p>
                    {t.title    && <p className="text-sm text-muted-foreground">{t.title}</p>}
                    {t.sessions && <p className="text-xs text-primary mt-1">{t.sessions}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* Apply to Join Form */}
      <ApplyToJoinForm />

      {/* Final CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border border-primary/20">
          <Video className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Join This <span className="gold-gradient-text">Wednesday</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto font-light">
            Applications reviewed within 48 hours. If you're accepted, you'll be on the call this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#apply" className="hero-btn inline-flex items-center gap-2">
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/business-brainstorm/live-events" className="hero-btn-outline inline-flex items-center gap-2">
              Explore Live Events
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
