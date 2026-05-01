import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2, PenLine, Video, Mail } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Strategic Digital Content Creation | Adam Cohen",
  description: "Content that builds empires. Masterful copywriting, video scripting, and email sequencing that educates, builds trust, and definitively drives action.",
};

export default function ContentCreationPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Content <span className="gold-gradient-text">Creation</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed">
            Highly strategic content production. Every single piece is meticulously crafted to educate, earn trust, and drive immediate action.
          </p>
          <MagneticButton as="a" href="/contact" className="hero-btn !px-10 !py-4 text-lg">
            Amplify Your Output
          </MagneticButton>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Content is the Currency of the Digital Age</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                In an era overwhelmed with noise, generic content simply dies in the void. True industry leaders utilize content as a psychological mechanism to educate their market, overcome complex buyer objections, and establish themselves as the preeminent authority in their respective fields.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <PenLine className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Authority Copywriting</h3>
                <p className="text-sm text-muted-foreground">Long-form articles, blogs, and sales copy that position you as the undeniable expert.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <Video className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Video Scripting</h3>
                <p className="text-sm text-muted-foreground">Compelling, hook-driven scripts for short-form and long-form video that convert viewers into clients.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Email Nurture Systems</h3>
                <p className="text-sm text-muted-foreground">Automated drip sequences engineered to move prospects through the buyer journey effortlessly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Copywriting */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square bg-secondary/30">
              <Image
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
                alt="Professional Copywriting and Content Strategy"
                width={800}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Authority <span className="gold-gradient-text">Copywriting & SEO</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Words make or break businesses. Our elite copywriters specialize in translating your expertise into high-impact written content that ranks on Google, commands reader attention, and systematically builds your authority. Every article is a strategic asset, not just a blog post.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Long-Form Technical Blogs & Articles",
                  "SEO-Optimized Website Copy",
                  "High-Converting Sales Page Copywriting",
                  "Thought Leadership Ghostwriting",
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

      {/* Feature 2: Video */}
      <section className="section-padding px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Cinematic <span className="gold-gradient-text">Video Scripting</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Video is the highest-converting content format on earth. We craft powerful narrative scripts engineered to hook viewers in the first three seconds and retain them all the way to the call-to-action. From YouTube deep-dives to 15-second TikTok virals, we deliver scripts built for maximum impact.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Short-Form Reels & TikTok Scripts",
                  "YouTube Long-Form Episode Scripts",
                  "Podcast Interviews & Show Notes",
                  "Corporate Explainer & Ad Scriptwriting",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square bg-secondary/30">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
                alt="Professional Video Production Studio Setup"
                width={800}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Email */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square bg-secondary/30">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                alt="Email Marketing Automation and Nurture Sequences"
                width={800}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Automated <span className="gold-gradient-text">Email Nurture Systems</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Your email list is your most valuable owned asset — and it's being utterly wasted if you're not using it strategically. We build highly personalized, behavior-triggered drip sequences that guide your subscribers from initial curiosity to confident purchase decision, automatically.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Automated Welcome & Onboarding Sequences",
                  "Behavior-Triggered Nurture Campaigns",
                  "Weekly Newsletter Strategy & Writing",
                  "A/B Testing for Subject Lines & CTAs",
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
            <h2 className="text-3xl font-display font-bold mb-6">Stop Producing. Start Dominating.</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Let us build you a full content engine — from the written word to the spoken video — that works tirelessly to grow your authority and your revenue.
            </p>
            <MagneticButton as="a" href="/contact" className="hero-btn !w-full sm:!w-auto">
              Build My Content Strategy
            </MagneticButton>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
