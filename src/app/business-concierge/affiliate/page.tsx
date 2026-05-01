import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2, Network, DollarSign, ShieldCheck } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Affiliate Marketing Program Development | Adam Cohen",
  description: "Earn predictable revenue while you sleep. We construct and manage lucrative affiliate marketing systems that generate true passive revenue streams.",
};

export default function AffiliateMarketingPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Affiliate <span className="gold-gradient-text">Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed">
            Generate powerful passive revenue streams through strategic global partnerships and scaled performance-based campaigns.
          </p>
          <MagneticButton as="a" href="/contact" className="hero-btn !px-10 !py-4 text-lg">
            Build Your Affiliate Network
          </MagneticButton>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Scale Traffic Risk-Free Using Strategic Partnerships</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                In shifting economic landscapes, relying purely on upfront paid ad spend is highly volatile. Affiliate marketing flips the script, allowing you to recruit a decentralized sales army of influencers, marketers, and industry partners who assume the financial risk of advertising — and you only pay when a sale is confirmed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <Network className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Partner Recruitment</h3>
                <p className="text-sm text-muted-foreground">Headhunting elite affiliates and influencers whose audiences align with your brand.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <DollarSign className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Commission Modeling</h3>
                <p className="text-sm text-muted-foreground">Structuring profitable, attractive commission tiers that incentivize top performance.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Fraud Prevention</h3>
                <p className="text-sm text-muted-foreground">Rigorous tracking and monitoring to protect your program from fraudulent activity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Partner Recruitment */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Affiliate Partner Network Recruitment"
                width={800}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Elite <span className="gold-gradient-text">Partner Recruitment</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                The quality of your affiliate network directly determines your revenue ceiling. We proactively headhunt and onboard top-tier publishers, content creators, and niche influencers whose audiences are perfectly aligned with your ideal customer profile — ensuring every partner drives high-quality, converting traffic.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Niche Influencer & Publisher Outreach",
                  "Affiliate Vetting & Brand Alignment",
                  "Custom Onboarding & Resource Kits",
                  "Tiered Partner Incentive Programs",
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

      {/* Feature 2: Platform & Tracking */}
      <section className="section-padding px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Enterprise <span className="gold-gradient-text">Platform & Tracking</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We deploy enterprise-grade affiliate platforms with pixel-accurate tracking infrastructure. Every click, sale, and commission is recorded in real time, giving you and your partners complete transparency. We model commission tiers scientifically to ensure your program is simultaneously attractive to partners and highly profitable for your business.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Enterprise Affiliate Platform Setup",
                  "Pixel-Accurate Conversion Tracking",
                  "Profitable Commission Tier Modeling",
                  "Automated Partner Payout Reporting",
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
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
                alt="Affiliate Marketing Analytics and Tracking Platform"
                width={800}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Fraud & Optimisation */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80"
                alt="Affiliate Fraud Prevention and Conversion Optimization"
                width={800}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Fraud Defense & <span className="gold-gradient-text">Continuous Optimization</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Unmanaged affiliate programs bleed revenue to fraudulent actors. We implement advanced fraud prevention protocols — from IP filtering to behavioral analysis — to ensure every payout corresponds to a genuine, high-intent customer. We then run continuous funnel optimization to maximize conversion rates across all affiliate traffic sources.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Advanced Click Fraud Detection",
                  "Behavioral & IP Anomaly Monitoring",
                  "Continuous Funnel Conversion Optimization",
                  "Monthly Program Performance Reviews",
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
            <h2 className="text-3xl font-display font-bold mb-6">Build a Sales Army That Works For You</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Stop paying for reach. Start paying for results. Let us build you a performance-based affiliate engine that scales your revenue without scaling your risk.
            </p>
            <MagneticButton as="a" href="/contact" className="hero-btn !w-full sm:!w-auto">
              Launch My Affiliate Program
            </MagneticButton>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
