import AboutPageClient from "./_components/AboutPageClient";
import { getCmsData } from "@/lib/cms";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "About Adam S. Cohen | Visionary Entrepreneur & Real Estate Expert",
  description: "Explore the professional journey of Adam S. Cohen, from founding London's first cellular retailers at 16 to leading global real estate and blockchain initiatives.",
};

export default async function About() {
  const [timelineData, achievementData, heroData, diffData] = await Promise.all([
    getCmsData("timeline"),
    getCmsData("achievements"),
    getCmsData("about-hero"),
    getCmsData("about-differences")
  ]);
  
  // Official Biography Timeline blocks from Adam S. Cohen's official bio
  const storyBlocks = [
    {
      age: "1990 (Age 16)",
      title: "Cellular Telecommunications Launch",
      text: "Launched his first business in cellular telecommunications, starting with a single retail store. He quickly expanded the operation to five stores before pivoting into wholesale, distribution, and the worldwide export of his own brand of mobile accessories. Within less than five years of its launch, he successfully sold the business to a public company."
    },
    {
      age: "1995 (Age 21)",
      title: "Real Estate & Mortgage Impossible",
      text: "Transitioned his career into real estate. Opened a local real estate firm in London’s West End (Marylebone Village). Around this same time, he began directly investing in real estate and launched his first mortgage company, Mortgage Impossible, focusing specifically on bridge lending and repurposing distressed assets."
    },
    {
      age: "1999 (Age 25)",
      title: "London Business School MBA",
      text: "Earned an MBA in Business, Finance, and Marketing from London Business School. Throughout his career, Adam has proved to be an expert in marketing, utilizing strategic branding and market positioning as instrumental drivers for the rapid success and growth of his businesses."
    },
    {
      age: "2000 (Age 26)",
      title: "Expansion to the United States",
      text: "Moved to the United States to expand his entrepreneurial footprint in real estate, private lending, and equity markets. Established a robust track record in residential and commercial real estate brokerage, investment, development, and portfolio building."
    },
    {
      age: "Pre-2008",
      title: "Private Capital & Partnerships",
      text: "Focused extensively on raising capital, structuring equity, and assembling private partnerships to pursue real estate transactions and business opportunities. Developed significant expertise in investor relations, partnership structuring, and private capital formation."
    },
    {
      age: "Modern Era",
      title: "Mentorship & Brand Management",
      text: "Added business development and brand management to his repertoire. He leverages his extensive track record to consult, mentor, and guide other entrepreneurs, helping them stand out from the crowd, navigate market complexities, and achieve their maximum success."
    }
  ];

  // Official high-impact achievements/milestones
  const achievements = [
    { val: "$1B+", label: "Transactions Funded", desc: "Across UK & US markets" },
    { val: "30+", label: "Years of Experience", desc: "Hands-on industry leadership" },
    { val: "Age 16", label: "First Cellular Venture", desc: "Sold to a public company" },
    { val: "LBS MBA", label: "London Business School", desc: "Graduated in 1999" },
    { val: "25+", label: "Years in USA", desc: "Expanding global footprint" }
  ];

  // What sets Adam apart items based on official bio
  const differences = [
    { title: "Capital Stack Mastery", description: "Experience working across the full capital stack, advising on acquisitions, development, and recapitalizations." },
    { title: "Market Cycle Expertise", description: "A deep, long-term understanding of market cycles and highly disciplined underwriting." },
    { title: "Creative Deal Structuring", description: "Renowned for identifying opportunities, structuring deals creatively, and delivering solutions across all conditions." },
    { title: "Strategic Branding", description: "Expertise in marketing, strategic branding, and market positioning to drive rapid business success." }
  ];

  return <AboutPageClient 
    hero={Array.isArray(heroData) ? heroData[0] : heroData} 
    storyBlocks={storyBlocks} 
    achievements={achievements} 
    differences={differences}
  />;
}
