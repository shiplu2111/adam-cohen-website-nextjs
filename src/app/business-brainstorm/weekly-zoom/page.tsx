import WeeklyZoomPageClient from "./_components/WeeklyZoomPageClient";
import { getCmsData } from "@/lib/cms";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

async function getWeeklyZoomSettings() {
  try {
    const res = await fetch(`${API_URL}/public/weekly-zoom-settings`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data.data || null;
  } catch {
    return null;
  }
}

export const metadata = {
  title: "Weekly Zoom | Business Brainstorm by Adam Cohen",
  description:
    "Live, interactive coaching sessions every week with Adam Cohen. Real answers to real problems, direct access, and community accountability.",
};

export default async function WeeklyZoom() {
  const [settings, expectations, includes, schedules, testimonials] = await Promise.all([
    getWeeklyZoomSettings(),
    getCmsData("weekly-zoom-expectations"),
    getCmsData("weekly-zoom-includes"),
    getCmsData("weekly-zoom-schedules"),
    getCmsData("weekly-zoom-testimonials"),
  ]);

  return (
    <WeeklyZoomPageClient
      settings={settings}
      expectations={expectations}
      includes={includes}
      schedules={schedules}
      testimonials={testimonials}
    />
  );
}
