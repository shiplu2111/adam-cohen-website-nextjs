import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PodcastSection from "@/components/PodcastSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";
import PageTransition from "@/components/PageTransition";
import { getCmsData } from "@/lib/cms";
import { Linkedin, Share2, Code2, Smartphone } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [heroData, podcastsData, testimonialsData, projectsData, servicesData] = await Promise.all([
    getCmsData("hero"),
    getCmsData("podcasts"),
    getCmsData("testimonials"),
    getCmsData("projects"),
    getCmsData("services")
  ]);

  // Map API fields to Component props
  const slides = Array.isArray(heroData) && heroData.length > 0 ? heroData.filter((s: any) => s.active).map((s: any) => ({
    id: s.id,
    type: s.type,
    title1: s.title1,
    title2: s.title2,
    title3: s.title3,
    title4: s.title4,
    location: s.location,
    date: s.date_text,
    theme: s.theme_color,
    mask: s.mask_style,
    bg: s.bg_image,
    portrait: s.portrait_image
  })) : [];

  const stats = [
    { platform: "LinkedIn", value: "34K+", label: "followers" },
    { platform: "YouTube", value: "Growing", label: "channel" },
    { platform: "Facebook", value: "Active", label: "community" },
    { platform: "Instagram", value: "Visual", label: "brand" },
    { platform: "X", value: "Real-time", label: "updates" }
  ];

  const services = Array.isArray(servicesData) && servicesData.length > 0
    ? servicesData.filter((s: any) => s.active).map((s: any) => ({
      title: s.name,
      description: s.description,
      tag: s.tag,
      href: s.link || `/business-concierge/${s.name.toLowerCase().replace(/\s+/g, '-')}`,
      icon: s.icon
    }))
    : [];

  const projects = Array.isArray(projectsData) && projectsData.length > 0
    ? projectsData.filter((p: any) => p.status === "Live").map((p: any) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      description: p.description || "",
      image: p.thumbnail,
      location: p.location,
      metric: p.metric,
      live_url: p.live_url
    }))
    : [];

  const liveEpisodes = Array.isArray(podcastsData) && podcastsData.length > 0
    ? podcastsData.map((p: any) => ({
      id: p.id,
      number: p.episode_number || "0",
      title: p.title,
      description: p.description || "",
      duration: p.duration || "0m",
      tag: p.category || "General",
      link: p.link,
      host: p.host,
      thumbnail: p.thumbnail
    }))
    : [];

  const testimonials = Array.isArray(testimonialsData) && testimonialsData.length > 0
    ? testimonialsData.filter((t: any) => t.approved).map((t: any) => ({
      id: t.id,
      author: t.author,
      role: t.role,
      text: t.text,
      avatar: t.avatar,
      rating: t.rating
    }))
    : [];

  return (
    <PageTransition>
      <HeroSection slides={slides} />
      <StatsSection stats={stats} />
      <AboutSection />
      <ServicesSection services={services} />
      <ProjectsSection projects={projects.slice(0, 6)} />
      <PodcastSection featuredEpisode={liveEpisodes[0]} recentEpisodes={liveEpisodes.slice(1)} />
      <TestimonialsSection testimonials={testimonials} />
      <NewsletterSection />
      <CallToAction />
      <ContactSection />
    </PageTransition>
  );
}
