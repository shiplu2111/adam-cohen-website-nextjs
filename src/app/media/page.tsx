import MediaPageClient from "./_components/MediaPageClient";

const videos = [
  {
    title: "The Future of Distressed Commercial Real Estate",
    description: "Adam discusses market arbitrage and strategic acquisition in the current economic landscape.",
    youtubeId: "5pAK8Nnx2bI",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    duration: "18:42",
    date: "March 2024"
  },
  {
    title: "Mastering the Art of High-Stakes Negotiation",
    description: "A keynote session on leverage, psychology, and closing landmark ten-figure deals.",
    youtubeId: "v_8v8v8v8v8", // Placeholder ID
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
    duration: "24:15",
    date: "January 2024"
  },
  {
    title: "Building an Empire: The Visionary Framework",
    description: "An in-depth look at how Adam transitioned from a single investor to a global venture force.",
    youtubeId: "v_9v9v9v9v9", // Placeholder ID
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    duration: "12:30",
    date: "November 2023"
  }
];

const podcasts = [
  {
    title: "The Capital Mindset: Scaling Strategy",
    platform: "Spotify",
    url: "https://open.spotify.com",
    summary: "Exploring the intersection of venture capital and physical assets with host James Whitfield.",
    date: "April 2024"
  },
  {
    title: "Alpha Growth: Distressed Debt Strategies",
    platform: "Apple Podcasts",
    url: "https://podcasts.apple.com",
    summary: "A technical breakdown of Adam's private lending model and high-alpha risk management.",
    date: "February 2024"
  },
  {
    title: "Wealth Architecture: The Long Game",
    platform: "Spotify",
    url: "https://open.spotify.com",
    summary: "Adam discusses building multi-generational wealth through institutional real estate.",
    date: "December 2023"
  }
];

const press = [
  { name: "Forbes", feature: "Top 40 Under 40: Venture Leaders", date: "2024" },
  { name: "Financial Times", feature: "The New Wave of Private Equity", date: "2023" },
  { name: "Real Estate Weekly", feature: "Cover Story: The $1B Arbitrage", date: "2023" },
  { name: "Bloomberg", feature: "Market Analysis Guest Appearance", date: "2024" }
];

export const metadata = {
  title: "Media & Interviews | Adam Cohen",
  description: "Watch and listen to Adam Cohen's insights on distressed real estate, high-stakes negotiation, and institutional wealth.",
};

export default function Media() {
  return <MediaPageClient videos={videos} podcasts={podcasts} press={press} />;
}
