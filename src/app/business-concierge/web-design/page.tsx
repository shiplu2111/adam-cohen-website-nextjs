import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Premium Web Design Services | Adam Cohen",
  description: "A website that works as hard as you do. We build premium, technical SEO-optimised websites specifically designed for optimal lead capture and conversion.",
};

export default function WebDesignPage() {
  return (
    <PageTransition>
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

      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative">
            <h2 className="text-3xl font-display font-bold mb-6">The Digital Hub of Your Expanding Empire</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 mb-10">
              <p>
                Your website is the critical nexus of all your digital marketing efforts. If traffic arrives but fails to convert due to poor UX, slow loading times, or uninspired aesthetics, your ad spend is fundamentally wasted. 
              </p>
              <p>
                We do not build digital brochures. We engineer sophisticated digital storefronts. By blending cutting-edge modern UI/UX design with technical SEO frameworks, aggressive page speed protocols, and seamless CRM integrations, we deliver a web property that not only captivates your audience but relentlessly captures leads.
              </p>
            </div>

            <h3 className="text-2xl font-display font-medium mb-6">Our Web Design Standards Include:</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Bespoke Custom UI/UX Interface Design",
                "Mobile-First Responsive Architectures",
                "Deep Technical SEO Structured Build",
                "Complex CRM & Email Gateway Integration",
                "Aggressive Loading Speed Optimisation",
                "Ongoing Iterative Support & Core Updates"
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
