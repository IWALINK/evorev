import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fetchEventBySlug, fetchEvents } from "@/lib/api";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const events = await fetchEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const event = await fetchEventBySlug(params.slug);

  if (!event) {
    return {
      title: "Événement introuvable | Évorev",
      description:
        "L'événement que vous cherchez n'existe pas ou n'est plus disponible.",
    };
  }

  return {
    title: `${event.title} | Événements Évorev`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "article",
      url: `https://app.evorevresearch.ch/events/${event.slug}`,
      ...(event.image && {
        images: [
          {
            url: event.image,
            width: 1200,
            height: 630,
            alt: event.title,
          },
        ],
      }),
    },
  };
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default async function EventDetailPage({ params }: PageProps) {
  const event = await fetchEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  const allEvents = await fetchEvents();
  const relatedEvents = allEvents
    .filter((item) => item.slug !== event.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
     
    </main>
  );
}

