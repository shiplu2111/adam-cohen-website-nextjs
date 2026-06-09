"use client";

import { motion } from "framer-motion";
import HomeProjectCard from "./HomeProjectCard";
import MagneticButton from "./MagneticButton";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
  comingSoon?: boolean;
}

const ProjectsSection = ({ projects = [] }: { projects?: ProjectProps[] }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const liveProjects = projects.filter((p) => !p.comingSoon);
  const comingSoonProjects = projects.filter((p) => p.comingSoon);

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

        {/* Live ventures */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveProjects.map((project, i) => (
            <HomeProjectCard
              key={project.id || project.title}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Coming soon */}
        {comingSoonProjects.length > 0 && (
          <div className="mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-primary text-sm tracking-[0.35em] uppercase mb-3 font-semibold">
                Coming Soon
              </p>
              <div className="w-24 h-px gold-gradient-bg mx-auto opacity-60" />
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comingSoonProjects.map((project, i) => (
                <HomeProjectCard
                  key={project.id || project.title}
                  project={project}
                  index={liveProjects.length + i}
                  comingSoon
                />
              ))}
            </div>
          </div>
        )}

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
        <DialogContent 
          className="max-w-3xl p-0 overflow-hidden bg-[#0B0B0B] border-white/10 rounded-[2rem]"
          data-lenis-prevent
        >
          {selectedProject && (
            <div className="flex flex-col max-h-[90vh] overflow-y-auto text-white custom-scrollbar">
              {/* Full-width brand graphic hero */}
              <div className="relative w-full shrink-0 bg-[#0a0a0a]">
                <div className="relative w-full aspect-[16/10] max-h-[360px] md:max-h-[400px] flex items-center justify-center overflow-hidden">
                  {selectedProject.image ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain object-center"
                    />
                  ) : (
                    <span className="text-4xl font-display font-bold gold-gradient-text opacity-30">
                      {selectedProject.title.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-black/80 transition-colors z-10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col gap-6">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                    {selectedProject.category}
                  </span>
                  <DialogTitle className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                    {selectedProject.title}
                  </DialogTitle>
                  {selectedProject.location && (
                    <div className="flex items-center gap-1.5 text-sm text-white/40">
                      <MapPin className="h-4 w-4 text-primary" /> {selectedProject.location}
                    </div>
                  )}
                </div>

                {(selectedProject.metric || !selectedProject.comingSoon) && (
                  <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-6">
                    {selectedProject.metric && (
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Key Metric</p>
                        <p className="text-xl font-display font-bold text-primary flex items-center gap-2">
                          <BarChart3 className="h-5 w-5" /> {selectedProject.metric}
                        </p>
                      </div>
                    )}
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Status</p>
                      <p className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {selectedProject.comingSoon ? "Coming Soon" : "Active"}
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">The Engagement</p>
                  <DialogDescription className="text-base md:text-lg text-white/70 font-light leading-relaxed">
                    {selectedProject.description}
                  </DialogDescription>
                </div>

                {selectedProject.live_url && (
                  <div className="pt-2">
                    <a
                      href={selectedProject.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-btn w-full inline-flex items-center justify-center gap-3 py-4 text-base"
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
