import LiveEventsPageClient from "./_components/LiveEventsPageClient";
import { getCmsData } from "@/lib/cms";

export const metadata = {
  title: "Live Events | Business Brainstorm by Adam Cohen",
  description:
    "Immersive in-person experiences that compress years of growth into two days. Connect with elite entrepreneurs, investors, and industry leaders.",
};

export default async function LiveEvents() {
  const [events, features, ticketTiers, testimonials] = await Promise.all([
    getCmsData("live-events"),
    getCmsData("live-event-features"),
    getCmsData("live-event-ticket-tiers"),
    getCmsData("live-event-testimonials"),
  ]);

  return (
    <LiveEventsPageClient
      events={events}
      features={features}
      ticketTiers={ticketTiers}
      testimonials={testimonials}
    />
  );
}
