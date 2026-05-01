import BusinessBrainstormClient from "./_components/BusinessBrainstormClient";
import { Video, Calendar } from "lucide-react";

const programs = [
  {
    id: "weekly-zoom",
    icon: <Video className="w-8 h-8" />,
    title: "Business Brainstorm Meetings",
    tagline: "Live Coaching. Real Breakthroughs.",
    description:
      "Every week, join Adam and a curated group of entrepreneurs for a live Zoom session focused on real business problems, live Q&A, hot seat coaching, and accountability. No pre-recorded fluff — just raw, tactical guidance.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1200&q=80&fit=crop",
    features: [
      "Live sessions every week",
      "Hot seat coaching opportunities",
      "Real-time Q&A with Adam",
      "Peer accountability groups",
      "Session recordings for members",
      "Private community access",
    ],
    cta: "Join Weekly Zoom",
    highlight: "Most Popular",
  },
  {
    id: "live-events",
    icon: <Calendar className="w-8 h-8" />,
    title: "Live Events",
    tagline: "The Room That Changes Everything.",
    description:
      "Immersive in-person events held multiple times per year bringing together elite entrepreneurs, investors, and industry leaders. Expect intensive workshops, keynote presentations, masterminds, and high-impact networking that accelerates your trajectory.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&fit=crop",
    features: [
      "Full-day immersive workshops",
      "Keynote presentations",
      "VIP networking dinners",
      "Expert panel discussions",
      "Deal-making opportunities",
      "Lifetime alumni community",
    ],
    cta: "View Upcoming Events",
    highlight: "High Impact",
  },
];

const testimonials = [
  {
    quote: "The Business Brainstorm Meetings alone was worth the entire investment. Adam's real-time feedback saved me from a $200K mistake.",
    name: "Marcus T.",
    title: "Real Estate Investor",
  },
  {
    quote: "I signed a $1.2M contract at the live event. The room was filled with serious players — exactly who I needed to meet.",
    name: "Priya S.",
    title: "CEO, Digital Agency",
  },
  {
    quote: "These aren't typical business events. Adam creates an atmosphere where real collaboration and transformation happen.",
    name: "Kevin R.",
    title: "Entrepreneur & Investor",
  },
];

export const metadata = {
  title: "Business Brainstorm | Adam Cohen",
  description: "Join a community of high-performers for live coaching, accountability, and strategy sessions with Adam Cohen.",
};

export default function BusinessBrainstorm() {
  return <BusinessBrainstormClient programs={programs} testimonials={testimonials} />;
}
