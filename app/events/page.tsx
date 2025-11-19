import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EventsPageClient from "./_components/EventsPageClient";

export const metadata: Metadata = {
  title: "Événements | Évorev",
  description:
    "Découvrez les prochains événements organisés par Évorev et rejoignez notre communauté.",
};

export default function EventsPage() {
  console.log("🏠 [EventsPage] Rendu de la page événements");
  
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <EventsPageClient />
      <Footer />
    </main>
  );
}

