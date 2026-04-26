import ServicesPageClient from "./_components/ServicesPageClient";

const servicePillars = [
  { 
    icon: "🏠", 
    title: "Real Estate Investment", 
    description: "Strategic acquisition and management of high-yield commercial and residential portfolios.", 
    outcome: "Build a recession-proof property empire with passive cash flow.",
    benefits: ["Portfolio Diversification", "Market Analysis", "Risk Mitigation"],
    tag: "Wealth Creation"
  },
  { 
    icon: "💸", 
    title: "Private Lending", 
    description: "Custom capital solutions and liquidity for ambitious developers and high-growth ventures.", 
    outcome: "Access the leverage needed to close your most ambitious deals.",
    benefits: ["Swift Approvals", "Flexible Terms", "Asset-Backed Funding"],
    tag: "Capital Access"
  },
  { 
    icon: "🧠", 
    title: "Business Consulting", 
    description: "Deep-dive operational scaling and strategic mastery for founders ready to 10x their growth.", 
    outcome: "A battle-tested roadmap for undisputed market dominance.",
    benefits: ["Scalability Systems", "Revenue Audits", "Elite Leadership"],
    tag: "Growth Mastery"
  },
  { 
    icon: "🤝", 
    title: "Deal Structuring", 
    description: "Navigating high-stakes negotiation and complex acquisitions with surgical precision.", 
    outcome: "Optimize every term to maximize value and minimize exposure.",
    benefits: ["Strategic Negotiation", "Tax Efficiency", "Equity Optimization"],
    tag: "Executive Strategy"
  },
];

const performanceMetrics = [
  { val: "150+", label: "Deals Closed" },
  { val: "22%", label: "Average ROI" },
  { val: "$500M+", label: "Transactional Volume" },
  { val: "12+", label: "Global Markets" },
];

export const metadata = {
  title: "Services | Architecture of Success | Adam Cohen",
  description: "Explore the service pillars of Adam Cohen: Real Estate Investment, Private Lending, Business Consulting, and Deal Structuring. Transforming visions into high-yield results.",
};

export default function Services() {
  return (
    <ServicesPageClient 
      servicePillars={servicePillars} 
      performanceMetrics={performanceMetrics} 
    />
  );
}
