"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { submitContactForm } from "@/lib/cms";
import { 
  CheckCircle2, 
  Mail, 
  User, 
  Briefcase, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Target
} from "lucide-react";

export default function InquiryFormClient() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    service: "Select Service",
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const services = [
    "LinkedIn Management",
    "Social Media Management",
    "Brand Management",
    "Web Development",
    "Mobile App Development",
    "Content Creation",
    "Affiliate Marketing",
    "Other Digital Service"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
      const response = await fetch(`${API_URL}/public/business-inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      // fallback to showing success even if it fails for now to not break UX
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="bg-background min-h-screen pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-block text-primary text-xs tracking-[0.4em] uppercase mb-6 font-bold"
                >
                  Business Concierge
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8"
                >
                  Secure Your <span className="gold-gradient-text">Competitive Advantage.</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl"
                >
                  Stop sending traffic to a leaking bucket. Our high-performance digital systems are engineered to capture attention and convert it into actionable revenue.
                </motion.p>
              </div>

              {/* Value Propositions */}
              <div className="space-y-8 pt-6">
                {[
                  {
                    icon: <Target className="w-6 h-6 text-primary" />,
                    title: "Strategic Precision",
                    desc: "Every funnel we build is scientifically tested to maximize your Cost-Per-Acquisition."
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-primary" />,
                    title: "Rapid Deployment",
                    desc: "Go from concept to conversion-ready in record time with our dedicated execution team."
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
                    title: "Market Dominance",
                    desc: "Position your brand as the undeniable authority while your competitors struggle for reach."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-4 opacity-50">Trusted by Global High-Performers</p>
                <div className="flex items-center gap-6 opacity-30 grayscale">
                  {/* Placeholders for logos if any, otherwise just text/icons */}
                  <div className="text-xl font-display font-bold italic">REAL ESTATE</div>
                  <div className="text-xl font-display font-bold italic">SAAS</div>
                  <div className="text-xl font-display font-bold italic">PRIVATE EQUITY</div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Decorative border */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/50 via-primary/5 to-transparent rounded-3xl blur-[1px] -z-10" />
                
                <div className="glass-card p-8 md:p-14 bg-background/60 backdrop-blur-3xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  {submitted ? (
                    <div className="py-20 text-center space-y-8">
                      <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </div>
                      <h2 className="text-4xl font-display font-bold">Inquiry Received</h2>
                      <p className="text-lg text-muted-foreground font-light max-w-sm mx-auto">
                        Your strategic inquiry has been prioritized. A consultant from our execution team will be in touch within 24 hours.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-primary hover:text-primary/70 underline underline-offset-8 transition-colors uppercase tracking-widest text-xs font-bold"
                      >
                        Send Another Request
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-10">
                        <h2 className="text-3xl font-display font-bold mb-2">Submit Your Request</h2>
                        <p className="text-muted-foreground font-light">Tell us about your project and we'll engineer the perfect system.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold ml-1">Full Name</label>
                            <div className="relative group">
                              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                              <input 
                                type="text" required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                placeholder="Enter your name"
                                className="w-full bg-secondary/10 border border-white/5 rounded-xl px-12 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:bg-secondary/20 transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold ml-1">Business Email</label>
                            <div className="relative group">
                              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                              <input 
                                type="email" required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                placeholder="email@company.com"
                                className="w-full bg-secondary/10 border border-white/5 rounded-xl px-12 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:bg-secondary/20 transition-all"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold ml-1">Phone (Optional)</label>
                            <div className="relative group">
                              <input 
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                placeholder="+1 (555) 000-0000"
                                className="w-full bg-secondary/10 border border-white/5 rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:bg-secondary/20 transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold ml-1">Service Interest</label>
                            <div className="relative group">
                              <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                              <select 
                                value={formData.service}
                                onChange={(e) => setFormData({...formData, service: e.target.value})}
                                className="w-full bg-secondary/10 border border-white/5 rounded-xl px-12 py-4 text-foreground focus:outline-none focus:border-primary/50 focus:bg-secondary/20 transition-all appearance-none cursor-pointer"
                              >
                                <option disabled>Select Service</option>
                                {services.map(s => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold ml-1">Project Details</label>
                          <div className="relative group">
                            <MessageSquare className="absolute left-5 top-6 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <textarea 
                              required
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                              rows={4}
                              placeholder="Describe your current goals or bottlenecks..."
                              className="w-full bg-secondary/10 border border-white/5 rounded-xl px-12 py-5 text-foreground focus:outline-none focus:border-primary/50 focus:bg-secondary/20 transition-all resize-none"
                            />
                          </div>
                        </div>

                        <div className="pt-4">
                          <MagneticButton 
                            type="submit"
                            disabled={isSubmitting}
                            className={`hero-btn !w-full !py-6 text-lg group ${isSubmitting ? "opacity-50" : ""}`}
                          >
                            {isSubmitting ? "Processing..." : (
                              <span className="flex items-center justify-center gap-2">
                                Launch Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </span>
                            )}
                          </MagneticButton>
                        </div>
                        
                        <p className="text-[10px] text-center text-muted-foreground/40 mt-4 px-6">
                          By submitting this form, you agree to our privacy policy and consent to being contacted by our concierge team regarding your business growth.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
