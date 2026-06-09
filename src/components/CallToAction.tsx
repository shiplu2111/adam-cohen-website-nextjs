"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const CallToAction = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Colorful ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111008] to-[#0a0a0a]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-10 sm:p-12 md:p-20 border border-[#D4AF37]/30 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(17,16,8,0.95) 45%, rgba(212,175,55,0.08) 100%)",
            boxShadow: "0 0 80px rgba(212,175,55,0.12), inset 0 1px 0 rgba(212,175,55,0.15)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 gold-gradient-bg opacity-80" />
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#D4AF37]/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-amber-500/15 blur-2xl pointer-events-none" />

          <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.35em] uppercase mb-5 sm:mb-6 font-bold">
            Take the Next Step
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 sm:mb-8 leading-tight text-white">
            Ready to build{" "}
            <span className="gold-gradient-text">YOUR Empire</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 sm:mb-12 font-light leading-relaxed">
            Whether you&apos;re looking for strategic investment, mentorship, or a visionary
            partnership—let&apos;s discuss how we can accelerate your mission.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <MagneticButton as="a" href="/contact" className="hero-btn !px-10 sm:!px-12 !py-5 sm:!py-6 text-base sm:text-lg w-full sm:w-auto">
              Book a Call
            </MagneticButton>
            <MagneticButton as="a" href="/services" className="hero-btn-outline !px-10 sm:!px-12 !py-5 sm:!py-6 text-base sm:text-lg w-full sm:w-auto border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10">
              Work With Me
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
