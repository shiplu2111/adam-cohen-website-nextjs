"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gold-glow group">
              <img
                src="/gallery/33jpeg"
                alt="Adam Cohen"
                className="w-full h-[500px] lg:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 gold-gradient-bg opacity-10 rounded-2xl -z-10 blur-2xl" />
          </motion.div>

          {/* Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                The Architect of Empires
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                Founder & <br />
                <span className="gold-gradient-text">Entrepreneur.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light"
            >
              <p>
                Adam Cohen is a UK-born entrepreneur who has called the United States home for over 25 years. With deep expertise in real estate investment, business, and finance, Adam has built a reputation for helping clients achieve remarkable results.

              </p>
              {/* <p>
                I believe that true entrepreneurship is an art form—a synthesis of cold, hard
                strategy and human-centric vision. My philosophy is rooted in the belief that
                when you empower people with the right systems, momentum becomes inevitable.
              </p> */}
              <p className="text-foreground font-medium italic border-l-2 border-primary pl-6 py-2">
                "His dynamic approach and international perspective set him apart in today's competitive market.
                "
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-12 pt-4"
            >
              {[
                { val: "35+", label: "Years of Mastery" },
                { val: "25+", label: "Years in the US" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-4xl font-display font-bold gold-gradient-text">{s.val}</p>
                  <p className="text-sm tracking-widest uppercase text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
