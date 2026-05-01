"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface NavLink {
  label: string;
  href?: string;
  submenu?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Real Estate",
    href: "/real-estate",
    submenu: [
      { label: "Hard Money", href: "/real-estate/hard-money" },
      { label: "Private Equity", href: "/real-estate/private-equity" },
      { label: "Real Estate Investment", href: "/real-estate/investment" },
    ],
  },
  {
    label: "Business Concierge",
    href: "/business-concierge",
    submenu: [
      { label: "LinkedIn", href: "/business-concierge/linkedin" },
      { label: "Social Media Management", href: "/business-concierge/social-media" },
      { label: "Brand Management", href: "/business-concierge/brand-management" },
      { label: "Web Development", href: "/business-concierge/web-development" },
      { label: "Mobile App Development", href: "/business-concierge/mobile-app-development" },
      { label: "Web Design", href: "/business-concierge/web-design" },
      { label: "Content Creation", href: "/business-concierge/content-creation" },
      { label: "Inquiry Landing Page", href: "/business-concierge/inquiry" },
      { label: "Affiliate Marketing", href: "/business-concierge/affiliate" },
    ],
  },
  {
    label: "Business Brainstorm",
    href: "/business-brainstorm",
    submenu: [
      { label: "Business Brainstorm Meetings", href: "/business-brainstorm/weekly-zoom" },
      { label: "Live Events", href: "/business-brainstorm/live-events" },
      { label: "Cohen TV", href: "/cohen-tv" },
      { label: "Podcast", href: "/podcast" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** Returns true when the nav item's path matches the current route */
const isActive = (link: NavLink, pathname: string) => {
  if (!link.href) return false;
  if (link.href === "/") return pathname === "/";
  return pathname === link.href || pathname.startsWith(link.href + "/");
};

const Navbar = ({ settings }: { settings?: any }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, mounted } = useTheme();
  // Safe theme value to prevent hydration mismatch: 
  // Always use explicit server-rendered theme ("light") until mounted.
  const isLight = !mounted || theme === "light";

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // ── Theme helpers ──────────────────────────────────────────────────────────
  // Both modes: solid dark navbar — fully visible against any hero background
  const navBgStyle: React.CSSProperties = isLight
    ? {
      backgroundColor: scrolled ? "rgba(11,11,11,0.98)" : "rgba(11,11,11,0.94)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(212,175,55,0.12)" : "1px solid transparent",
      boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.2)" : "none",
    }
    : {
      backgroundColor: scrolled ? "rgba(8,10,18,0.97)" : "rgba(8,10,18,0.80)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(212,175,55,0.12)" : "1px solid rgba(255,255,255,0.05)",
      boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.4)" : "none",
    };
  const navBgClass = "";

  // Nav link colours
  const logoSecondary = "text-white/60";
  const linkBase = "text-white/75 hover:text-[#D4AF37]";
  const linkActiveClass = "text-[#D4AF37]";

  // Dropdown — always solid dark panel so it's readable on any background
  const dropdownPanelStyle: React.CSSProperties = {
    backgroundColor: "#111111",
    border: "1px solid rgba(212,175,55,0.15)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
    backdropFilter: "blur(20px)",
  };
  const dropdownBase = "text-white/70 hover:text-[#D4AF37] hover:bg-white/5";
  const dropdownActive = "text-[#D4AF37] bg-[#D4AF37]/10";

  // Mobile menu
  const hamburger = "bg-white";
  const mobileBgStyle: React.CSSProperties = {
    backgroundColor: "rgba(8,8,8,0.99)",
    backdropFilter: "blur(24px)",
  };
  const mobileBgClass = "";
  const mobileLinkBase = "text-white/80 hover:text-[#D4AF37]";
  const mobileLinkActive = "text-[#D4AF37]";
  const mobileSubLabel = "text-white/35";
  const mobileBorderL = "border-[#D4AF37]/20";
  const mobileDivider = "border-white/10";
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass}`}
        style={navBgStyle}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-display text-xl font-bold tracking-tight flex-shrink-0">
            <span className="gold-gradient-text">{settings?.name?.split(' ')[0] || "ADAM"}</span>
            <span className={`ml-1 ${logoSecondary}`}>{settings?.name?.split(' ').slice(1).join(' ') || "COHEN"}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const active = isActive(link, pathname);
              return (
                <div
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {/* Link label — always a <Link> if href provided, with chevron if has submenu */}
                  {link.href ? (
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-300 whitespace-nowrap ${active ? linkActiveClass : linkBase
                        }`}
                    >
                      {link.label}
                      {link.submenu && (
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""
                            }`}
                        />
                      )}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-300 whitespace-nowrap ${activeDropdown === link.label ? linkActiveClass : linkBase
                        }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.submenu && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 w-60 pt-3 pointer-events-auto"
                      >
                        <div className="p-2 rounded-2xl overflow-hidden" style={dropdownPanelStyle}>
                          <div className="flex flex-col gap-0.5">
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`px-4 py-2.5 rounded-xl text-sm transition-all duration-200 flex items-center justify-between group/item ${pathname === sub.href
                                  ? dropdownActive
                                  : dropdownBase
                                  }`}
                              >
                                <span>{sub.label}</span>
                                <motion.span
                                  initial={{ x: -4, opacity: 0 }}
                                  whileHover={{ x: 0, opacity: 1 }}
                                  className="text-[#D4AF37]"
                                >
                                  →
                                </motion.span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <ThemeToggle />
            <Link href="/contact" className="hero-btn text-xs py-3 px-6">
              Book a Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburger} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburger} ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburger} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
          <div
            className="h-full gold-gradient-bg transition-[width] duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 pt-24 px-8 lg:hidden overflow-y-auto ${mobileBgClass}`}
            style={mobileBgStyle}
            data-lenis-prevent="true"
          >
            <div className="flex flex-col gap-6 pb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {link.submenu ? (
                    <div className="flex flex-col gap-3">
                      {link.href ? (
                        <Link
                          href={link.href}
                          className={`text-2xl font-display font-bold transition-colors ${isActive(link, pathname) ? mobileLinkActive : mobileLinkBase
                            }`}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <p className={`text-xs uppercase tracking-widest font-bold ${mobileSubLabel}`}>
                          {link.label}
                        </p>
                      )}
                      <div className={`flex flex-col gap-2 pl-4 border-l ${mobileBorderL}`}>
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`text-base font-medium transition-colors ${pathname === sub.href
                              ? mobileLinkActive
                              : mobileLinkBase
                              }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      className={`text-2xl font-display font-bold transition-colors ${isActive(link, pathname) ? mobileLinkActive : mobileLinkBase
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className={`pt-6 mt-2 border-t ${mobileDivider}`}>
                <Link href="/contact" className="hero-btn w-full text-center block py-4 text-sm">
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
