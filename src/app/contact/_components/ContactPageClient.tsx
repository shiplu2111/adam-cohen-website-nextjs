"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import { submitContactForm } from "@/lib/cms";
import { Linkedin, Instagram, Youtube, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactSettings {
  public_email?: string;
  phone?: string;
  whatsapp?: string;
  office_hours?: string;
  address?: string;
  google_maps_url?: string;
  linkedin_url?: string;
  instagram_url?: string;
  youtube_url?: string;
  twitter_url?: string;
}

interface ContactPageClientProps {
  contact: ContactSettings;
}

export default function ContactPageClient({ contact }: ContactPageClientProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      // silent fail — form still shows submitted
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Build contact info rows — only show items that have a value
  const contactItems = [
    contact.public_email && {
      icon: <Mail className="w-6 h-6" />,
      label: "Direct Mail",
      value: contact.public_email,
      href: `mailto:${contact.public_email}`,
    },
    contact.phone && {
      icon: <Phone className="w-6 h-6" />,
      label: "Contact Number",
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
    contact.address && {
      icon: <MapPin className="w-6 h-6" />,
      label: "Global Presence",
      value: contact.address,
      href: contact.google_maps_url || undefined,
    },
    contact.office_hours && {
      icon: <Clock className="w-6 h-6" />,
      label: "Office Hours",
      value: contact.office_hours,
      href: undefined,
    },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; value: string; href?: string }[];

  // Build social links — only show items that have a URL
  const socialLinks = [
    contact.linkedin_url  && { icon: <Linkedin  className="w-6 h-6" />, label: "LinkedIn",  href: contact.linkedin_url },
    contact.instagram_url && { icon: <Instagram className="w-6 h-6" />, label: "Instagram", href: contact.instagram_url },
    contact.youtube_url   && { icon: <Youtube   className="w-6 h-6" />, label: "YouTube",   href: contact.youtube_url },
    contact.twitter_url   && { icon: <Twitter   className="w-6 h-6" />, label: "Twitter/X", href: contact.twitter_url },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; href: string }[];

  return (
    <PageTransition>
      <div className="bg-background min-h-screen pt-40 pb-20 px-6 relative overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-primary text-sm tracking-[0.4em] uppercase mb-6 font-medium"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-display font-bold leading-tight break-words"
            >
              Let's <span className="gold-gradient-text">Work Together.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto font-light"
            >
              Ready to engineer your next breakthrough? Reach out to discuss ventures, consulting, or strategic partnerships.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            >
              {submitted ? (
                <div className="glass-card p-6 md:p-14 text-center space-y-6 bg-background/40 border border-primary/20">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-display font-bold">Message Received</h2>
                  <p className="text-muted-foreground font-light">
                    Thank you for reaching out. We review all enquiries personally and will respond within 1–2 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary text-sm underline underline-offset-4 hover:text-primary/70 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-6 md:p-14 space-y-8 bg-background/40 border border-border/10 shadow-2xl relative w-full overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs tracking-wider text-muted-foreground/60 uppercase font-bold">Full Name</label>
                      <input
                        type="text" required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-secondary/20 border border-border/10 rounded-2xl px-6 py-5 text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-all duration-300"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-wider text-muted-foreground/60 uppercase font-bold">Business Email</label>
                      <input
                        type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-secondary/20 border border-border/10 rounded-2xl px-6 py-5 text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-all duration-300"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs tracking-wider text-muted-foreground/60 uppercase font-bold">Phone Number (Optional)</label>
                    <input
                      type="tel" value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-secondary/20 border border-border/10 rounded-2xl px-6 py-5 text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs tracking-wider text-muted-foreground/60 uppercase font-bold">Your Vision</label>
                    <textarea
                      required value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-secondary/20 border border-border/10 rounded-2xl px-6 py-5 text-foreground placeholder-muted-foreground/30 focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or goal..."
                    />
                  </div>

                  <div className="pt-4">
                    <MagneticButton
                      type="submit"
                      className={`hero-btn w-full !py-6 text-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Submit Inquiry"}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-16"
            >
              {/* Dynamic contact items */}
              {contactItems.length > 0 && (
                <div className="grid gap-10">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase text-muted-foreground font-bold mb-2">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-xl md:text-2xl font-display font-semibold hover:text-primary transition-colors break-words"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-xl md:text-2xl font-display font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Social Links — only shown when at least one URL is set */}
              {socialLinks.length > 0 && (
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold mb-8">Follow the Journey</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                        whileHover={{ y: -5 }}
                        className="w-14 h-14 rounded-full border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}

              {/* Book a Call CTA */}
              <div className="glass-card p-6 md:p-10 border-primary/20 bg-primary/5 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4">Prefer to book directly?</h3>
                  <p className="text-muted-foreground font-light mb-8 max-w-sm">
                    Skip the form and schedule a 1:1 strategy session on my calendar.
                  </p>
                  <MagneticButton as="a" href="/book" className="hero-btn-outline !py-4 !px-8 text-sm">
                    Book a Call
                  </MagneticButton>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>

          {/* Embedded Google Map */}
          {contact.google_maps_url && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Our Location
              </p>
              <div className="relative w-full rounded-3xl overflow-hidden border border-border/20 shadow-2xl" style={{ height: "420px" }}>
                <iframe
                  src={contact.google_maps_url}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adam Cohen Office Location"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/5" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
