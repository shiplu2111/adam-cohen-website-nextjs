import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2 } from "lucide-react";

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

      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative">
            <h2 className="text-3xl font-display font-bold mb-6">Capture Attention, Cultivate Loyalty, Drive Sales</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 mb-10">
              <p>
                In a hyper-competitive digital market, attention is capital. Social media handles the dual task of capturing raw reach and slowly nurturing that audience into an engaged, rapidly buying community. However, trying to manage platforms like Instagram, TikTok, Facebook, and X in-house often leads to burnout and fractured branding.
              </p>
              <p>
                Our full-service social media management integrates seamlessly with your business. We don't just post pretty pictures; we develop conversion-led ecosystems. We handle the content ideation, scheduling, community engagement, and algorithmic growth tactics. You focus entirely on closing the opportunities we deliver.
              </p>
            </div>

            <h3 className="text-2xl font-display font-medium mb-6">Our Full-Service Social Ecosystem Includes:</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Omni-Platform Strategy & Management",
                "Viral Short-Form Reels & TikTok Production",
                "Active Daily Community Engagement",
                "Paid Social Advertising Configuration",
                "Brand Voice Synchronization",
                "Monthly Algorithmic Performance Reports"
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
