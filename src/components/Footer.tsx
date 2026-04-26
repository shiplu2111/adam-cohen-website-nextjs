"use client";

import Link from "next/link";
import { Linkedin, Instagram, Youtube, Twitter, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Footer = ({ settings }: { settings?: any }) => {
  const { theme, mounted } = useTheme();
  // Safe theme value to prevent hydration mismatch: 
  // Always use explicit server-rendered theme ("light") until mounted.
  const isLight = !mounted || theme === "light";

  // ── Theme-aware class helpers ──────────────────────────────────────────────
  const footerBg      = isLight ? "" : "bg-background";
  const footerStyle   = isLight ? { backgroundColor: "#0B0B0B" } : {};

  const topDivider    = isLight
    ? "via-[#D4AF37]/20"
    : "via-primary/30";

  const brandSecondary = isLight ? "text-white/65"  : "text-foreground/80";
  const bodyText       = isLight ? "text-white/45"  : "text-muted-foreground";
  const headingClass   = isLight ? "text-white/90"  : "text-foreground";
  const linkClass      = isLight
    ? "text-white/55 hover:text-[#D4AF37]"
    : "text-muted-foreground hover:text-primary";
  const socialClass   = isLight
    ? "border-white/10 text-white/45 hover:text-[#D4AF37] hover:border-[#D4AF37]/50"
    : "border-border/10 text-muted-foreground hover:text-primary hover:border-primary/50";

  const ctaCardClass  = isLight
    ? "p-8 border border-[#D4AF37]/20 rounded-3xl"
    : "glass-card p-8 border border-primary/20 bg-primary/5 rounded-3xl";
  const ctaCardStyle  = isLight ? { backgroundColor: "#1A1A1A" } : {};
  const ctaHeading    = isLight ? "text-white"    : "";
  const ctaBody       = isLight ? "text-white/45" : "text-muted-foreground";
  const otherLink     = isLight
    ? "text-[10px] tracking-widest uppercase text-white/30 hover:text-[#D4AF37] mt-6 block text-center transition-colors font-bold"
    : "text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary mt-6 block text-center transition-colors font-bold";

  const bottomBorder  = isLight ? "border-white/8"       : "border-border/10";
  const bottomText    = isLight ? "text-white/28"         : "text-muted-foreground";
  const bottomLink    = isLight ? "hover:text-[#D4AF37]" : "hover:text-primary";
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <footer
      className={`${footerBg} border-t border-transparent pt-24 pb-12 px-6 relative overflow-hidden`}
      style={footerStyle}
    >
      {/* Top decorative divider */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent ${topDivider} to-transparent`}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Column 1: Brand Identity */}
          <div className="space-y-8">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight block">
              <span className="gold-gradient-text">{settings?.name?.split(' ')[0] || "ADAM"}</span>
              <span className={`ml-1 ${brandSecondary}`}>{settings?.name?.split(' ').slice(1).join(' ') || "COHEN"}</span>
            </Link>
            <p className={`${bodyText} font-light leading-relaxed max-w-xs`}>
              Engineering empires through strategic investment, elite advisory, and
              technological mastery. Building the future of high-stakes business.
            </p>
            <div className="flex gap-5">
              {[
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                { icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${socialClass}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Expertise */}
          <div>
            <h4 className={`text-xs tracking-[0.3em] uppercase font-bold mb-8 ${headingClass}`}>
              Expertise
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Our Services", href: "/services" },
                { label: "Portfolio",    href: "/portfolio" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Consulting",   href: "/book" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`transition-colors flex items-center group ${linkClass}`}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Authority */}
          <div>
            <h4 className={`text-xs tracking-[0.3em] uppercase font-bold mb-8 ${headingClass}`}>
              Authority
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Market Insights", href: "/insights" },
                { label: "Media Hub",       href: "/media" },
                { label: "About Adam",      href: "/about" },
                { label: "Press Room",      href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`transition-colors flex items-center group ${linkClass}`}
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Action CTA */}
          <div className={ctaCardClass} style={ctaCardStyle}>
            <h4 className={`text-lg font-display font-bold mb-4 ${ctaHeading}`}>
              Ready to Grow?
            </h4>
            <p className={`text-xs mb-8 leading-relaxed font-light ${ctaBody}`}>
              Secure your strategy session with Adam to audit your trajectory.
            </p>
            <Link
              href="/book"
              className="hero-btn w-full text-center block !py-4 text-sm font-bold shadow-xl"
            >
              Book a Call
            </Link>
            <Link href="/contact" className={otherLink}>
              Other Inquiries
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] tracking-widest uppercase font-medium ${bottomBorder} ${bottomText}`}
        >
          <p>© {new Date().getFullYear()} Adam Cohen Today. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="#" className={`transition-colors ${bottomLink}`}>Privacy Policy</Link>
            <Link href="#" className={`transition-colors ${bottomLink}`}>Terms of Service</Link>
            <Link href="#" className={`transition-colors ${bottomLink}`}>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
