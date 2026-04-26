"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";

interface StoryBlock {
  age: string;
  title: string;
  text: string;
}

interface Achievement {
  val: string;
  label: string;
  desc: string;
}

interface AboutHero {
  label?: string;
  title_main?: string;
  title_gold?: string;
  description?: string;
  image?: string;
  vision_label?: string;
  vision_title_main?: string;
  vision_title_gold?: string;
  vision_content_1?: string;
  vision_content_2?: string;
  quote_text?: string;
  quote_attribution?: string;
  diff_label?: string;
  diff_title_main?: string;
  diff_title_gold?: string;
}

interface Difference {
  title: string;
  description: string;
}

interface AboutPageClientProps {
  hero: AboutHero | null;
  storyBlocks: StoryBlock[];
  achievements: Achievement[];
  differences: Difference[];
}

export default function AboutPageClient({ hero, storyBlocks, achievements, differences }: AboutPageClientProps) {
  const heroData = hero || {
    label: "The Man Behind The Mission",
    title_main: "The Story Behind",
    title_gold: "Adam Cohen",
    description: "A journey defined by calculated risks, relentless discipline, and a vision that started at the age of 16. From a single ambition to a global empire.",
    image: "/mm.png"
  };

  return (
    <PageTransition>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-medium">{heroData.label}</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
                  {heroData.title_main} <br />
                  <span className="gold-gradient-text">{heroData.title_gold}</span>
                </h1>
                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
                  <p>
                    A UK-born entrepreneur with 35+ years of business experience. From launching his first company at 16 in London to becoming a leading real estate investor in the US, Adam brings unmatched expertise in investment, finance, and brand building.

                  </p>

                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden gold-glow group">
                  <img src={heroData.image} alt={heroData.title_gold} className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Chronicles</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">The Path to <span className="gold-gradient-text">Mastery</span></h2>
            </motion.div>

            <div className="relative">
              {/* Central Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />

              <div className="space-y-24 relative z-10">
                {storyBlocks.map((block, i) => (
                  <div key={block.age} className="relative">
                    {/* Alternating Row */}
                    <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-0`}>
                      {/* Content Column */}
                      <motion.div
                        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className={`w-full md:w-[45%] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                      >
                        <div className="glass-card p-8 md:p-10 border border-primary/10 hover:border-primary/30 transition-all duration-500">
                          <span className="text-5xl font-display font-bold gold-gradient-text block mb-4">{block.age}</span>
                          <h3 className="text-2xl font-display font-bold mb-4">{block.title}</h3>
                          <p className="text-muted-foreground leading-relaxed font-light">{block.text}</p>
                        </div>
                      </motion.div>

                      {/* Timeline Node (Center) */}
                      <div className="hidden md:flex w-[10%] justify-center items-center relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          className="w-4 h-4 rounded-full bg-primary relative z-10"
                        >
                          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                        </motion.div>
                        {/* Connecting Line to Card */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-1/2 h-px bg-primary/20 ${i % 2 === 0 ? "right-1/2" : "left-1/2"}`} />
                      </div>

                      {/* Spacer Column */}
                      <div className="hidden md:block w-[45%]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section-padding px-6 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Records</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Business <span className="gold-gradient-text">Milestones</span></h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {[
                { val: "35+", label: "Years in Business", desc: "" },
                { val: "34K+", label: "LinkedIn Followers", desc: "" },
                { val: "Top 1%", label: "LinkedIn Profile", desc: "" },
                { val: "25+", label: "Years in USA", desc: "" },
                { val: "16", label: "Age at First Business", desc: "" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="glass-card p-8 text-center border border-primary/10 group transition-all duration-500"
                >
                  <p className="text-3xl lg:text-4xl font-display font-bold gold-gradient-text mb-4">{item.val}</p>
                  <p className="text-base lg:text-lg font-semibold">{item.label}</p>
                  {item.desc && <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">{heroData.vision_label || "The North Star"}</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                  {heroData.vision_title_main || "Vision &"} <span className="gold-gradient-text">{heroData.vision_title_gold || "Leadership"}</span>
                </h2>
                <div className="space-y-6 text-xl text-muted-foreground font-light leading-relaxed">
                  <p>
                    {heroData.vision_content_1 || "I believe leadership isn't about control—it's about expansion. My vision is to build ecosystems where raw talent is refined into market-dominating force through absolute strategy and unyielding discipline."}
                  </p>
                  <p>
                    {heroData.vision_content_2 || "True sovereignty comes from the ability to engineer your own reality. I'm building a world where builders don't just survive, they conquer."}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-12 md:p-16 border-l-4 border-primary"
              >
                <svg className="w-12 h-12 text-primary/30 mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl md:text-3xl font-display font-medium italic leading-relaxed">
                  "{heroData.quote_text || "Sovereignty is not given; it is engineered. We don't wait for opportunity; we build the systems that manifest it."}"
                </p>
                <p className="mt-8 font-display font-bold text-lg">— {heroData.quote_attribution || "Adam Cohen"}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section (Launching Our Brand) */}
        <section className="section-padding px-6 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gold-gradient-text tracking-wider uppercase mb-4">
                Launching Our Brand
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground italic font-light">
                A New Chapter in Business Excellence
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 md:p-14 border border-primary/10 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-center gap-6 mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                  </svg>
                  <h3 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text">Our Mission</h3>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  Empower professionals and business owners with the tools and guidance needed to thrive. We are excited to announce a new suite of services dedicated to brand development and management.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-10 md:p-14 border border-primary/10 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-center gap-6 mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                    <path d="M9 22v-4h6v4"/>
                    <path d="M8 6h.01"/>
                    <path d="M16 6h.01"/>
                    <path d="M12 6h.01"/>
                    <path d="M12 10h.01"/>
                    <path d="M12 14h.01"/>
                    <path d="M16 10h.01"/>
                    <path d="M16 14h.01"/>
                    <path d="M8 10h.01"/>
                    <path d="M8 14h.01"/>
                  </svg>
                  <h3 className="text-3xl md:text-4xl font-display font-bold gold-gradient-text">Our Vision</h3>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  Adam Cohen Today, Inc. marks a new chapter, created to showcase our experience and innovative business solutions — tailored for those ready to stand out in today's competitive landscape.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Sets Adam Apart */}
        <section className="section-padding px-6 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">{heroData.diff_label || "Differentiation"}</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                {heroData.diff_title_main || "What Sets"} <span className="gold-gradient-text">{heroData.diff_title_gold || "Adam Apart"}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(differences.length > 0 ? differences : [
                { title: "Discipline", description: "The unshakeable foundation of every breakthrough." },
                { title: "Strategy", description: "Seeing the chessboard 10 steps before the first move." },
                { title: "Execution", description: "Turning high-level concepts into market dominance." },
                { title: "Mindset", description: "The absolute refusal to accept artificial limits." },
              ]).map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-10 border border-primary/5 hover:border-primary/20 transition-all duration-500 group"
                >
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:gold-text transition-colors">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed italic">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-20 text-center border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight uppercase gold-gradient-text">
                BUILD YOUR BRAND & <br />
                ACHIEVE SUCCESS
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Ready to take your business to the next level? Join Adam Cohen Today, Inc. and discover how our expertise and innovative services can help you build a powerful brand and achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton as="a" href="/contact" className="hero-btn !px-12 !py-6">
                  Book a Call
                </MagneticButton>
                <MagneticButton as="a" href="/contact" className="hero-btn-outline !px-12 !py-6">
                  Work With Me
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
