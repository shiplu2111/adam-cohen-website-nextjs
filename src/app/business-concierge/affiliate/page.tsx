import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Affiliate Marketing Program Development | Adam Cohen",
  description: "Earn predictable revenue while you sleep. We construct and manage lucrative affiliate marketing systems that generate true passive revenue streams.",
};

export default function AffiliateMarketingPage() {
  return (
    <PageTransition>
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

      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative">
            <h2 className="text-3xl font-display font-bold mb-6">Scale Traffic Risk-Free Using Strategic Partnerships</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 mb-10">
              <p>
                In shifting economic landscapes, relying purely on upfront paid ad spend is highly volatile. Affiliate marketing flips the script, allowing you to recruit a decentralized sales army of influencers, marketers, and industry giants who assume the financial risk of advertising, and you only pay them when a sale is mathematically confirmed.
              </p>
              <p>
                We construct, launch, and carefully manage elite affiliate programs. We handle the technological tracking infrastructure, negotiate highly attractive yet profitable commission tiers, and actively headhunt top-tier affiliates that align seamlessly with your brand's ethical and aesthetic standards.
              </p>
            </div>

            <h3 className="text-2xl font-display font-medium mb-6">Our Full-Stack Affiliate Deployment System:</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Enterprise Affiliate Platform Setup & Tracking",
                "High-Volume Partner & Influencer Recruitment",
                "Profitable Commission Structure Modeling",
                "Rigorous Fraud Prevention & Monitoring",
                "Accurate Transparent Payout Reporting",
                "Continuous Funnel Conversions Optimisation"
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
