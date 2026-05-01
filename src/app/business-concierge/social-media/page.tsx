import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2, TrendingUp, Users, Video } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Corporate Social Media Management Services | Adam Cohen",
  description: "Consistent. Compelling. Conversion-focused. Full-service social media marketing across Instagram, Facebook, TikTok, and X designed to grow scalable businesses.",
};

export default function SocialMediaPage() {
  return (
    <PageTransition>
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Social Media <span className="gold-gradient-text">Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed">
            Consistent, compelling, and intensely conversion-focused. We handle your global content creation and growth.
          </p>
          <MagneticButton as="a" href="/contact" className="hero-btn !px-10 !py-4 text-lg">
            Elevate Your Socials
          </MagneticButton>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Capture Attention, Cultivate Loyalty, Drive Sales</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                In a hyper-competitive digital market, attention is capital. Social media handles the dual task of capturing raw reach and slowly nurturing that audience into an engaged, rapidly buying community. Our full-service social media management integrates seamlessly with your business. We don't just post pretty pictures; we develop conversion-led ecosystems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <Video className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Content Production</h3>
                <p className="text-sm text-muted-foreground">High-end visual storytelling and viral short-form video creation.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Community Growth</h3>
                <p className="text-sm text-muted-foreground">Active daily engagement to turn passive scrollers into loyal advocates.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Data-Driven Scaling</h3>
                <p className="text-sm text-muted-foreground">Algorithm mastery and performance analytics to maximize ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Content Production */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/sm-production.png" 
                alt="Premium Content Production Studio Setup" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Cinematic <span className="gold-gradient-text">Content Creation</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We produce scroll-stopping content that elevates your brand identity. From premium photography to engaging short-form video (TikTok, Instagram Reels, YouTube Shorts), our production team ensures your brand looks undeniably top-tier across all platforms.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "On-site & Remote Video Production",
                  "Viral Scriptwriting & Hook Creation",
                  "High-End Post-Production & Editing",
                  "Consistent Brand Aesthetic Management",
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

      {/* Feature 2: Community Engagement */}
      <section className="section-padding px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Cultivate an <span className="gold-gradient-text">Engaged Community</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Growth is meaningless without engagement. We implement aggressive outbound interaction strategies and responsive inbound community management to foster deep relationships with your audience, transforming followers into paying clients.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Daily Proactive Audience Engagement",
                  "Strategic Influencer & Partner Networking",
                  "Rapid Comment & DM Management",
                  "Brand Voice Synchronization",
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
                src="/images/services/sm-engagement.png" 
                alt="Global Social Media Engagement and Networking Map" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Analytics */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/sm-analytics.png" 
                alt="Social Media Analytics and Performance Dashboard" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Data-Driven <span className="gold-gradient-text">Algorithmic Scaling</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We remove the guesswork from social media. By rigorously tracking engagement metrics, click-through rates, and audience demographics, we iterate our content strategy in real-time to exploit algorithmic trends and maximize organic reach.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Comprehensive Monthly Performance Reporting",
                  "A/B Testing of Formats and Hooks",
                  "Cross-Platform Follower Growth Tracking",
                  "Competitor Benchmarking & Analysis",
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
          <div className="glass-card p-10 md:p-14 relative text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to Dominate the Feed?</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Stop letting your competitors steal your digital real estate. Partner with us to build a dominant, revenue-generating social media ecosystem.
            </p>
            <MagneticButton as="a" href="/contact" className="hero-btn !w-full sm:!w-auto">
              Start Your Social Strategy
            </MagneticButton>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
