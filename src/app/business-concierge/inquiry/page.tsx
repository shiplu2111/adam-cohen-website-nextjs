import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2, Target, FlaskConical, CalendarCheck } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "High-Converting Inquiry Landing Pages | Adam Cohen",
  description: "Turn paid traffic into highly qualified inbound leads. Meticulously optimized landing pages built to capture inquiries and immediately book consultations.",
};

export default function InquiryLandingPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Inquiry <span className="gold-gradient-text">Landing Pages</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed">
            Hyper-optimized, single-focus landing pages built scientifically to capture inquiries and book verified consultations.
          </p>
          <MagneticButton as="a" href="/contact" className="hero-btn !px-10 !py-4 text-lg">
            Deploy a Conversion Funnel
          </MagneticButton>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Converting Idle Traffic Into Actionable Revenue</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                Sending paid advertising traffic to a traditional homepage is a recipe for catastrophic bounce rates. Visitors face overwhelming choices and inevitably exit without taking action. You require a dedicated environment where the visitor has only one logical, highly appealing path to follow.
              </p>
              <p>
                We construct specialized inquiry landing pages designed with aggressive conversion-rate-optimization (CRO) principles. By systematically testing layouts, implementing persuasive direct-response copy, and simplifying friction in contact forms, we drastically lower your Cost-Per-Acquisition (CPA).
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">CRO-First Design</h3>
                <p className="text-sm text-muted-foreground">Every element placed with a single goal: guide the visitor toward one high-value action.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <FlaskConical className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">A/B Split Testing</h3>
                <p className="text-sm text-muted-foreground">Systematic hypothesis testing to continuously improve conversion rates over time.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <CalendarCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Automated Booking</h3>
                <p className="text-sm text-muted-foreground">Frictionless scheduling integrations that turn an inquiry into a booked call instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: CRO Design */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Conversion Rate Optimization Landing Page Design"
                width={800}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Precision <span className="gold-gradient-text">CRO Architecture</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We engineer landing pages that eliminate every possible point of friction between your visitor and the conversion event. Using proven direct-response frameworks, heat-map analysis, and persuasive visual hierarchies, we build digital environments that psychologically guide users toward taking immediate, decisive action.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Direct-Response Conversion Copywriting",
                  "Attention-Directing Visual Hierarchies",
                  "Trust Signal & Social Proof Placement",
                  "Minimal-Friction Form Architecture",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: A/B Testing */}
      <section className="section-padding px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Rigorous <span className="gold-gradient-text">A/B Testing & Analytics</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We never guess — we test. Our data-driven approach involves deploying systematic A/B split tests across headlines, calls-to-action, form layouts, and page structures. We track every micro-conversion to identify what resonates with your specific audience and double down on the highest-yield variables.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Headline & Value Proposition Testing",
                  "CTA Button & Copy Optimization",
                  "Real-Time Conversion Analytics",
                  "Heatmap & Scroll-Depth Analysis",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="A/B Testing and Conversion Analytics Dashboard"
                width={800}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Booking & Automation */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
                alt="Automated Lead Booking and CRM Integration"
                width={800}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Seamless <span className="gold-gradient-text">Booking & CRM Automation</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Speed-to-lead is everything. We integrate dynamic scheduling calendars and intelligent CRM automation workflows directly into your landing page so that the moment a prospect submits an inquiry, they are immediately presented with a live booking opportunity — reducing drop-off to near zero.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Calendly / Cal.com Scheduling Integration",
                  "Instant Lead Notification Automations",
                  "CRM & Email Automation Workflows",
                  "High-Value Lead Magnet Delivery",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 relative text-center border border-primary/20">
            <h2 className="text-3xl font-display font-bold mb-6">Stop Sending Traffic to a Leaking Bucket</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Every day without an optimized inquiry funnel is revenue lost to competitors. Let's build you a conversion-engineered landing page that works around the clock.
            </p>
            <MagneticButton as="a" href="/contact" className="hero-btn !w-full sm:!w-auto">
              Build My Inquiry Funnel
            </MagneticButton>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
