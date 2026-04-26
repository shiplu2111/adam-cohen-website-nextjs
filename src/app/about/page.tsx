import AboutPageClient from "./_components/AboutPageClient";
import { getCmsData } from "@/lib/cms";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "About Adam Cohen | Engineering Empires",
  description: "Learn about Adam Cohen's journey from a young entrepreneur to a global titan with over $500M in assets under strategy.",
};

export default async function About() {
  const [timelineData, achievementData, heroData, diffData] = await Promise.all([
    getCmsData("timeline"),
    getCmsData("achievements"),
    getCmsData("about-hero"),
    getCmsData("about-differences")
  ]);
  
  const storyBlocks = Array.isArray(timelineData) && timelineData.length > 0 ? timelineData.map((t: any) => ({
    age: t.year_or_age,
    title: t.title,
    text: t.description || ""
  })) : [];

  const achievements = Array.isArray(achievementData) && achievementData.length > 0 ? achievementData.map((a: any) => ({
    val: a.value,
    label: a.label,
    desc: a.description || ""
  })) : [];

  const differences = Array.isArray(diffData) ? diffData : [];

  return <AboutPageClient 
    hero={Array.isArray(heroData) ? heroData[0] : heroData} 
    storyBlocks={storyBlocks} 
    achievements={achievements} 
    differences={differences}
  />;
}
