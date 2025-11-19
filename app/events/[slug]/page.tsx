import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import EventDetailPageClient from "../_components/EventDetailPageClient";

type PageProps = {
  params: {
    slug: string;
  };
};

export const metadata: Metadata = {
  title: "Événement | Évorev",
  description: "Découvrez les détails de cet événement Évorev.",
};

export default function EventDetailPage({ params }: PageProps) {
  console.log(`🏠 [EventDetailPage] Rendu de la page événement: ${params.slug}`);
  
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <EventDetailPageClient slug={params.slug} />
      <Footer />
    </main>
  );
}

