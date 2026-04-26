"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { ReactNode } from "react";
import { DynamicIcon } from "./DynamicIcon";

interface ServiceProps {
  icon?: ReactNode | string;
  title: string;
  description: string;
  tag?: string;
  id?: string;
  href?: string;
}

const ServicesSection = ({ services = [] }: { services?: ServiceProps[] }) => {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Services & <span className="gold-gradient-text">Opportunities</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => {
            const CardContent = (
              <>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl flex items-center justify-center">
                    {typeof service.icon === 'string' ? (
                      <DynamicIcon name={service.icon} className="w-8 h-8 text-primary" />
                    ) : (
                      service.icon
                    )}
                  </span>
                  <span className="text-xs tracking-widest uppercase text-primary/70 border border-primary/20 px-3 py-1 rounded-full">
                    {service.tag || "Premium"}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light line-clamp-3">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </>
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="service-card glass-card group hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {service.href ? (
                  <Link href={service.href} className="block p-8 md:p-10 h-full w-full">
                    {CardContent}
                  </Link>
                ) : (
                  <div className="p-8 md:p-10 h-full w-full">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <MagneticButton as="a" href="/business-concierge" className="hero-btn-outline !py-4 !px-8">
            Show More
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
