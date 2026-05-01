"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import ProjectCard from "@/components/ProjectCard";
import { getCmsData } from "@/lib/cms";
import { Loader2, X, MapPin, BarChart3, Calendar, Briefcase, ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  location?: string;
  metric?: string;
  category: string;
  description: string;
  thumbnail: string;
  client?: string;
  date?: string;
  live_url?: string;
}

interface CaseStudy {
  title: string;
  problem: string;
  strategy: string;
  result: string;
}

interface PerformanceStat {
  val: string;
  label: string;
}

interface PortfolioPageClientProps {
  initialProjects: any[];
  meta: {
    total: number;
    current_page: number;
    last_page: number;
  };
  caseStudies: CaseStudy[];
  performanceStats: PerformanceStat[];
}

export default function PortfolioPageClient({ 
  initialProjects, 
  meta: initialMeta,
  caseStudies, 
  performanceStats 
}: PortfolioPageClientProps) {
  const [projects, setProjects] = useState<any[]>(initialProjects);
  const [meta, setMeta] = useState(initialMeta);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchMore = async () => {
    if (loading || meta.current_page >= meta.last_page) return;

    setLoading(true);
    const nextPage = meta.current_page + 1;
    
    try {
      const paginatedData = await getCmsData("projects", { page: nextPage, limit: 12 });
      if (paginatedData && paginatedData.data) {
        setProjects(prev => [...prev, ...paginatedData.data]);
        setMeta({
          total: paginatedData.total,
          current_page: paginatedData.current_page,
          last_page: paginatedData.last_page
        });
      }
    } catch (error) {
      console.error("Error fetching more projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loading, meta]);

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
    <PageTransition>
      <div className="bg-background overflow-x-hidden">
        {/* Hero Section */}
        <section className="pt-36 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-medium"
            >
              The Track Record
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-7xl lg:text-9xl font-display font-bold leading-tight mb-8"
            >
              Proven Results <br />
              <span className="gold-gradient-text">& Real Deals.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Credibility is built through action, not words. Explore the portfolio of 
              high-stakes acquisitions and strategic transformations that define the Cohen standard.
            </motion.p>
          </div>
        </section>

        {/* Project Grid */}
        <section className="section-padding px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, i) => (
                <ProjectCard 
                  key={project.id} 
                  project={{
                    ...project,
                    image: project.thumbnail,
                  }} 
                  index={i % 12} 
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {/* Load More Trigger */}
            <div ref={loadMoreRef} className="h-20 flex items-center justify-center mt-20">
              {loading && (
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="h-10 w-10 animate-spin text-primary" />
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground animate-pulse">Loading Landmark Deals...</p>
                </div>
              )}
              {!loading && meta.current_page >= meta.last_page && projects.length > 0 && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-muted-foreground uppercase tracking-widest font-light"
                >
                  The Full Track Record is Displayed.
                </motion.p>
              )}
            </div>
          </div>
        </section>

        {/* Detailed Case Studies */}
        <section className="section-padding px-6 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
              >
                Deep Dive
              </motion.p>
              <h2 className="text-4xl md:text-6xl font-display font-bold">Featured <span className="gold-gradient-text">Case Studies.</span></h2>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, i) => (
                <motion.div 
                  key={study.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-12 md:p-16 border border-primary/10 grid lg:grid-cols-3 gap-12 hover:border-primary/30 transition-all duration-500"
                >
                  <div className="lg:col-span-1">
                    <p className="text-xs tracking-widest text-primary uppercase mb-3 font-bold">The Engagement</p>
                    <h3 className="text-3xl font-display font-bold leading-tight mb-6">{study.title}</h3>
                    <div className="w-12 h-1 bg-primary" />
                  </div>
                  
                  <div className="lg:col-span-2 grid md:grid-cols-3 gap-10">
                    <div className="space-y-4">
                      <p className="text-xs tracking-widest uppercase text-muted-foreground font-bold">Problem</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{study.problem}</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs tracking-widest uppercase text-muted-foreground font-bold">Strategy</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{study.strategy}</p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xs tracking-widest uppercase text-primary font-bold">Result</p>
                      <p className="text-sm leading-relaxed text-foreground font-semibold">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Elite Trust Metrics */}
        <section className="py-24 px-6 bg-secondary/20 border-y border-primary/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              {performanceStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-6xl md:text-7xl font-display font-bold gold-gradient-text mb-4">
                    {stat.val}
                  </p>
                  <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="section-padding px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-16 md:p-24 border border-primary/30 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 relative overflow-hidden"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Want Similar <br />
                <span className="gold-gradient-text">Results?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto font-light leading-relaxed">
                Strategic capital and expert execution wait for no one. Let's discuss your next 
                landmark move today.
              </p>
              <MagneticButton as="a" href="/book" className="hero-btn !px-12 !py-6 text-lg">
                Book a Strategy Call
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-[#0B0B0B] border-white/10 rounded-[2rem]">
            {selectedProject && (
              <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
                {/* Left: Image */}
                <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
                  <img 
                    src={selectedProject.thumbnail} 
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
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary" /> {selectedProject.date ? new Date(selectedProject.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recent'}
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
                      <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Client</p>
                      <p className="text-xl font-display font-bold text-white flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" /> {selectedProject.client || 'Private Client'}
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
      </div>
    </PageTransition>
  );
}
