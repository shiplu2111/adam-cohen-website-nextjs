import PrivateEquityPageClient from "./_components/PrivateEquityPageClient";
import { Building2, Globe, TrendingUp, Shield } from "lucide-react";

const strategies = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Multifamily Acquisitions",
    description: "Value-add apartment communities where operational improvements unlock substantial equity growth.",
    target: "$2M – $20M deals",
    returns: "18–25% IRR target",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Commercial Real Estate",
    description: "Office, industrial, retail, and mixed-use assets in high-growth metros with strong fundamentals.",
    target: "$5M – $50M deals",
    returns: "15–22% IRR target",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Development & Ground-Up",
    description: "Ground-up residential and mixed-use development in supply-constrained urban markets.",
    target: "$3M – $30M deals",
    returns: "20–30% IRR target",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Distressed Assets",
    description: "Opportunistic acquisitions of distressed or underperforming properties at significant discounts.",
    target: "$1M – $15M deals",
    returns: "25–35% IRR target",
  },
];

const investorBenefits = [
  "Preferred return of 8% before profits split",
  "Quarterly cash flow distributions",
  "Full transparency — monthly investor reporting",
  "Co-investment alongside Adam Cohen's capital",
  "Access to off-market deal flow",
  "Dedicated investor relations manager",
  "Tax-advantaged structures (1031, DST options)",
  "Exit strategies planned from day one",
];

const process = [
  {
    step: "01",
    title: "Investor Inquiry",
    desc: "Submit your interest and accreditation details. We'll schedule an introductory call within 48 hours.",
  },
  {
    step: "02",
    title: "Deal Review",
    desc: "Receive a detailed investment memorandum covering the asset, market, projections, and risk profile.",
  },
  {
    step: "03",
    title: "Due Diligence",
    desc: "We walk you through our underwriting model, comparable sales, and operational plan in full.",
  },
  {
    step: "04",
    title: "Capital Commitment",
    desc: "Sign the operating agreement and wire capital. You're officially a co-investor in the deal.",
  },
  {
    step: "05",
    title: "Active Management",
    desc: "We manage the asset. You receive quarterly reports, distributions, and direct access to our team.",
  },
  {
    step: "06",
    title: "Exit & Returns",
    desc: "At disposition, profits are distributed per the waterfall — you get your principal + returns.",
  },
];

export const metadata = {
  title: "Private Equity Real Estate | Co-Invest with Adam Cohen",
  description: "Institutional-grade real estate investment opportunities. Co-invest in multifamily, commercial, and development deals with $500M+ AUM.",
};

export default function PrivateEquity() {
  return (
    <PrivateEquityPageClient 
      strategies={strategies} 
      investorBenefits={investorBenefits} 
      process={process} 
    />
  );
}
