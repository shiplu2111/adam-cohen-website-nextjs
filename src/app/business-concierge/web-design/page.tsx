import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2, MonitorSmartphone, MousePointerClick, BarChart3 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Premium Web Design Services | Adam Cohen",
  description: "A website that works as hard as you do. We build premium, technical SEO-optimised websites specifically designed for optimal lead capture and conversion.",
};

export default function WebDesignPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Web <span className="gold-gradient-text">Design</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed">
            Premium, conversion-optimised websites structurally designed to impress aesthetics and massively drive performance.
          </p>
          <MagneticButton as="a" href="/contact" className="hero-btn !px-10 !py-4 text-lg">
            Redesign Your Digital Home
          </MagneticButton>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative text-center">
            <h2 className="text-3xl font-display font-bold mb-6">The Digital Hub of Your Expanding Empire</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed mb-10">
              <p>
                Your website is the critical nexus of all your digital marketing efforts. If traffic arrives but fails to convert due to poor UX, slow loading times, or uninspired aesthetics, your ad spend is fundamentally wasted. 
              </p>
              <p>
                We do not build digital brochures. We engineer sophisticated digital storefronts. By blending cutting-edge modern UI/UX design with technical SEO frameworks, aggressive page speed protocols, and seamless CRM integrations, we deliver a web property that not only captivates your audience but relentlessly captures leads.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left mt-12">
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <MousePointerClick className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Bespoke UI/UX</h3>
                <p className="text-sm text-muted-foreground">Custom-crafted interfaces designed to guide users seamlessly toward conversion.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <MonitorSmartphone className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Omni-Device Ready</h3>
                <p className="text-sm text-muted-foreground">Flawless, mobile-first responsive architecture across all screen sizes.</p>
              </div>
              <div className="p-6 bg-secondary/30 rounded-xl border border-border/50">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Conversion Focus</h3>
                <p className="text-sm text-muted-foreground">Deep CRM integration and strategic funnels built to maximize your ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: UI/UX Design */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/wdes-uiux.png" 
                alt="Premium UI/UX Design Studio Workspace" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Bespoke <span className="gold-gradient-text">UI/UX Architecture</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                A premium brand requires a premium digital aesthetic. We build entirely custom visual experiences tailored to your corporate identity. No templates. No shortcuts. Just pixel-perfect wireframing and high-fidelity interface design.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Custom High-Fidelity UI Prototyping",
                  "User Journey & Persona Mapping",
                  "Micro-Interactions & Premium Animations",
                  "Accessibility & Web Content Guidelines",
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

      {/* Feature 2: Responsive Build */}
      <section className="section-padding px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Flawless <span className="gold-gradient-text">Responsive Scaling</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                With the majority of web traffic originating from mobile devices, a desktop-only mentality is fatal. Our mobile-first development approach guarantees that your site looks stunning and functions perfectly whether viewed on an iPhone, an iPad, or a 4K monitor.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "True Mobile-First Engineering",
                  "Fluid Grid Systems & Typography",
                  "Touch-Optimised Navigation",
                  "Cross-Browser Compatibility",
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
                src="/images/services/wdes-responsive.png" 
                alt="Responsive Web Design Across Multiple Devices" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Conversion & Tech */}
      <section className="section-padding px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group aspect-video md:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image 
                src="/images/services/wdes-conversion.png" 
                alt="Website Conversion Funnel and Analytics Dashboard" 
                width={800} 
                height={800} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Engineered For <span className="gold-gradient-text">Conversion</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Traffic is meaningless without action. We structurally optimize every page for technical SEO and lead generation. From strategically placed calls-to-action to complex CRM backend integrations, your site becomes a relentless, 24/7 sales asset.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Deep Technical SEO Structured Build",
                  "Complex CRM & Email Gateway Integration",
                  "Aggressive Loading Speed Optimization",
                  "Ongoing Iterative Support & Core Updates",
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
            <h2 className="text-3xl font-display font-bold mb-6">Upgrade Your Digital Storefront</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Ready to leave slow, outdated websites behind? Partner with us to build a premium web presence that actively drives your business forward.
            </p>
            <MagneticButton as="a" href="/contact" className="hero-btn !w-full sm:!w-auto">
              Start Your Web Project
            </MagneticButton>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
