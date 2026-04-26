import InvestmentPageClient from "./_components/InvestmentPageClient";
import { BarChart3, Building2, ShieldCheck, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Asset Selection",
    description: "We target undervalued, multi-family and commercial assets in high-growth markets, leveraging data-driven underwriting to ensure safety and upside.",
    impact: "Top 5% of markets",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Tax Efficiency",
    description: "Our legal and financial structures are designed to maximize depreciation and leverage tax incentives, keeping more capital in your pocket.",
    impact: "Minimize tax burden",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Capital Protection",
    description: "Using conservative leverage and institutional-grade oversight, we prioritize the return of capital while chasing aggressive growth.",
    impact: "Risk-adjusted growth",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Diversification",
    description: "Spread your risk across multiple property types and geographic locations within a single managed portfolio.",
    impact: "Reduce volatility",
  },
];

const included = [
  "Comprehensive portfolio diversification analysis",
  "Quarterly performance & asset health reports",
  "Annual K-1 tax documentation preparation",
  "Institutional-grade property underwriting",
  "Access to off-market deal pipeline",
  "Co-investment opportunities with the principals",
  "24/7 Investor portal access",
  "Bi-annual strategy & portfolio review calls",
];

const results = [
  { val: "18%+",    label: "Target IRR",            sub: "annualized returns" },
  { val: "$500M+",  label: "Assets Under Management", sub: "across all funds" },
  { val: "250+",    label: "Active Investors",      sub: "building wealth" },
  { val: "100%",    label: "Capital Returned",      sub: "to date on exits" },
];

const steps = [
  {
    step: "01",
    title: "Investor Onboarding",
    desc: "Complete your investor profile and verify your accredited status to access our private placement memorandums.",
  },
  {
    step: "02",
    title: "Project Review",
    desc: "Browse our current open opportunities, review detailed underwriting, and attend our live project webinars.",
  },
  {
    step: "03",
    title: "Capital Allocation",
    desc: "Secure your position by signing the subscription agreement and funding your investment via our secure portal.",
  },
  {
    step: "04",
    title: "Asset Management",
    desc: "Monitor your investment's performance through our portal and receive regular quarterly distributions and updates.",
  },
];

export const metadata = {
  title: "Real Estate Investment | Institutional Grade Opportunities | Adam Cohen",
  description: "Invest in high-performing real estate alongside industry experts. Access off-market deals, multifamily portfolios, and institutional-grade asset management.",
};

export default function RealEstateInvestment() {
  return (
    <InvestmentPageClient 
      title="Real Estate Investment"
      subtitle="Institutional-grade opportunities for the modern investor."
      pillars={pillars} 
      included={included} 
      results={results} 
      steps={steps} 
    />
  );
}
