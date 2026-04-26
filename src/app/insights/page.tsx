import InsightsPageClient from "./_components/InsightsPageClient";
import { blogPosts } from "@/data/blogData";

export const metadata = {
  title: "Insights | Adam Cohen",
  description: "Market intelligence and strategic frameworks for real estate and business investing from Adam Cohen.",
};

export default function Insights() {
  return <InsightsPageClient posts={blogPosts} />;
}
