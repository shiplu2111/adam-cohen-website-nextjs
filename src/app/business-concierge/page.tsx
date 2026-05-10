import BusinessConciergeClient from "./_components/BusinessConciergeClient";
import { Linkedin, Share2, PenTool, Monitor, FileText, Target, TrendingUp, Code2, Smartphone, CircleDollarSign, Briefcase, Globe } from "lucide-react";

const services = [
  {
    id: "linkedin",
    icon: <Linkedin className="w-7 h-7" />,
    title: "LinkedIn",
    tagline: "Dominate Your Industry's Feed.",
    description:
      "We build and manage your LinkedIn presence so you become the go-to authority in your niche. From profile optimisation to daily content and outreach campaigns.",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80&fit=crop",
    features: ["Profile & banner optimisation", "Weekly content calendar", "Lead generation outreach", "Connection growth strategy", "Analytics & monthly reporting"],
    link: "/business-concierge/linkedin"
  },
  {
    id: "social-media",
    icon: <Share2 className="w-7 h-7" />,
    title: "Social Media Management",
    tagline: "Consistent. Compelling. Conversion-Focused.",
    description:
      "Full-service social media management across Instagram, Facebook, TikTok, and X. We handle content creation, scheduling, engagement, and growth — you focus on your business.",
    image: "/social-media.png",
    features: ["Multi-platform management", "Reels & short-form video", "Community engagement", "Paid ad management", "Monthly performance reports"],
    link: "/business-concierge/social-media"
  },
  {
    id: "brand-management",
    icon: <PenTool className="w-7 h-7" />,
    title: "Brand Management",
    tagline: "Your Brand Is Your Most Valuable Asset.",
    description:
      "We craft, position, and protect your brand identity across all digital touchpoints. From visual guidelines to tone of voice — your brand becomes instantly recognisable.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80&fit=crop",
    features: ["Brand identity & guidelines", "Logo & visual system", "Messaging & tone of voice", "Competitor positioning", "Brand consistency audits"],
    link: "/business-concierge/brand-management"
  },
  {
    id: "web-development",
    icon: <Code2 className="w-7 h-7" />,
    title: "Web Development",
    tagline: "Built To Scale.",
    description:
      "Bespoke, scalable web apps built from the ground up — dashboards, SaaS platforms, CRMs, portals, and highly-converting corporate websites.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop",
    features: ["Custom React & Next.js builds", "SaaS & Dashboard Development", "Database Architecture", "API Integration", "High-Performance Scaling"],
    link: "/business-concierge/web-development"
  },
  {
    id: "mobile-app-development",
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile App Development",
    tagline: "Mobile Dominance.",
    description:
      "Native iOS and Android applications designed with premium UX/UI to capture market share, engage users, and expand your digital ecosystem.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    features: ["iOS & Android Native Apps", "Cross-Platform React Native", "Premium UI/UX Design", "App Store Optimization", "Backend & API Architecture"],
    link: "/business-concierge/mobile-app-development"
  },
  {
    id: "content-creation",
    icon: <FileText className="w-7 h-7" />,
    title: "Content Creation",
    tagline: "Content That Builds Empires.",
    description:
      "Strategic content production — blogs, video scripts, email sequences, and more. Every piece is crafted to educate your audience, build trust, and drive action.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&fit=crop",
    features: ["Long-form blog & articles", "Email marketing sequences", "Video scripts & storyboards", "Podcast show notes", "Newsletter management"],
    link: "/business-concierge/content-creation"
  },
  {
    id: "affiliate",
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Affiliate Marketing",
    tagline: "Earn While You Sleep.",
    description:
      "We build and manage affiliate programmes that generate passive revenue streams through strategic partnerships, influencer outreach, and performance-based campaigns.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80&fit=crop",
    features: ["Affiliate programme setup", "Partner recruitment", "Commission structure design", "Tracking & reporting", "Ongoing optimisation"],
    link: "/business-concierge/affiliate"
  },
  {
    id: "inquiry",
    icon: <Target className="w-7 h-7" />,
    title: "Inquiry Form",
    tagline: "Turn Traffic Into Qualified Leads.",
    description:
      "High-converting landing pages built specifically to capture inquiries and book consultations. Every element is tested and optimised for maximum lead quality.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
    features: ["Conversion-focused copy", "A/B testing framework", "Lead magnet integration", "CRM & email automation", "Real-time analytics dashboard"],
    link: "/business-concierge/inquiry"
  },
];

export const metadata = {
  title: "Business Concierge | Adam Cohen",
  description: "Done-for-you digital services that build your brand, grow your audience, and drive consistent revenue.",
};

export default function BusinessConcierge() {
  return <BusinessConciergeClient services={services} />;
}
