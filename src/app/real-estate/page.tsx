import RealEstatePageClient from "./_components/RealEstatePageClient";
import { DollarSign, TrendingUp, Home } from "lucide-react";

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
    id: "investment",
    icon: <Home className="w-8 h-8" />,
    title: "Real Estate Investment",
    tagline: "Build Generational Wealth Through Real Assets.",
    description:
      "We provide institutional-grade investment opportunities for both accredited and non-accredited investors. Our focus is on high-yield, recession-resistant assets that deliver consistent cash flow and long-term capital appreciation.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&fit=crop",
    features: [
      {
        title: "Diversified Portfolios",
        desc: "Access to a wide range of asset classes, including residential, commercial, and industrial properties."
      },
      {
        title: "Expert Asset Selection",
        desc: "Meticulous due diligence and data-driven underwriting to identify undervalued opportunities."
      },
      {
        title: "Risk-Adjusted Returns",
        desc: "Strategies designed to maximize upside while protecting capital through conservative leverage."
      },
      {
        title: "Full Transparency",
        desc: "Regular performance updates, tax documentation, and clear communication on project milestones."
      },
      {
        title: "Tax Optimization",
        desc: "Structure investments to leverage depreciation and other tax benefits inherent in real estate."
      },
      {
        title: "Exit Strategy Management",
        desc: "Clear timelines and professionally managed liquidations to ensure maximum ROI for partners."
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
