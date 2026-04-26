import WebDevPageClient from "./_components/WebDevPageClient";
import { Monitor, Code2, ShoppingCart, Layers, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Custom Web Applications",
    description: "Bespoke, scalable web apps built from the ground up — dashboards, SaaS platforms, CRMs, portals, and beyond.",
    features: ["React / Next.js / Vue", "REST & GraphQL APIs", "Real-time features", "Auth & role management"],
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "E-Commerce Development",
    description: "High-converting online stores built on Shopify, WooCommerce, or fully custom — with seamless payment and inventory systems.",
    features: ["Shopify & WooCommerce", "Custom checkout flows", "Payment gateway integration", "Inventory & order management"],
  },
  {
    icon: <Monitor className="w-7 h-7" />,
    title: "Corporate & Business Websites",
    description: "Premium, fast-loading corporate websites that reflect your brand authority and convert visitors into clients.",
    features: ["CMS integration", "SEO-optimised architecture", "Performance-first build", "Multi-language support"],
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Landing Pages & Funnels",
    description: "Conversion-engineered landing pages and sales funnels that turn traffic into qualified leads and paying customers.",
    features: ["A/B testing ready", "Lead capture & CRM sync", "Analytics tracking", "Fast load speeds"],
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Performance Optimisation",
    description: "Speed audits, Core Web Vitals improvements, and technical overhauls that boost rankings and user experience.",
    features: ["Core Web Vitals fixes", "Image & code optimisation", "CDN configuration", "Lighthouse score boost"],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Maintenance & Support",
    description: "Ongoing care plans that keep your site secure, updated, and performing at its peak — with dedicated support.",
    features: ["Monthly updates & patches", "Security monitoring", "Uptime monitoring", "Priority support SLA"],
  },
];

const techStack = [
  { name: "React",      logo: "⚛️" },
  { name: "Next.js",    logo: "▲" },
  { name: "TypeScript", logo: "TS" },
  { name: "Node.js",    logo: "🟩" },
  { name: "PostgreSQL", logo: "🐘" },
  { name: "Tailwind",   logo: "🌊" },
  { name: "Shopify",    logo: "🛍️" },
  { name: "AWS",        logo: "☁️" },
];

export const metadata = {
  title: "Web Development | Premium Digital Experiences | Adam Cohen",
  description: "Performance-first web development. Custom applications, e-commerce, and corporate websites built to scale and convert.",
};

export default function WebDevelopment() {
  return (
    <WebDevPageClient 
      services={services} 
      techStack={techStack} 
    />
  );
}
