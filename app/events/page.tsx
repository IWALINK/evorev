import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fetchEvents } from "@/lib/api";
import { HeroSection, EventsSection, EventsList } from "./components";

export const metadata: Metadata = {
  title: "Événements | Évorev",
  description:
    "Découvrez les prochains événements organisés par Évorev et rejoignez notre communauté.",
};

export default async function EventsPage() {
  const events = await fetchEvents();
  const featuredEvent = events[0];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection featuredEvent={featuredEvent} />

      <EventsSection>
        <EventsList events={events} featuredEvent={featuredEvent} />
      </EventsSection>

      <Footer />
    </main>
  );
}
