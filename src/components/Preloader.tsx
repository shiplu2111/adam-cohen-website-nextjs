"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  useEffect(() => {
    let raf: number;
    let start = Date.now();
    const duration = 2200;

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("reveal");
        setTimeout(onComplete, 800);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "reveal" ? null : undefined}
      <motion.div
        key="preloader"
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            <span className="gold-gradient-text">ADAM</span>
            <span className="text-foreground/60 ml-2">COHEN</span>
          </span>
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-border/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full gold-gradient-bg"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Counter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 font-display text-sm text-muted-foreground tracking-[0.3em]"
        >
          {progress}%
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
