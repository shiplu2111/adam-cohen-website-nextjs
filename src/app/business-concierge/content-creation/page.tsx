import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Strategic Digital Content Creation | Adam Cohen",
  description: "Content that builds empires. Masterful copywriting, video scripting, and email sequencing that educates, builds trust, and definitively drives action.",
};

export default function ContentCreationPage() {
  return (
    <PageTransition>
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

      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative">
            <h2 className="text-3xl font-display font-bold mb-6">Content is the Currency of the Digital Age</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 mb-10">
              <p>
                In an era overwhelmed with noise, generic content simply dies in the void. True industry leaders utilize content as a psychological mechanism to educate their market, overcome complex buyer objections, and establish themselves as the preeminent authority in their respective fields.
              </p>
              <p>
                Our strategic content creation suite encompasses high-converting copywriting, SEO-driven long-form articles, engaging video scripts, and highly personalized email nurture sequences. We ensure the right message meets the right prospect at the exact right time in their purchasing journey.
              </p>
            </div>

            <h3 className="text-2xl font-display font-medium mb-6">The Arsenal Delivered by Our Content Team:</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Long-Form Technical Blogs & Articles",
                "Automated Drip Email Nurture Sequences",
                "Short-Form & YouTube Video Scripts",
                "Comprehensive Podcast Show Notes",
                "Engaging Weekly Newsletter Management",
                "High-Converting Sales Asset Copywriting"
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
