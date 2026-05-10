import RealEstatePageClient from "./_components/RealEstatePageClient";
import { DollarSign, TrendingUp, Globe } from "lucide-react";

const services = [
  {
    id: "hard-money",
    icon: <DollarSign className="w-8 h-8" />,
    title: "Hard Money",
    tagline: "Fast Capital. Real Results.",
    description:
      "Access fast, asset-backed financing for your real estate deals. Our hard money lending program cuts through the red tape, delivering capital in days — not months.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80&fit=crop",
    features: [
      "Loan program overview with rate ranges",
      "LTV caps and qualifying criteria",
      "7-10 day closing guarantee details",
      "Property types accepted",
      "Geographic coverage areas",
      "Online pre-qualification form",
      "Loan calculator widget",
      "FAQ section for borrowers",
      "Testimonials from funded deals"
    ],
  },
  {
    id: "private-equity",
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Private Equity",
    tagline: "Strategic Capital for Ambitious Operators.",
    description:
      "We partner with high-performing operators to co-invest, co-build, and scale real estate portfolios. From value-add multifamily to commercial acquisitions, we bring capital and expertise together.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&fit=crop",
    features: [
      {
        title: "SXP Capital Fund Overview",
        desc: "Investment thesis, fund structure, minimum investments, and projected returns"
      },
      {
        title: "Fractional Ownership",
        desc: "Real-world asset-backed tokens, blockchain integration, and accessible entry points for investors"
      },
      {
        title: "Development Pipeline",
        desc: "Current and upcoming projects, property portfolios, and partnership opportunities"
      },
      {
        title: "Investor Portal",
        desc: "Secure login for investors with dashboard showing portfolio performance and distributions"
      }
    ],
  },
  {
    id: "blockchain",
    icon: <Globe className="w-8 h-8" />,
    title: "Blockchain",
    tagline: "The Future of Real Estate Finance.",
    description:
      "Integrating cutting-edge blockchain technology with traditional investment vehicles. We specialize in Real Estate backed Security Tokens, providing liquidity and global access to institutional-grade assets.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80&fit=crop",
    features: [
      {
        title: "Security Token Offerings (STO)",
        desc: "Asset-backed tokens representing fractional ownership in high-value real estate portfolios."
      },
      {
        title: "Enhanced Liquidity",
        desc: "Secondary market trading capabilities for traditionally illiquid real estate investments."
      },
      {
        title: "Smart Contract Automation",
        desc: "Automated distributions, compliance, and governance through programmable legal frameworks."
      },
      {
        title: "Global Capital Access",
        desc: "Democratizing access to US real estate for international investors through decentralized systems."
      },
      {
        title: "Transparent Ledger",
        desc: "Immutable record-keeping and real-time reporting for absolute investor confidence."
      },
      {
        title: "Fractional Ownership",
        desc: "Lowering entry barriers for high-quality assets while maintaining institutional-grade security."
      }
    ],
  },
];

export const metadata = {
  title: "Real Estate | Adam Cohen",
  description: "Institutional-grade real estate strategies. Hard money lending, private equity partnerships, and mortgage acceleration programs.",
};

export default function RealEstate() {
  return <RealEstatePageClient services={services} />;
}
