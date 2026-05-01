import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2, ShieldCheck, Target, Feather } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Premium Corporate Brand Management | Adam Cohen",
  description: "Your brand is your most valuable asset. We deliver premium brand identity, visual system guidelines, and robust reputation management to position you above competitors.",
};

export default function BrandManagementPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Brand <span className="gold-gradient-text">Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed">
            We craft, defensively position, and strictly protect your brand identity across all global digital touchpoints.
          </p>
          <MagneticButton as="a" href="/contact" className="hero-btn !px-10 !py-4 text-lg">
            Solidify Your Brand
          </MagneticButton>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Build a Legacy That Speaks For Itself</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                A fragmented brand signals amateurism. The highest-earning businesses in the world command a visual and verbal identity that immediately establishes authority, trust, and price elasticity. Without stringent brand management, scaling companies naturally dilute their message and lose their foundational aesthetic integrity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <Feather className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Visual Identity</h3>
                <p className="text-sm text-muted-foreground">Architecting cohesive visual frameworks that communicate premium value instantly.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Strategic Positioning</h3>
                <p className="text-sm text-muted-foreground">Carving out a unique, highly defensible market space away from competitors.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Reputation Defense</h3>
                <p className="text-sm text-muted-foreground">Active monitoring and PR management to protect your digital equity and trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Identity */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/bm-identity.png" 
                alt="Premium Brand Identity Design Guidelines" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Cohesive <span className="gold-gradient-text">Visual Systems</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We replace ad-hoc design decisions with rigorous, scalable visual architectures. We deliver comprehensive brand guidelines that dictate logo usage, color psychology, and typographic hierarchy, ensuring absolute consistency whether your brand is seen on a billboard, a website, or a business card.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Comprehensive Brand Identity Books",
                  "Logo Design & Iconography",
                  "Typography & Color Palette Psychology",
                  "Omni-channel Asset Libraries",
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

      {/* Feature 2: Positioning */}
      <section className="section-padding px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Strategic <span className="gold-gradient-text">Market Positioning</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                If you look like everyone else, you compete on price. If you stand alone, you command the market. We analyze your competitors and engineer a unique positioning strategy and tone-of-voice that elevates your brand from a commodity to an indispensable premium authority.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Deep Competitor & Market Analysis",
                  "Unique Value Proposition (UVP) Engineering",
                  "Messaging & Tone of Voice Frameworks",
                  "Target Persona Alignment Strategies",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/bm-positioning.png" 
                alt="Strategic Corporate Market Positioning" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Reputation */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/bm-reputation.png" 
                alt="Brand Reputation Management Dashboard" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Defensive <span className="gold-gradient-text">Reputation Protection</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                A lifetime of branding can be damaged in hours. We deploy advanced monitoring systems to track brand sentiment across the web. From proactive PR strategies to rapid-response crisis management, we defend your digital equity relentlessly.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "24/7 Digital Sentiment Monitoring",
                  "Proactive Public Relations Campaigns",
                  "Review & Ratings Optimization",
                  "Crisis Communication Protocols",
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
            <h2 className="text-3xl font-display font-bold mb-6">Ready to Command Your Market?</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Partner with us to engineer a brand identity that not only looks exceptional but strategically positions you for undeniable industry dominance.
            </p>
            <MagneticButton as="a" href="/contact" className="hero-btn !w-full sm:!w-auto">
              Audit My Brand Today
            </MagneticButton>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
