"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface HomeProjectCardProps {
  project: {
    id?: string;
    title: string;
    location?: string;
    metric?: string;
    category: string;
    description: string;
    image: string;
    live_url?: string;
  };
  index: number;
  onClick?: () => void;
}

const HomeProjectCard = ({ project, index, onClick }: HomeProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-500 flex flex-col h-full bg-[#111111]"
    >
      {/* Photo */}
      <div className="relative h-64 overflow-hidden">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Tag badge (Top Right) */}
        <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-black/50 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-sm">
          {project.metric || "Project"}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 bg-[#111111] border border-border/60 border-t-0 rounded-b-2xl p-8 group-hover:border-primary/30 transition-colors duration-500 space-y-4">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-2">
            {project.category}
          </p>
          <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed font-light line-clamp-3">
          {project.description}
        </p>

        {project.live_url && (
          <div className="pt-4">
            <a 
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF37] hover:text-white transition-colors duration-300"
            >
              Live Preview <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HomeProjectCard;
