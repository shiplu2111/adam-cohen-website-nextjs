"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const CallToAction = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background with distinct contrast */}
      <div className="absolute inset-0 bg-secondary/50 backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-12 md:p-20 border border-primary/20 bg-background/40"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Ready to Build Your <br />
            <span className="gold-gradient-text">Own Empire?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
            Whether you're looking for strategic investment, mentorship, or a visionary 
            partnership—let's discuss how we can accelerate your mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <MagneticButton as="a" href="/contact" className="hero-btn !px-12 !py-6 text-lg">
              Book a Call
            </MagneticButton>
            <MagneticButton as="a" href="/services" className="hero-btn-outline !px-12 !py-6 text-lg">
              Work With Me
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
