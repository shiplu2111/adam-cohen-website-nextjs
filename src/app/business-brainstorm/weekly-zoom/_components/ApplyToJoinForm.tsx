"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2, Video } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  background: string;
  why_join: string;
}

const INITIAL: FormState = {
  name: "", email: "", phone: "",
  company: "", background: "", why_join: "",
};

const inputClass =
  "w-full bg-secondary/20 border border-border/20 rounded-xl px-5 py-4 text-foreground placeholder-muted-foreground/40 focus:outline-none focus:border-primary/60 transition-all duration-300 text-sm";
const labelClass = "block text-xs font-bold tracking-widest uppercase mb-2 text-muted-foreground/70";

export default function ApplyToJoinForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/public/weekly-zoom-apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
        setForm(INITIAL);
      }
    } catch {
      setError("Unable to submit. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply" className="section-padding bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <Video className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Apply to Join</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Ready to Join the <span className="gold-gradient-text">Weekly Zoom?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-muted-foreground max-w-xl mx-auto font-light"
          >
            The group is intentionally small and curated. Tell us about yourself and we'll be in touch within 48 hours.
          </motion.p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="glass-card p-12 text-center border border-primary/20"
            >
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}
                className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-display font-bold mb-3">Application Submitted!</h3>
              <p className="text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
                Thank you for applying. We review every application personally and will get back to you within 48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-primary text-sm underline underline-offset-4 hover:text-primary/70 transition-colors"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-12 border border-border/20 space-y-6"
            >
              {/* Row 1: Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input type="text" required value={form.name} onChange={set("name")}
                    className={inputClass} placeholder="Jane Smith" />
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input type="email" required value={form.email} onChange={set("email")}
                    className={inputClass} placeholder="jane@company.com" />
                </div>
              </div>

              {/* Row 2: Phone + Company */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Phone <span className="text-muted-foreground/40 normal-case font-normal tracking-normal">(optional)</span></label>
                  <input type="tel" value={form.phone} onChange={set("phone")}
                    className={inputClass} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className={labelClass}>Business / Company <span className="text-muted-foreground/40 normal-case font-normal tracking-normal">(optional)</span></label>
                  <input type="text" value={form.company} onChange={set("company")}
                    className={inputClass} placeholder="Acme Inc." />
                </div>
              </div>

              {/* Background */}
              <div>
                <label className={labelClass}>Your Background <span className="text-muted-foreground/40 normal-case font-normal tracking-normal">(optional)</span></label>
                <textarea rows={3} value={form.background} onChange={set("background")}
                  className={inputClass + " resize-none"}
                  placeholder="Tell us a bit about what you do, your industry, and stage of business..." />
              </div>

              {/* Why Join */}
              <div>
                <label className={labelClass}>Why Do You Want to Join? *</label>
                <textarea rows={4} required value={form.why_join} onChange={set("why_join")}
                  className={inputClass + " resize-none"}
                  placeholder="What specific goals or challenges are you working on? What would joining this group mean for you?" />
              </div>

              {/* Error */}
              {error && (
                <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="hero-btn w-full py-4 text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                ) : (
                  <>Submit Application <ArrowRight className="w-5 h-5" /></>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground/60 font-light">
                Your information is kept private. We'll only use it to review your application.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
