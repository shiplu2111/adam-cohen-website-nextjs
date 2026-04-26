"use client";

import { motion } from "framer-motion";
import HomeProjectCard from "./HomeProjectCard";
import MagneticButton from "./MagneticButton";

interface ProjectProps {
  id?: string;
  title: string;
  location?: string;
  metric?: string;
  category: string;
  description: string;
  image: string;
}

const ProjectsSection = ({ projects = [] }: { projects?: ProjectProps[] }) => {
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
            <HomeProjectCard key={project.title} project={project} index={i} />
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
    </section>
  );
};

export default ProjectsSection;
