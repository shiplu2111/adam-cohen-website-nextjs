"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
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

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative rounded-[2.5rem] overflow-hidden cursor-pointer aspect-[4/5] md:aspect-[3/4] bg-[#0B0B0B] border border-white/5 h-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-60"
          />
        )}
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Top Bar: Category & Metric */}
      <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-10">
        <span className="px-5 py-2.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-white group-hover:border-primary/40 transition-colors duration-500">
          {project.category}
        </span>
        <span className="text-xl font-display font-bold text-primary group-hover:scale-110 transition-transform duration-500">
          {project.metric}
        </span>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end min-h-[50%] z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="space-y-1">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
              {project.location}
            </p>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary group-hover:text-white transition-colors duration-500">
                {project.title}
              </h3>
              {/* Interactive Dot Icon */}
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:scale-110 transition-all duration-500">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
              </div>
            </div>
          </div>

          <p className="text-sm md:text-base text-white/60 leading-relaxed font-light line-clamp-3 group-hover:text-white/80 transition-colors duration-500 max-w-md">
            {project.description}
          </p>

          {project.live_url && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-2"
            >
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
              >
                Learn More
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-[2.5rem] transition-all duration-700 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
