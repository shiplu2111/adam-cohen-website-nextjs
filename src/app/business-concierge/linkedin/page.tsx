import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Professional LinkedIn Management & Growth | Adam Cohen",
  description: "Dominate your industry's feed. Expert LinkedIn profile optimisation, content strategy, and strategic outbound lead generation tailored for executives and founders.",
};

export default function LinkedInPage() {
  return (
    <PageTransition>
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            LinkedIn <span className="gold-gradient-text">Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 leading-relaxed">
            We build and manage your LinkedIn presence so you become the undeniable go-to authority in your niche.
          </p>
          <MagneticButton as="a" href="/contact" className="hero-btn !px-10 !py-4 text-lg">
            Start Growing Today
          </MagneticButton>
        </div>
      </section>

      {/* Social Media Success Highlight Section */}
      <section className="section-padding px-6 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text tracking-wider uppercase">
              Social Media Success
            </h2>
          </div>

          {/* Intro Section with LinkedIn Logo */}
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
            <div className="w-32 h-32 shrink-0 lg:w-40 lg:h-40">
              <svg className="w-full h-full text-[#DEB841] drop-shadow-[0_0_20px_rgba(222,184,65,0.4)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Proven Track Record on LinkedIn & Social Media
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Adam Cohen's strategies have helped clients expand their reach, engage audiences, and drive long-term success. Our approach leverages LinkedIn and social media to accelerate business growth and build strong professional networks.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { val: "25+", label: "Years Experience" },
              { val: "500+", label: "Clients Served" },
              { val: "10x", label: "Network Growth" }
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-10 text-center border border-primary/10 transition-all hover:border-primary/30"
              >
                <p className="text-5xl font-display font-bold gold-gradient-text mb-4">{stat.val}</p>
                <p className="text-lg font-medium text-foreground/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 md:p-14 mb-16 relative">
            <h2 className="text-3xl font-display font-bold mb-6">Why Your LinkedIn Strategy Matters</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed space-y-6 mb-10">
              <p>
                In today's digital ecosystem, your LinkedIn profile is more than just a digital resume — it is an active extension of your business identity. For founders, executives, and high-level consultants, maintaining a static profile is a massive missed opportunity for strategic partnerships, lucrative B2B client acquisition, and overall industry dominance.
              </p>
              <p>
                Our premium LinkedIn management services are built to transform your personal and company profiles into highly-tuned inbound lead generation engines. By marrying targeted multi-media content distribution with strategic outbound outreach strategies, we ensure your insights capture the attention of the key decision-makers who drive revenue in your sector.
              </p>
            </div>

            <h3 className="text-2xl font-display font-medium mb-6">Key Outcomes of Our Bespoke LinkedIn Program:</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                "Executive Profile & Custom Banner Optimisation",
                "Data-Driven Weekly Content Calendar Production",
                "Premium Ghostwriting for Thought Leadership",
                "Targeted B2B Lead Generation & Inbox Outreach",
                "Strategic Network and Connection Growth",
                "Comprehensive Analytics & Monthly ROI Reporting"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-10 md:p-14 mb-16 relative">
            <h2 className="text-3xl font-display font-bold mb-6">Our 4-Step Methodology</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">1. The Absolute Audit</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We begin by forensically analyzing your current profile, network, and competitor landscape. We rewrite your headline, “About” section, and experience to transition you from a resume format into a highly lucrative landing page.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">2. Content Matrix Creation</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Based on your key performance indicators, we build an active 30-day content calendar. Our expert copywriters ghostwrite engaging, authentic industry insights that trigger algorithmic distribution and validate your authority.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">3. Strategic Outbound Networking</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We don't just wait for inbound traffic. We define your ideal customer profile (ICP) and actively run sequence-based outreach to C-level executives, securing you high-ticket meetings and partnerships directly in your inbox.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">4. Review, Refine & Scale</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We conduct monthly data reviews to analyze the performance of every post and message. We eliminate what doesn't convert and double down on the highest-yield engagement tactics.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 md:p-14 relative bg-primary/5">
            <h2 className="text-3xl font-display font-bold mb-6">Who Is This Program For?</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Our LinkedIn service is strictly tailored for high-achievers who understand the sheer leverage of a massive personal brand but lack the time to execute it. This is ideal for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-3 font-light mb-8">
              <li>Founders & CEOs aiming to attract elite talent and top-tier investors.</li>
              <li>Enterprise Sales Directors expanding their B2B deal-flow pipeline.</li>
              <li>Consultants and Coaches looking to dominate their market niche.</li>
              <li>Real Estate & Private Equity Partners hunting for off-market syndications.</li>
            </ul>
            <MagneticButton as="a" href="/contact" className="hero-btn !w-full">
              Apply For Representation
            </MagneticButton>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
