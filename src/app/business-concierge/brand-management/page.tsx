import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Premium Corporate Brand Management | Adam Cohen",
  description: "Your brand is your most valuable asset. We deliver premium brand identity, visual system guidelines, and robust reputation management to position you above competitors.",
};

export default function BrandManagementPage() {
  return (
    <PageTransition>
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

      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative">
            <h2 className="text-3xl font-display font-bold mb-6">Build a Legacy That Speaks For Itself</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 mb-10">
              <p>
                A fragmented brand signals amateurism. The highest-earning businesses in the world command a visual and verbal identity that immediately establishes authority, trust, and price elasticity. Without stringent brand management, scaling companies naturally dilute their message and lose their foundational aesthetic integrity.
              </p>
              <p>
                We serve as your dedicated brand guardians. From generating highly cohesive visual architectures and logo applications to mapping out strict tone-of-voice frameworks for all outbound communications, we make sure your company looks and sounds like an industry leader at every single touchpoint.
              </p>
            </div>

            <h3 className="text-2xl font-display font-medium mb-6">Core Components of Our Brand Framework:</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Comprehensive Brand Identity & Book",
                "Logos, Typography & Visual Systems",
                "Messaging & Tone of Voice Frameworks",
                "Strategic Competitor Positioning",
                "Digital Reputation PR Management",
                "Quarterly Brand Consistency Audits"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
