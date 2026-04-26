import MobileAppPageClient from "./_components/MobileAppPageClient";
import { Apple, Play, Smartphone, Layers, Wifi, Bell } from "lucide-react";

const services = [
  {
    icon: <Apple className="w-7 h-7" />,
    title: "iOS App Development",
    description: "Native and hybrid iOS apps built for performance, elegance, and App Store success — from concept to launch.",
    features: ["Swift & SwiftUI", "App Store submission", "Face ID / Touch ID", "Apple Pay integration"],
  },
  {
    icon: <Play className="w-7 h-7" />,
    title: "Android App Development",
    description: "Robust Android applications that work flawlessly across the full range of devices on the Play Store.",
    features: ["Kotlin & Jetpack Compose", "Play Store publishing", "Material Design 3", "Google Pay integration"],
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Cross-Platform Apps",
    description: "Write once, run everywhere. React Native apps that deliver near-native performance on both iOS and Android.",
    features: ["React Native / Expo", "Single codebase", "Native device APIs", "Faster time to market"],
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "MVP Development",
    description: "Get your idea in users' hands fast. We build lean, validated MVPs that prove product-market fit before you over-invest.",
    features: ["Rapid prototyping", "User testing support", "Iterative build cycles", "Investor-ready demos"],
  },
  {
    icon: <Wifi className="w-7 h-7" />,
    title: "API & Backend Integration",
    description: "Connect your app to any third-party service, payment gateway, or internal system with robust API architecture.",
    features: ["REST & GraphQL APIs", "Stripe / PayPal / Apple Pay", "Firebase & Supabase", "Real-time sync"],
  },
  {
    icon: <Bell className="w-7 h-7" />,
    title: "App Maintenance & Updates",
    description: "Keep your app OS-compatible, secure, and continuously improving with our dedicated maintenance packages.",
    features: ["OS version compatibility", "Bug fixes & patches", "Feature enhancements", "Performance monitoring"],
  },
];

const stats = [
  { val: "50+",   label: "Apps Launched" },
  { val: "4.8★",  label: "Avg App Store Rating" },
  { val: "2M+",   label: "End Users Served" },
  { val: "99.9%", label: "Uptime Guaranteed" },
];

const process = [
  { step: "01", title: "Strategy",   desc: "Define user personas, core features, and technical architecture." },
  { step: "02", title: "UI/UX",      desc: "Interactive prototypes and pixel-perfect mobile designs." },
  { step: "03", title: "Develop",    desc: "Sprint-based development with regular TestFlight / beta builds." },
  { step: "04", title: "Ship",       desc: "App Store / Play Store submission, QA, and post-launch support." },
];

export const metadata = {
  title: "Mobile App Development | Adam Cohen",
  description: "iOS, Android, and cross-platform apps that your users will love — built fast, built right, built to scale.",
};

export default function MobileApp() {
  return <MobileAppPageClient services={services} stats={stats} process={process} />;
}
