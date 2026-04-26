"use client";

import { motion } from "framer-motion";

interface AudioVisualizerProps {
  isPlaying: boolean;
  barColor?: string;
  count?: number;
}

export default function AudioVisualizer({ 
  isPlaying, 
  barColor = "#D4AF37", 
  count = 12 
}: AudioVisualizerProps) {
  const bars = Array.from({ length: count });

  return (
    <div className="flex items-center justify-center gap-[3px] h-6 px-2">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          animate={{ 
            height: isPlaying 
              ? [4, Math.random() * 16 + 8, 4] 
              : 4 
          }}
          transition={{ 
            duration: isPlaying ? 0.6 + Math.random() * 0.4 : 0.2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: i * 0.05
          }}
          className="w-1 rounded-full opacity-80"
          style={{ backgroundColor: barColor }}
        />
      ))}
    </div>
  );
}
