import TestimonialsPageClient from "./_components/TestimonialsPageClient";

const stats = [
  { label: "Success Stories", value: "500+" },
  { label: "Deals Facilitated", value: "$1.4B+" },
  { label: "Client Retention", value: "98%" },
  { label: "Years Experience", value: "15+" }
];

const featuredTestimonials = [
  {
    quote: "Adam doesn't just advise — he transforms the way you think about business. In just 6 months, our revenue tripled, but more importantly, our strategy became bulletproof.",
    name: "Sarah Chen",
    role: "CEO, TechBridge Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    quote: "The mastermind group changed everything. The network alone is worth 10x the investment, but Adam's personal guidance on our acquisition was the real game-changer.",
    name: "David Okafor",
    role: "Founder, Scale Dynamics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

const writtenTestimonials = [
  { quote: "His strategic vision turned our struggling startup into a market leader.", name: "Elena Rossi", title: "COO, Meridian Health", rating: 5 },
  { quote: "I've worked with dozens of consultants. Adam is in a completely different league.", name: "James Whitfield", title: "Managing Director, Whitfield Capital", rating: 5 },
  { quote: "The venture studio partnership was the best decision of my career. We 10x'd in 18 months.", name: "Aisha Patel", title: "Co-Founder, NovaTech", rating: 5 },
  { quote: "Adam sees opportunities no one else sees. His investment in our company changed everything.", name: "Liam Brooks", title: "CEO, Greenshift Energy", rating: 5 },
  { quote: "Precision, integrity, and results. That is what you get with Adam Cohen.", name: "Marcus Thorne", title: "Director, Thorne Estates", rating: 5 },
  { quote: "A master of deal structuring. He saved us millions in taxation and overhead.", name: "Sophia Lang", title: "Partner, Global Equity", rating: 5 },
];

const videoTestimonials = [
  {
    title: "Scaling a $100M Portfolio",
    description: "How Adam structured our residential rollout.",
    youtubeId: "v_test1", // Placeholder
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The Architecture of a Deal",
    description: "Breaking down the landmark creative complex acquisition.",
    youtubeId: "v_test2", // Placeholder
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  }
];

export const metadata = {
  title: "Testimonials | What Clients Say | Adam Cohen",
  description: "Results documented. Discover the impact of Adam Cohen's strategic vision through direct feedback from institutional partners and success stories.",
};

export default function Testimonials() {
  return (
    <TestimonialsPageClient 
      stats={stats} 
      featuredTestimonials={featuredTestimonials} 
      writtenTestimonials={writtenTestimonials} 
      videoTestimonials={videoTestimonials} 
    />
  );
}
