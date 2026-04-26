import PortfolioPageClient from "./_components/PortfolioPageClient";
import { getCmsData } from "@/lib/cms";
import { Metadata } from "next";

const caseStudies = [
  {
    title: "The Turnaround of Cohen Plaza",
    problem: "A class-C office building with 40% vacancy and $2M in deferred maintenance during a market downturn.",
    strategy: "Executed a strategic re-zoning plan, phased high-end renovations, and implemented an AI-driven property management system.",
    result: "Reached 98% occupancy within 18 months. Property valuation increased from $12M to $28.5M. Refinanced at an 11% LTV.",
  },
  {
    title: "Global Tech Venture Exit",
    problem: "Early-stage fintech startup struggling with unit economics and a fragmented growth strategy.",
    strategy: "Restructured the board, streamlined operational burn by 30%, and pivoted the product towards high-growth B2B markets.",
    result: "Acquired by a global payment processor for $120M. Adam Cohen's initial seed investment returned 14x in 4 years.",
  },
];

const performanceStats = [
  { val: "250+", label: "Total Deals Closed" },
  { val: "$1.4B+", label: "Total Transaction Volume" },
  { val: "15+", label: "Years of Market Mastery" },
];

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Portfolio | Proven Results & Real Deals | Adam Cohen",
  description: "Explore the track record of high-stakes acquisitions and strategic transformations by Adam Cohen. $1.4B+ total transaction volume.",
};

export default async function Portfolio() {
  const initialProjectsData = await getCmsData("projects", { page: 1, limit: 12 });
  const initialProjects = initialProjectsData.data || [];
  const meta = {
    total: initialProjectsData.total || 0,
    current_page: initialProjectsData.current_page || 1,
    last_page: initialProjectsData.last_page || 1
  };

  return (
    <PortfolioPageClient 
      initialProjects={initialProjects} 
      meta={meta}
      caseStudies={caseStudies} 
      performanceStats={performanceStats} 
    />
  );
}
