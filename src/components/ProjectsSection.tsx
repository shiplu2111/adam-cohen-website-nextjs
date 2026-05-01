"use client";

import { motion } from "framer-motion";
import HomeProjectCard from "./HomeProjectCard";
import MagneticButton from "./MagneticButton";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, MapPin, BarChart3, Calendar, Briefcase, ExternalLink } from "lucide-react";

interface ProjectProps {
  id?: string;
  title: string;
  location?: string;
  metric?: string;
  category: string;
  description: string;
  image: string;
  live_url?: string;
}

const ProjectsSection = ({ projects = [] }: { projects?: ProjectProps[] }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Brands &amp; <span className="gold-gradient-text">Ventures</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-muted-foreground max-w-xl mx-auto font-light"
          >
            A curated portfolio of companies built, funded, and scaled across industries.
          </motion.p>
        </div>

        {/* Cards Grid - Restored to 3 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <HomeProjectCard 
              key={project.title} 
              project={project} 
              index={i} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <MagneticButton as="a" href="/portfolio" className="hero-btn-outline !py-4 !px-10 text-sm font-bold tracking-widest uppercase">
            Show More
          </MagneticButton>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-[#0B0B0B] border-white/10 rounded-[2rem]">
          {selectedProject && (
            <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden text-white">
              {/* Left: Image */}
              <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 left-6 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white lg:hidden"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Right: Content */}
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col gap-8 lg:overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                      {selectedProject.category}
                    </span>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="hidden lg:block p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-white/40">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-primary" /> {selectedProject.location}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-8">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Key Metric</p>
                    <p className="text-2xl font-display font-bold text-primary flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" /> {selectedProject.metric}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Status</p>
                    <p className="text-xl font-display font-bold text-white flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" /> Active
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">The Engagement</p>
                  <p className="text-lg text-white/70 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.live_url && (
                  <div className="pt-4 mt-auto">
                    <a 
                      href={selectedProject.live_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hero-btn w-full inline-flex items-center justify-center gap-3 py-5 text-lg"
                    >
                      Visit Live Preview <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
