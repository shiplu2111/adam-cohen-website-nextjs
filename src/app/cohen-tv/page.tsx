import { getCmsData } from "@/lib/cms";
import CohenTvClient, { CohenTvVideo } from "./_components/CohenTvClient";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Cohen TV | Adam Cohen",
  description: "Watch exclusive insights on real estate, wealth management, and strategic business growth.",
};

export default async function CohenTVPage() {
  const videoData = await getCmsData("cohen-tv-videos");
  
  // Filter only published videos and Cohen TV type
  const publishedVideos = Array.isArray(videoData) 
    ? videoData.filter((v: CohenTvVideo) => v.is_published && (v.type === 'Cohen TV' || !v.type))
    : [];

  return (
    <CohenTvClient initialVideos={publishedVideos} />
  );
}
