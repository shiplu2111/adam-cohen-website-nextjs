import CohenTVPageClient from "./_components/CohenTVPageClient";
import { Youtube, Headphones, Mic } from "lucide-react";

const platforms = [
  { name: "YouTube",      icon: <Youtube className="w-5 h-5" />,    href: "#" },
  { name: "Spotify",      icon: <Headphones className="w-5 h-5" />, href: "#" },
  { name: "Apple Podcasts", icon: <Mic className="w-5 h-5" />,      href: "#" },
];

import { getCmsData } from "@/lib/cms";

export const metadata = {
  title: "Cohen TV Podcast | Watch & Listen | Adam Cohen",
  description: "Raw conversations on business, wealth, real estate, and the mindset of high-performers hosted by Adam Cohen.",
};

export default async function CohenTV() {
  const podcastsData = await getCmsData("podcasts");
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

  return <CohenTVPageClient episodes={liveEpisodes} platforms={platforms} />;
}
