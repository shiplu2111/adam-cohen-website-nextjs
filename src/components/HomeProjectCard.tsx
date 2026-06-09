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
    comingSoon?: boolean;
  };
  index: number;
  onClick?: () => void;
  comingSoon?: boolean;
}

const HomeProjectCard = ({ project, index, onClick, comingSoon = false }: HomeProjectCardProps) => {
  const isComingSoon = comingSoon || project.comingSoon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={isComingSoon ? undefined : { y: -6 }}
      onClick={isComingSoon ? undefined : onClick}
      className={`group relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full bg-[#111111] ${
        isComingSoon
          ? "opacity-90 border border-dashed border-primary/25"
          : "cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
      }`}
    >
      {/* CMS brand graphic */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-contain object-center p-1 transition-transform duration-700 ${
              isComingSoon ? "grayscale opacity-55" : "group-hover:scale-[1.02]"
            }`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1508] via-[#111111] to-[#0a0a0a] flex items-center justify-center">
            <span className="text-5xl font-display font-bold gold-gradient-text opacity-30">
              {project.title.split(" ").slice(0, 2).map((w) => w[0]).join("")}
            </span>
          </div>
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none ${isComingSoon ? "from-black/60" : ""}`} />

        {/* Tag badge (Top Right) */}
        <span className={`absolute top-4 right-4 text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full backdrop-blur-sm ${
          isComingSoon
            ? "bg-primary/20 text-primary border border-primary/40"
            : "bg-black/50 text-[#D4AF37] border border-[#D4AF37]/30"
        }`}>
          {isComingSoon ? "Coming Soon" : (project.metric || "Project")}
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
