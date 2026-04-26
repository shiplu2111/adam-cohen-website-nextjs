import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "High-Converting Inquiry Landing Pages | Adam Cohen",
  description: "Turn paid traffic into highly qualified inbound leads. Meticulously optimized landing pages built to capture inquiries and immediately book consultations.",
};

export default function InquiryLandingPage() {
  return (
    <PageTransition>
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Inquiry <span className="gold-gradient-text">Landing Page</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed">
            Hyper-optimized, single-focus landing pages built scientifically to capture inquiries and book verified consultations.
          </p>
          <MagneticButton as="a" href="/contact" className="hero-btn !px-10 !py-4 text-lg">
            Deploy a Conversion Funnel
          </MagneticButton>
        </div>
      </section>

      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative">
            <h2 className="text-3xl font-display font-bold mb-6">Converting Idle Traffic Into Actionable Revenue</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 mb-10">
              <p>
                Sending paid advertising traffic to a traditional homepage is a recipe for catastrophic bounce rates. Visitors face overwhelming choices and inevitably exit without taking action. You require a dedicated environment where the visitor has only one logical, highly appealing path to follow.
              </p>
              <p>
                We construct specialized inquiry landing pages designed with aggressive conversion-rate-optimization (CRO) principles. By systematically testing layouts, implementing persuasive direct-response copy, and simplifying the friction of contact forms or scheduling plugins, we drastically lower your Cost-Per-Acquisition (CPA).
              </p>
            </div>

            <h3 className="text-2xl font-display font-medium mb-6">Our Landing Page Architecture Includes:</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Direct-Response Conversion Copywriting",
                "Rigorous Layout A/B Testing Frameworks",
                "High-Value Lead Magnet Integration Mechanisms",
                "Advanced CRM & Automation Workflows",
                "Custom Dynamic Scheduling Calendars",
                "Real-Time Conversion Analytics Dashboards"
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
