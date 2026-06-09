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
  const [heroData, podcastsData, testimonialsData, projectsData, servicesData, cohenTvVideosData] = await Promise.all([
    getCmsData("hero"),
    getCmsData("podcasts"),
    getCmsData("testimonials"),
    getCmsData("projects"),
    getCmsData("services"),
    getCmsData("cohen-tv-videos")
  ]);

  const variants = ["intro", "brand", "cta"] as const;

  const slides = Array.isArray(heroData) && heroData.length > 0
    ? heroData
        .filter((s: any) => s.active)
        .sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0))
        .map((s: any, index: number) => {
          let title3 = s.title3;
          let title4 = s.title4;
          let location = s.location;

          // Slide 1: split combined title3 into separate lines
          if (index === 0 && s.title3?.includes("  ")) {
            const parts = s.title3.split(/\s{2,}/).map((p: string) => p.trim()).filter(Boolean);
            title3 = parts[0] ?? s.title3;
            title4 = parts[1] ?? null;
            location = parts[2] ?? s.location;
          }

          // Don't show stray "PODCAST" label on intro slide
          if (index === 0 && title4?.toUpperCase() === "PODCAST") {
            title4 = null;
          }

          return {
            id: s.id,
            variant: variants[Math.min(index, variants.length - 1)],
            title1: s.title1,
            title2: s.title2,
            title3,
            title4,
            location,
            link: s.link || (index === 2 ? "/book" : null),
            bg: s.bg_image,
            portrait: s.portrait_image,
          };
        })
    : [];

  const stats = [
    { platform: "LinkedIn", value: "34K+", label: "followers" },
    { platform: "YouTube", value: "Growing", label: "channel" },
    { platform: "Facebook", value: "Active", label: "community" },
    { platform: "Instagram", value: "Visual", label: "brand" },
    { platform: "X", value: "Real-time", label: "updates" }
  ];

  const services = Array.isArray(servicesData) && servicesData.length > 0
    ? servicesData.filter((s: any) => s.active).map((s: any) => {
        const nameLower = s.name?.toLowerCase() ?? "";
        const href = s.link
          || (nameLower.includes("blockchain") ? "/blockchain" : null)
          || `/business-concierge/${s.name.toLowerCase().replace(/\s+/g, "-")}`;

        return {
          title: s.name,
          description: s.description,
          tag: s.tag,
          href,
          icon: s.icon,
          image: s.image || s.thumbnail || null,
        };
      })
    : [];

  const liveProjectOrder = [
    "ADAM COHEN TODAY",
    "SAXCAP",
    "SMASH MORTGAGE",
    "BUSINESS CONCIERGE",
    "BUSINESS BRAINSTORM",
    "COHENTV - THE PODCAST",
  ];

  const comingSoonProjects = [
    {
      id: "coming-soon-inspire",
      title: "INSPIRE BUSINESS JOURNAL",
      category: "Coming Soon",
      description: "An upcoming publication platform for entrepreneurial insights, leadership stories, and market intelligence.",
      image: "",
      location: "USA",
      metric: "Coming Soon",
      comingSoon: true,
    },
    {
      id: "coming-soon-sxp",
      title: "SXP CAPITAL",
      category: "Coming Soon",
      description: "A forthcoming private equity and capital platform focused on strategic real estate and venture investments.",
      image: "",
      location: "USA",
      metric: "Coming Soon",
      comingSoon: true,
    },
    {
      id: "coming-soon-gbf",
      title: "GLOBAL BUSINESS FORUM",
      category: "Coming Soon",
      description: "An international business forum connecting entrepreneurs, investors, and industry leaders worldwide.",
      image: "",
      location: "Global",
      metric: "Coming Soon",
      comingSoon: true,
    },
  ];

  const normalizeProjectTitle = (title: string) =>
    title.toUpperCase().replace(/[–—]/g, "-").replace(/\s+/g, " ").trim();

  const liveProjects = Array.isArray(projectsData) && projectsData.length > 0
    ? projectsData
        .filter((p: any) => p.status === "Live")
        .map((p: any) => ({
          id: p.id,
          title: p.title,
          category: p.category,
          description: p.description || "",
          image: p.thumbnail,
          location: p.location,
          metric: p.metric,
          live_url: p.live_url,
          comingSoon: false,
        }))
        .sort((a, b) => {
          const orderMap = new Map(liveProjectOrder.map((t, i) => [normalizeProjectTitle(t), i]));
          const aIdx = orderMap.get(normalizeProjectTitle(a.title)) ?? 999;
          const bIdx = orderMap.get(normalizeProjectTitle(b.title)) ?? 999;
          return aIdx - bIdx;
        })
    : [];

  const projects = [...liveProjects, ...comingSoonProjects];

  const podcastVideos = Array.isArray(cohenTvVideosData)
    ? cohenTvVideosData.filter((v: any) => v.type === 'Podcast' && v.is_published).map((v: any) => ({
      id: v.id,
      number: String(v.order || "0"),
      title: v.title,
      description: v.description || "",
      duration: v.duration || "0m",
      tag: "Video",
      link: v.link,
      host: v.host || "Adam Cohen",
      thumbnail: v.thumbnail,
      is_video: true
    })).slice(0, 4)
    : [];

  const liveEpisodes = podcastVideos;

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
      <ProjectsSection projects={projects} />
      <PodcastSection featuredEpisode={liveEpisodes[0]} recentEpisodes={liveEpisodes.slice(1)} />
      <TestimonialsSection testimonials={testimonials} />
      <NewsletterSection />
      <CallToAction />
      <ContactSection />
    </PageTransition>
  );
}
