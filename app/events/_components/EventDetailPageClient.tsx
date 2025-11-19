"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Event } from "@/lib/api";
import EventDetailHero from "./EventDetailHero";
import EventDetailContent from "./EventDetailContent";
import RelatedEvents from "./RelatedEvents";

type EventDetailPageClientProps = {
  slug: string;
};

export default function EventDetailPageClient({ slug }: EventDetailPageClientProps) {
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log(`🚀 [EventDetailPageClient] Début du chargement de l'événement: ${slug}`);
    
    async function loadEventData() {
      try {
        setLoading(true);
        
        // Charger l'événement principal
        console.log(`📡 [EventDetailPageClient] Appel API vers /api/events/${slug}`);
        const eventResponse = await fetch(
          `https://back.evorevresearch.ch/api/events/${slug}`,
          { cache: "no-store" }
        );

        console.log("📥 [EventDetailPageClient] Réponse événement reçue, status:", eventResponse.status);

        if (!eventResponse.ok) {
          if (eventResponse.status === 404) {
            console.warn("⚠️ [EventDetailPageClient] Événement non trouvé (404)");
            router.push("/not-found");
            return;
          }
          throw new Error(`Erreur HTTP: ${eventResponse.status}`);
        }

        const eventResult = await eventResponse.json();
        console.log("✅ [EventDetailPageClient] Événement parsé:", eventResult);

        if (eventResult.success && eventResult.data) {
          setEvent(eventResult.data);
          console.log(`✨ [EventDetailPageClient] Événement "${eventResult.data.title}" chargé`);
        } else {
          throw new Error("Événement non trouvé");
        }

        // Charger tous les événements pour les événements liés
        console.log("📡 [EventDetailPageClient] Chargement des événements liés...");
        const allEventsResponse = await fetch(
          "https://back.evorevresearch.ch/api/events",
          { cache: "no-store" }
        );

        console.log("📥 [EventDetailPageClient] Réponse événements liés reçue, status:", allEventsResponse.status);

        if (allEventsResponse.ok) {
          const allEventsResult = await allEventsResponse.json();
          if (allEventsResult.success && allEventsResult.data) {
            const related = allEventsResult.data
              .filter((item: Event) => item.slug !== slug)
              .slice(0, 3);
            setRelatedEvents(related);
            console.log(`✨ [EventDetailPageClient] ${related.length} événements liés chargés`);
          }
        }
      } catch (err) {
        console.error("❌ [EventDetailPageClient] Erreur:", err);
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
        console.log("🏁 [EventDetailPageClient] Chargement terminé");
      }
    }

    loadEventData();
  }, [slug, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Chargement de l'événement...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-red-50 p-8 text-center">
          <p className="text-red-600">Erreur: {error || "Événement non trouvé"}</p>
        </div>
      </div>
    );
  }

  return (
    <article>
      <EventDetailHero event={event} />
      <EventDetailContent event={event} />
      <RelatedEvents events={relatedEvents} />
    </article>
  );
}

